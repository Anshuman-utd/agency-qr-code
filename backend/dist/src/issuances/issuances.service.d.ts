import { PrismaService } from '../prisma/prisma.service';
import { CreateBatchDto } from './dto/create-batch.dto';
export declare class IssuancesService {
    private prisma;
    constructor(prisma: PrismaService);
    createBatch(agencyId: string, createdById: string, dto: CreateBatchDto): Promise<{
        id: string;
        agencyId: string;
        token: string;
        status: import("@prisma/client").$Enums.QrStatus;
        issuedAt: Date;
        createdBy: string | null;
        labelText: string | null;
    }[]>;
    findAll(agencyId: string, page?: number, limit?: number, search?: string): Promise<{
        items: {
            id: string;
            agencyId: string;
            token: string;
            status: import("@prisma/client").$Enums.QrStatus;
            issuedAt: Date;
            createdBy: string | null;
            labelText: string | null;
        }[];
        page: number;
        limit: number;
        total: number;
        activeCount: number;
        revokedCount: number;
        totalPages: number;
    }>;
    revoke(agencyId: string, id: string): Promise<{
        id: string;
        agencyId: string;
        token: string;
        status: import("@prisma/client").$Enums.QrStatus;
        issuedAt: Date;
        createdBy: string | null;
        labelText: string | null;
    }>;
}
