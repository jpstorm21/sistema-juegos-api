import { BaseEntity, Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Platforms } from './platforms.entity';
import { Games } from './games.entity';

@Entity()
export class PlatformsGames extends BaseEntity {
  @Column({ name: 'created_at', default: 'now', nullable: true })
  createdAt: Date;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: Date;

  @Column({ name: 'deleted_at', nullable: true })
  deletedAt: Date;

  @Column({ name: 'id_platform', type: 'uuid', primary: true })
  @JoinColumn({ name: 'id_platform' })
  @ManyToOne(() => Platforms)
  platform: Platforms;

  @Column({ name: 'id_game', type: 'uuid', primary: true })
  @JoinColumn({ name: 'id_game' })
  @ManyToOne(() => Games)
  game: Games;
}
