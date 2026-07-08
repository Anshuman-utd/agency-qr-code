import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBatchDto } from './dto/create-batch.dto';
import { randomUUID } from 'crypto';
import { QrStatus } from '@prisma/client';

@Injectable()
export class IssuancesService {
  constructor(private prisma: PrismaService) {}

  async createBatch(agencyId: string, createdById: string, dto: CreateBatchDto) {
    const tokensData = [];
    for (let i = 0; i < dto.count; i++) {
      tokensData.push({
        agencyId,
        token: `AGQ_${randomUUID()}`,
        status: QrStatus.ACTIVE,
        createdBy: createdById,
        labelText: dto.labelText || null,
      });
    }

    await this.prisma.qRIssuance.createMany({
      data: tokensData,
    });

    const createdTokens = tokensData.map((d) => d.token);
    return this.prisma.qRIssuance.findMany({
      where: {
        token: { in: createdTokens },
      },
      orderBy: {
        issuedAt: 'desc',
      },
    });
  }

  async findAll(agencyId: string, page: number = 1, limit: number = 20, search?: string) {
    const sanitizedPage = Math.max(1, page);
    const sanitizedLimit = Math.min(Math.max(limit, 1), 100);
    const skip = (sanitizedPage - 1) * sanitizedLimit;

    const where: any = { agencyId };
    if (search && search.trim()) {
      where.OR = [
        { token: { contains: search.trim(), mode: 'insensitive' } },
        { labelText: { contains: search.trim(), mode: 'insensitive' } },
      ];
    }

    const [items, total, activeCount, revokedCount] = await Promise.all([
      this.prisma.qRIssuance.findMany({
        where,
        orderBy: {
          issuedAt: 'desc',
        },
        skip,
        take: sanitizedLimit,
      }),
      this.prisma.qRIssuance.count({ where }),
      this.prisma.qRIssuance.count({ where: { ...where, status: 'ACTIVE' } }),
      this.prisma.qRIssuance.count({ where: { ...where, status: 'REVOKED' } }),
    ]);

    return {
      items,
      page: sanitizedPage,
      limit: sanitizedLimit,
      total,
      activeCount,
      revokedCount,
      totalPages: Math.ceil(total / sanitizedLimit),
    };
  }

  async revoke(agencyId: string, id: string) {
    const issuance = await this.prisma.qRIssuance.findUnique({
      where: { id },
    });

    if (!issuance) {
      throw new NotFoundException('QR issuance record not found');
    }

    if (issuance.agencyId !== agencyId) {
      throw new ForbiddenException('You can only revoke QR tokens issued by your agency');
    }

    return this.prisma.qRIssuance.update({
      where: { id },
      data: {
        status: QrStatus.REVOKED,
      },
    });
  }
}
