import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RolesPermissionRepository } from '../../respository/rolesPermission.repository';
import { RolePermission } from '../../graphql.schema';

@Injectable()
export class RolesService {
  private logger: Logger = new Logger(RolesService.name);

  constructor(
    @InjectRepository(RolesPermissionRepository)
    private rolesPermissionRepository: RolesPermissionRepository,
  ) {}

  async getRolesPermission(): Promise<RolePermission[]> {
    try {
      this.logger.debug(`getting roles and permission`);
      return await this.rolesPermissionRepository.getRolesPerssions();
    } catch (error) {
      throw error;
    }
  }
}
