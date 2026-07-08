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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuancesController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const roles_guard_1 = require("../auth/roles.guard");
const roles_decorator_1 = require("../auth/roles.decorator");
const client_1 = require("@prisma/client");
const issuances_service_1 = require("./issuances.service");
const create_batch_dto_1 = require("./dto/create-batch.dto");
let IssuancesController = class IssuancesController {
    issuancesService;
    constructor(issuancesService) {
        this.issuancesService = issuancesService;
    }
    async createBatch(createBatchDto, req) {
        const user = req.user;
        return this.issuancesService.createBatch(user.agencyId, user.id, createBatchDto);
    }
    async findAll(req, page, limit, search) {
        const user = req.user;
        const pageNum = page ? parseInt(page, 10) : 1;
        const limitNum = limit ? parseInt(limit, 10) : 20;
        return this.issuancesService.findAll(user.agencyId, isNaN(pageNum) ? 1 : pageNum, isNaN(limitNum) ? 20 : limitNum, search);
    }
    async revoke(id, req) {
        const user = req.user;
        return this.issuancesService.revoke(user.agencyId, id);
    }
};
exports.IssuancesController = IssuancesController;
__decorate([
    (0, common_1.Post)('batch'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_batch_dto_1.CreateBatchDto, Object]),
    __metadata("design:returntype", Promise)
], IssuancesController.prototype, "createBatch", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __param(3, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", Promise)
], IssuancesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(':id/revoke'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], IssuancesController.prototype, "revoke", null);
exports.IssuancesController = IssuancesController = __decorate([
    (0, common_1.Controller)('issuances'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(client_1.Role.ADMIN),
    __metadata("design:paramtypes", [issuances_service_1.IssuancesService])
], IssuancesController);
//# sourceMappingURL=issuances.controller.js.map