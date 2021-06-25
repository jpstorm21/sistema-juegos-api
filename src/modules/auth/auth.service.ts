import { HttpException, Injectable, Logger, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from '../../respository/users.repository';
import { InputLogin } from '../../graphql.schema';
import { verifyPassword } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
    private logger: Logger = new Logger(AuthService.name);

    constructor(
        @InjectRepository(UsersRepository) private usersRepository: UsersRepository,
    ) { }

    async login(loginData: InputLogin): Promise<any> {
        try {
            this.logger.debug(`login with data=${loginData}`);
            const { email, password } = loginData;

            if (!email) {
                throw new HttpException(
                    `param email is undefined`,
                    HttpStatus.BAD_REQUEST,
                );
            }

            if (!password) {
                throw new HttpException(
                    `param password is undefined`,
                    HttpStatus.BAD_REQUEST,
                );
            }

            const user = await this.usersRepository.findOne({
                where: { email: email },
            });

            if (!user) {
                throw new HttpException(
                    `user with email=${email} not exists`,
                    HttpStatus.BAD_REQUEST,
                );
            }

            const matchPassword = await verifyPassword(password, user.passwordHash);
            if (matchPassword) {
                delete user.passwordHash;
                delete user.passwordSalt;
                return user;
            }

            throw new HttpException(`password is incorrect`, HttpStatus.BAD_REQUEST);
        } catch (error) {
            throw error;
        }
    }
}
