import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from '../respository/users.repository';
import { RolesPermissionRepository } from '../respository/rolesPermission.repository';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([UsersRepository, RolesPermissionRepository])
    ],
    providers: [UsersService, UsersResolver]
})

export class UsersModule {};