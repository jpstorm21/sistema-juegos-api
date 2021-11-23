import { Injectable } from '@nestjs/common';
import { Repository, EntityRepository } from 'typeorm';
import { RolesPermission } from '../entities/rolesPermission.entity';

@Injectable()
@EntityRepository(RolesPermission)
export class RolesPermissionRepository extends Repository<RolesPermission> {
  public async getRolesPerssions(): Promise<any[]> {
    try {
      return await this.find({ relations: ['role', 'page', 'page.menu'] });
      // return await this.createQueryBuilder('roles_permission')
      // .select(`json_build_object('id', p.id, 'name', p.name, 'link', p.link, 'icon', p.icon, 'createdAt', p.created_at, 'updateAt', p.updated_at, 'deletedAt', p.deleted_at,
      //         'menu', json_build_object('id', m.id, 'name', m.name, 'createdAt', m.created_at, 'updateAt', m.updated_at, 'deletedAt', m.deleted_at)) as page`)
      // .addSelect("json_build_object('id', r.id, 'name', r.name, 'createdAt', r.created_at, 'updateAt', r.updated_at, 'deletedAt', r.deleted_at) as role")
      // .innerJoin('roles', 'r', 'r.id = roles_permission.id_rol')
      // .innerJoin('pages', 'p', 'p.id = roles_permission.id_page')
      // .innerJoin('menus', 'm', 'm.id = p.id_menu')
      // .getRawMany();
    } catch (error) {
      throw error;
    }
  }
}
