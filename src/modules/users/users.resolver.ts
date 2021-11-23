import { Resolver, Query } from '@nestjs/graphql';
import { User } from '../../graphql.schema';
import { UsersService } from './users.service';

@Resolver('Users')
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

  @Query('getUsers')
  async getUsers(): Promise<User[]> {
    return await this.userService.getUsers();
  }
}
