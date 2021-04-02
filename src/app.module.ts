import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

// Modules
import { UsersModule } from './users/users.module';

// Entities
import { Users, Roles } from './entities';

import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    UsersModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
      context: ({ req }) => ({ headers: req.headers }),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.TYPEORM_HOST,
      port: parseInt(process.env.TYPEORM_PORT, 10),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [Users, Roles],
      synchronize: true,
      retryDelay: 3000,
      retryAttempts: 10,
      keepConnectionAlive: true
    })
  ]
})
export class AppModule {}
