import * as M from 'materialize-css'
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ){}

  title = 'Custo Concreto';
  logged: boolean = false;
  username: string = '';
  login(event: boolean) {
    this.logged = event;
  }
  setusername(event: string) {
    this.username = event;
  }
  logout() {
    localStorage.removeItem('user_id');
    localStorage.removeItem('user_name');
    window.location.reload();
  }
  ngOnInit(): void {
    M.AutoInit();
    if(localStorage.getItem('user_id'))
    {
      this.logged = true;
      this.username = String(localStorage.getItem('user_name'))
    }
    else
    {
      this.router.navigate(['/']);
    }

  }


}
