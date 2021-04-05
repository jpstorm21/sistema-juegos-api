import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Menus } from './menus.entity';

@Entity()
export class Pages extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', type: 'text', nullable: true })
  name: string;

  @Column({ name: 'link', type: 'text', nullable: true })
  link: string;

  @Column({ name: 'icon', type: 'text', nullable: true })
  icon: string;

  @Column({ name: 'created_at', default: 'now', nullable: true })
  createdAt: Date;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: Date;

  @Column({ name: 'deleted_at', nullable: true })
  deletedAt: Date;

  @Column({ name: 'id_menu', type: 'uuid' })
  @JoinColumn({ name: 'id_menu' })
  @ManyToOne(() => Menus)
  menu: Menus;
}
