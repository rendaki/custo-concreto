import { UserService } from './../services/user.service';
import { User } from './../model/user';
import { Component, EventEmitter, Output} from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private userService: UserService) { }

  @Output() loginEvent = new EventEmitter<boolean>();
  @Output() userEvent = new EventEmitter<string>();
  user!: User;
  dbuser: User = new User;
  invaliduser: boolean = false;
  onSubmit() {
    this.userService.getByUserName(this.user.username).subscribe(
      {
        next: (u) => {

          if (this.user.username === u[0].username && this.user.password === u[0].password) {
            this.invaliduser = false;
            this.loginEvent.emit(true);
            this.userEvent.emit(this.user.username);
            localStorage.setItem('user_id', String(u[0].id));
            localStorage.setItem('user_name', String(u[0].username));

          }
          else {
            this.invaliduser = true;
            this.user.password = '';
          }
        },
        error: (error) => {
          alert('Erro no Login!')
        }
      }
    );


  }

  ngOnInit(): void {
    this.user = new User;
    this.user.username = '';
    this.user.password = '';
  }
}
