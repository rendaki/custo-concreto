import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLogged: boolean = false;
  appTitle: string = 'Custo Concreto';

 login($event: MouseEvent) {
  this.isLogged = !this.isLogged;
}

}
