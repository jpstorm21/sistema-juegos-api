import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { Users } from './users.entity';
import { RolesPermission } from './rolesPermission.entity';

@Entity()
export class Roles extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', type: 'text', nullable: true })
  name: string;

  @Column({ name: 'created_at', default: 'now', nullable: true })
  createdAt: Date;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: Date;

  @Column({ name: 'deleted_at', nullable: true })
  deletedAt: Date;

  @OneToMany(() => Users, (user) => user.role)
  users: Users[];

  @OneToMany(() => RolesPermission, (rolesPermission) => rolesPermission.role)
  rolesPermission: RolesPermission[];
}
