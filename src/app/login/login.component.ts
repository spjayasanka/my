import { Component, OnInit } from '@angular/core';
import {User} from '../dto/user';
import {UserService} from '../service/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  regUser: User = new User('', '');

  constructor(private userService: UserService,
              private route: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.userService.login(this.regUser).subscribe(res => {
      if (res) {
        this.route.navigate(['/dashboard']);
      } else {
        console.log('error');
      }
    });
  }
}
