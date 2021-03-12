import { Role } from './../@interface/enum/role';
import { User } from './../classes/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = new Array<User>();

  constructor() {
    this.users.push({"num": 100, "firstname": "Camille", "lastname": "Pasche"})
    this.users.push({"num": 200, "firstname": "Céline", "lastname": "Gatignon"})
    this.users.push({"num": 300, "firstname": "Kevin", "lastname": "Mir"})
  }
  
  public getAll(): User[] {
    return this.users;
  }

  public getUserById(id: number) {

  }

  public deleteUser(id: number) {

  }
  
  public createUser(user: User): void {
    this.users.push(user);
  }
}
