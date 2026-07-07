"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let VerifyService = class VerifyService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async verifyToken(userAgencyId, token) {
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
};
exports.VerifyService = VerifyService;
exports.VerifyService = VerifyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], VerifyService);
//# sourceMappingURL=verify.service.js.map