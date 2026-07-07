import { Strategy } from 'passport-jwt';
import { PrismaService } from '../prisma/prisma.service';
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    private prisma;
    constructor(prisma: PrismaService);
    validate(payload: {
        sub: string;
        email: string;
    }): Promise<{
        agency: {
            id: string;
            name: string;
            code: string;
            createdAt: Date;
        };
    } & {
        id: string;
        name: string;
        createdAt: Date;
        email: string;
        passwordHash: string;
        role: import("src/generated/prisma").$Enums.Role;
        isActive: boolean;
        agencyId: string;
    }>;
}
export {};
