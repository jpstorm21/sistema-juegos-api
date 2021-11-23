import { BaseEntity, Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Users } from './users.entity';
import { Games } from './games.entity';

@Entity()
export class UsersGames extends BaseEntity {
  @Column({ name: 'created_at', default: 'now', nullable: true })
  createdAt: Date;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: Date;

  @Column({ name: 'deleted_at', nullable: true })
  deletedAt: Date;

  @Column({ name: 'installed', type: 'boolean', nullable: true })
  installed: boolean;

  @Column({ name: 'id_user', type: 'uuid', primary: true })
  @JoinColumn({ name: 'id_user' })
  @ManyToOne(() => Users)
  user: Users;

  @Column({ name: 'id_game', type: 'uuid', primary: true })
  @JoinColumn({ name: 'id_game' })
  @ManyToOne(() => Games)
  game: Games;
}
