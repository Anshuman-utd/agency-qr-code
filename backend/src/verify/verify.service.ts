import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class VerifyService {
  constructor(private prisma: PrismaService) {}

  async verifyToken(userAgencyId: string, token: string) {
    const issuance = await this.prisma.qRIssuance.findUnique({
      where: { token },
      include: { agency: true },
    });

    if (!issuance) {
      return { valid: false, message: 'QR not found' };
    }

    if (issuance.status !== 'ACTIVE') {
      return { valid: false, message: 'QR is inactive' };
    }

    if (issuance.agencyId !== userAgencyId) {
      return { valid: false, message: 'Not issued by your agency' };
    }

    return {
      valid: true,
      agencyName: issuance.agency.name,
      message: `Issued by ${issuance.agency.name}`,
      status: issuance.status,
      issuedAt: issuance.issuedAt,
      labelText: issuance.labelText,
    };
  }
}
