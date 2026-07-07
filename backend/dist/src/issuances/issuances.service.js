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
exports.IssuancesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const crypto_1 = require("crypto");
const prisma_1 = require("../generated/prisma");
let IssuancesService = class IssuancesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createBatch(agencyId, createdById, dto) {
        const tokensData = [];
        for (let i = 0; i < dto.count; i++) {
            tokensData.push({
                agencyId,
                token: `AGQ_${(0, crypto_1.randomUUID)()}`,
                status: prisma_1.QrStatus.ACTIVE,
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
    async findAll(agencyId) {
        return this.prisma.qRIssuance.findMany({
            where: { agencyId },
            orderBy: {
                issuedAt: 'desc',
            },
        });
    }
    async revoke(agencyId, id) {
        const issuance = await this.prisma.qRIssuance.findUnique({
            where: { id },
        });
        if (!issuance) {
            throw new common_1.NotFoundException('QR issuance record not found');
        }
        if (issuance.agencyId !== agencyId) {
            throw new common_1.ForbiddenException('You can only revoke QR tokens issued by your agency');
        }
        return this.prisma.qRIssuance.update({
            where: { id },
            data: {
                status: prisma_1.QrStatus.REVOKED,
            },
        });
    }
};
exports.IssuancesService = IssuancesService;
exports.IssuancesService = IssuancesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], IssuancesService);
//# sourceMappingURL=issuances.service.js.map