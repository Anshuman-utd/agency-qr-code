import { Controller, Get, Post, Patch, Body, Param, UseGuards, Request, Query } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '@prisma/client';
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
  async findAll(
    @Request() req: any,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('search') search?: string,
  ) {
    const user = req.user;
    const pageNum = page ? parseInt(page, 10) : 1;
    const limitNum = limit ? parseInt(limit, 10) : 20;
    
    return this.issuancesService.findAll(
      user.agencyId, 
      isNaN(pageNum) ? 1 : pageNum, 
      isNaN(limitNum) ? 20 : limitNum, 
      search
    );
  }

  @Patch(':id/revoke')
  async revoke(@Param('id') id: string, @Request() req: any) {
    const user = req.user;
    return this.issuancesService.revoke(user.agencyId, id);
  }
}
