import { VerifyService } from './verify.service';
import { VerifyDto } from './dto/verify.dto';
export declare class VerifyController {
    private verifyService;
    constructor(verifyService: VerifyService);
    verify(verifyDto: VerifyDto, req: any): Promise<{
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
