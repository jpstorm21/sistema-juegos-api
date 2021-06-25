import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { InputLogin, LoginResponse } from '../../graphql.schema';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';

@Resolver('Users')
export class AuthResolver {
    constructor(
        private readonly authService: AuthService,
        private jwtService: JwtService,
    ) {}

    @Mutation('login')
    async login(@Args('input') args: InputLogin): Promise<LoginResponse> {
        const user = await this.authService.login(args);

        const token = this.jwtService.sign({user});

        const response: LoginResponse = {
            token,
            user,
        };

        return response;
    }
}