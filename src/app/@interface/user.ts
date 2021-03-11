import { Role } from './enum/role';
import { Status } from './enum/status';

export interface IUser {
    num: number;
    role?: Role;
    firstname: string;
    lastname?: string;
}

/*
export interface IRole {
    status: Status,
    role: Role
} */
