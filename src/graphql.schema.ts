
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class Role {
    id: string;
    name?: string;
}

export abstract class IQuery {
    abstract getUsers(): User[] | Promise<User[]>;
}

export class User {
    id: string;
    name?: string;
    email?: string;
    passwordHash?: string;
    passwordSalt?: string;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
    role?: Role;
}
