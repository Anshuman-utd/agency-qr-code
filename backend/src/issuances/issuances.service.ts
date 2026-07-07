import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBatchDto } from './dto/create-batch.dto';
import { randomUUID } from 'crypto';
import { QrStatus } from '../generated/prisma';

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

  async findAll(agencyId: string) {
    return this.prisma.qRIssuance.findMany({
      where: { agencyId },
      orderBy: {
        issuedAt: 'desc',
      },
    });
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
