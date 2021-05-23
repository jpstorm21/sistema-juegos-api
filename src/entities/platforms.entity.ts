import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
    OneToMany
} from 'typeorm';
import { PlatformsGames } from './platformsGames.entity';

@Entity()
export class Platforms extends BaseEntity {
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

    @OneToMany(() => PlatformsGames, (platformsGames) => platformsGames.platform)
    platformsGames: PlatformsGames[];
}
