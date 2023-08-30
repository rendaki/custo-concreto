import { User } from './../model/user';
import { Component, EventEmitter, Output} from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Output() loginEvent = new EventEmitter<boolean>();
  @Output() userEvent = new EventEmitter<string>();
  user!: User;
  invaliduser: boolean = false;
  onSubmit() {
    if (this.user.username === 'admin' && this.user.password === 'password') {
      this.invaliduser = false;
      this.loginEvent.emit(true);
      this.userEvent.emit(this.user.username);

    }
    else {
      this.invaliduser = true;
      this.user.password = '';
    }

  }

  ngOnInit(): void {
    this.user = new User;
    this.user.username = 'admin';
    this.user.password = 'password';
  }
}
