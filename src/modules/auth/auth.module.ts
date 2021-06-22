import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        TypeOrmModule.forFeature([]),
        JwtModule.register({
            secret: 'secret',
            signOptions: { expiresIn: '60s' },
        })
    ],
    providers: []
})

export class AuthModule {};