import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
} from 'typeorm';
import { Roles } from './roles.entity';
import { Pages } from './pages.entity';

@Entity()
export class RolesPermission extends BaseEntity {
    @Column({ name: 'created_at', default: 'now', nullable: true })
    createdAt: Date;

    @Column({ name: 'updated_at', nullable: true })
    updatedAt: Date;

    @Column({ name: 'deleted_at', nullable: true })
    deletedAt: Date;

    @Column({ name: 'id_page', type: 'uuid', primary: true })
    @JoinColumn({ name: 'id_page' })
    @ManyToOne(() => Pages)
    page: Pages;

    @Column({ name: 'id_rol', type: 'uuid', primary: true })
    @JoinColumn({ name: 'id_rol' })
    @ManyToOne(() => Roles)
    role: Roles;
}
