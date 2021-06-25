import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from '../../respository/users.repository';
import { User } from '../../graphql.schema';

@Injectable()
export class UsersService {
    private logger: Logger = new Logger(UsersService.name);

    constructor(
        @InjectRepository(UsersRepository) private usersRepository: UsersRepository
    ) {}

    async getUsers(): Promise<User[]> {
        try {
            this.logger.debug(`getting users`);
            return await this.usersRepository.getUsers();
        } catch (error) {
            throw error;
        }
    }
}