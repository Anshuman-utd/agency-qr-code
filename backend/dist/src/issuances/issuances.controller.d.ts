import { IssuancesService } from './issuances.service';
import { CreateBatchDto } from './dto/create-batch.dto';
export declare class IssuancesController {
    private issuancesService;
    constructor(issuancesService: IssuancesService);
    createBatch(createBatchDto: CreateBatchDto, req: any): Promise<{
        id: string;
        agencyId: string;
        token: string;
        status: import("../generated/prisma").$Enums.QrStatus;
        issuedAt: Date;
        createdBy: string | null;
        labelText: string | null;
    }[]>;
    findAll(req: any): Promise<{
        id: string;
        agencyId: string;
        token: string;
        status: import("../generated/prisma").$Enums.QrStatus;
        issuedAt: Date;
        createdBy: string | null;
        labelText: string | null;
    }[]>;
    revoke(id: string, req: any): Promise<{
        id: string;
        agencyId: string;
        token: string;
        status: import("../generated/prisma").$Enums.QrStatus;
        issuedAt: Date;
        createdBy: string | null;
        labelText: string | null;
    }>;
}
