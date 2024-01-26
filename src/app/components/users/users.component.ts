import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  usersList: any[] = [];
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersList = this.usersService.getUsers();
  }
}
