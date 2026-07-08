import { IssuancesService } from './issuances.service';
import { CreateBatchDto } from './dto/create-batch.dto';
export declare class IssuancesController {
    private issuancesService;
    constructor(issuancesService: IssuancesService);
    createBatch(createBatchDto: CreateBatchDto, req: any): Promise<{
        id: string;
        agencyId: string;
        token: string;
        status: import("@prisma/client").$Enums.QrStatus;
        issuedAt: Date;
        createdBy: string | null;
        labelText: string | null;
    }[]>;
    findAll(req: any, page?: string, limit?: string, search?: string): Promise<{
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
    revoke(id: string, req: any): Promise<{
        id: string;
        agencyId: string;
        token: string;
        status: import("@prisma/client").$Enums.QrStatus;
        issuedAt: Date;
        createdBy: string | null;
        labelText: string | null;
    }>;
}
