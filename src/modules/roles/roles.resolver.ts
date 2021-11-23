import { Resolver, Query } from '@nestjs/graphql';
import { RolePermission } from '../../graphql.schema';
import { RolesService } from './roles.service';

@Resolver('Roles')
export class RolesResolver {
  constructor(private readonly rolesService: RolesService) {}

  @Query('getRolesPermission')
  async getRolesPermission(): Promise<RolePermission[]> {
    return await this.rolesService.getRolesPermission();
  }
}
