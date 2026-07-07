import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'super-secret-agency-qr-token-key-2026',
    });
  }

  async validate(payload: { sub: string; email: string }) {
    const user = await this.prisma.agencyUser.findUnique({
      where: { id: payload.sub },
      include: { agency: true },
    });

    if (!user || !user.isActive) {
      throw new UnauthorizedException('User is not active or does not exist');
    }

    return user;
  }
}
