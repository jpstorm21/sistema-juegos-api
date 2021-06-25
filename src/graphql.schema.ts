
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class InputLogin {
    email: string;
    password: string;
}

export abstract class IMutation {
    abstract login(input: InputLogin): LoginResponse | Promise<LoginResponse>;
}

export class LoginResponse {
    token: string;
    user: User;
}

export class Menu {
    id: string;
    name?: string;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
}

export class Page {
    id: string;
    name?: string;
    link?: string;
    icon?: string;
    menu?: Menu;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
}

export abstract class IQuery {
    abstract getRolesPermission(): RolePermission[] | Promise<RolePermission[]>;

    abstract getUsers(): User[] | Promise<User[]>;
}

export class Role {
    id: string;
    name?: string;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
}

export class RolePermission {
    page: Page;
    role: Role;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
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
