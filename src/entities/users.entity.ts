import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Roles } from './roles.entity';
@Entity()
export class Users extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ name: 'name', type: 'text', nullable: true })
    name: string

    @Column({ name: 'email', type: 'text', nullable: true })
    email: string

    @Column({ name: 'password_hash', type: 'text', nullable: true })
    passwordHash: string

    @Column({ name: 'password_salt', type: 'text', nullable: true })
    passwordSalt: string

    @Column({ name: 'created_at', default: 'now', nullable: true, type: 'timestamp' })
    createdAt: Date;

    @Column({ name: 'updated_at', nullable: true, type: 'timestamp' })
    updatedAt: Date;

    @Column({ name: 'deleted_at', nullable: true, type: 'timestamp' })
    deletedAt: Date;

    @Column({ name: 'role_id', type: 'uuid' })
    @JoinColumn({ name: 'role_id'})
    @ManyToOne(() => Roles)
    role: Roles;

}