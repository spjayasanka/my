import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {User} from '../dto/user';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public form: FormGroup;
  regUser: User = new User('', '');

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  register() {
    console.log('email: ' + this.regUser.username);
    this.userService.register(this.regUser).subscribe(res => {
      alert('respond: ' + JSON.stringify(res));
    });
  }
}
