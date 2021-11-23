import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Categories } from './categories.entity';
import { UsersGames } from './usersGames.entity';
import { PlatformsGames } from './platformsGames.entity';

@Entity()
export class Games extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', type: 'text', nullable: true })
  name: string;

  @Column({
    name: 'created_at',
    default: 'now',
    nullable: true,
    type: 'timestamp',
  })
  createdAt: Date;

  @Column({ name: 'updated_at', nullable: true, type: 'timestamp' })
  updatedAt: Date;

  @Column({ name: 'deleted_at', nullable: true, type: 'timestamp' })
  deletedAt: Date;

  @Column({ name: 'id_categorie', type: 'uuid' })
  @JoinColumn({ name: 'id_categorie' })
  @ManyToOne(() => Categories)
  categorie: Categories;

  @OneToMany(() => UsersGames, (usersGames) => usersGames.game)
  usersGames: UsersGames[];

  @OneToMany(() => PlatformsGames, (platformsGames) => platformsGames.game)
  platformsGames: PlatformsGames[];
}
