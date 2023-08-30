import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() logged: boolean = false;
  @Input() username: string = "";
  @Output() logoutEvent = new EventEmitter<boolean>();

  setlogout() {
    this.logoutEvent.emit(true);
  }
}
