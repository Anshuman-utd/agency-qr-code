import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { VerifyService } from './verify.service';
import { VerifyDto } from './dto/verify.dto';
import { Throttle } from '@nestjs/throttler';

@Controller('verify')
@UseGuards(JwtAuthGuard)
export class VerifyController {
  constructor(private verifyService: VerifyService) {}

  @Throttle({ default: { limit: 60, ttl: 60000 } })
  @Post()
  async verify(@Body() verifyDto: VerifyDto, @Request() req: any) {
    const user = req.user;
    return this.verifyService.verifyToken(user.agencyId, verifyDto.token);
  }
}
