import { Injectable } from '@angular/core';

@Injectable(/*{
  providedIn: 'root' 
}*/)
  
export class UsersService {
  private users = [
    {
      userName: 'Max',
      age: 21,
    },
    {
      userName: 'Andrew',
      age: 30,
    },
    {
      userName: 'Anna',
      age: 28,
    },
    {
      userName: 'Viktor',
      age: 17,
    },
    {
      userName: 'Nastya',
      age: 24,
    },
    {
      userName: 'Igor',
      age: 32,
    },
    {
      userName: 'Dima',
      age: 25,
    },
  ];

  getUsers() {
    return this.users;
  }
}
