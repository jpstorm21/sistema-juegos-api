import { Injectable } from '@nestjs/common';
import { Repository, EntityRepository } from 'typeorm';
import { Users } from '../entities/users.entity';

@Injectable()
@EntityRepository(Users)
export class UsersRepository extends Repository<Users> {
    public async getUsers(): Promise<any[]> {
        try {
            return this.find();   
        } catch (error) {
            throw error;
        }
    }
}