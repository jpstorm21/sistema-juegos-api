import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesPermissionRepository } from '../respository/rolesPermission.repository';
import { RolesResolver } from './roles.resolver';
import { RolesService } from './roles.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([RolesPermissionRepository])
    ],
    providers: [RolesService, RolesResolver]
})

export class RolesModule {};