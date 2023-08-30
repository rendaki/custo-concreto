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
    this.username = '';
    this.logged = false;
  }
  ngOnInit(): void {
    M.AutoInit();
    localStorage.removeItem('newobra');
    localStorage.removeItem('cadastro-obras');
    localStorage.setItem('cadastro-obras-sec','1');
  }


}
