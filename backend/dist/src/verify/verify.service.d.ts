import { PrismaService } from '../prisma/prisma.service';
export declare class VerifyService {
    private prisma;
    constructor(prisma: PrismaService);
    verifyToken(userAgencyId: string, token: string): Promise<{
        valid: boolean;
        message: string;
        agencyName?: undefined;
        status?: undefined;
        issuedAt?: undefined;
        labelText?: undefined;
    } | {
        valid: boolean;
        agencyName: string;
        message: string;
        status: "ACTIVE";
        issuedAt: Date;
        labelText: string | null;
    }>;
}
