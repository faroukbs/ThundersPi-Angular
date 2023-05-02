import { Router } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/role';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser : User = new User();

  constructor(private authenticationService :AuthenticationService, private router: Router) { 
    this.authenticationService.currentUser.subscribe(data => {
      this.currentUser = data
    })
  }

  isAdmin(){
    return this.currentUser?.role === Role.ADMIN
  }

  logOut() {
    this.authenticationService.logOut();
    this.router.navigate(['/login'])
  }

  ngOnInit(): void {
  }

}