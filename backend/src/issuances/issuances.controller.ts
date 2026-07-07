import { Controller, Get, Post, Patch, Body, Param, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '../generated/prisma';
import { IssuancesService } from './issuances.service';
import { CreateBatchDto } from './dto/create-batch.dto';

@Controller('issuances')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(Role.ADMIN)
export class IssuancesController {
  constructor(private issuancesService: IssuancesService) {}

  @Post('batch')
  async createBatch(@Body() createBatchDto: CreateBatchDto, @Request() req: any) {
    const user = req.user;
    return this.issuancesService.createBatch(user.agencyId, user.id, createBatchDto);
  }

  @Get()
  async findAll(@Request() req: any) {
    const user = req.user;
    return this.issuancesService.findAll(user.agencyId);
  }

  @Patch(':id/revoke')
  async revoke(@Param('id') id: string, @Request() req: any) {
    const user = req.user;
    return this.issuancesService.revoke(user.agencyId, id);
  }
}
