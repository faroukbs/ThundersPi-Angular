import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css',
  '../../../assets/admin/css/paper-dashboard.css',
  '../../../assets/admin/demo/demo.css',
  '../../../assets/admin/css/bootstrap.min.css',
],
encapsulation: ViewEncapsulation.None,
})
export class UserListComponent implements OnInit {

  usersList: Array<User> = [];

  p: number=1;
  constructor(public userService: AuthenticationService) {}
  ngOnInit(): void {
    return this.getUsersList();
  }

  getUsersList(): void {
    this.userService.getAllUsers().subscribe((data: User[]) => {
      this.usersList = data;
    });
  }


  onDelete(user: User) {}

  delete(id: any) {
    this.userService.delete(id).subscribe(()=>this.userService.getAllUsers().subscribe((data: User[]) => {
      this.usersList = data;
    }));
    return this.getUsersList();
  }

  
}
