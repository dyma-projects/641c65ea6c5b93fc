import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  public users!: string[];

  constructor(private userService: UsersService)
  {}

  ngOnInit() {
    this.userService.users$.subscribe(users => {
      this.users = users;
    });
  }
}
