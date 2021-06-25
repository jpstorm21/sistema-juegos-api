import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { UsersRepository } from 'src/respository/users.repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([UsersRepository]),
        JwtModule.register({
            secret: 'secret',
            signOptions: { expiresIn: '1hr' },
        }),
    ],
    providers: []
})

export class AuthModule {};