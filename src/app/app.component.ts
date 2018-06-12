import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Deep Jyot User Maintenance';
  view = 'dashboard';
  eventParameter: any;

  viewChangedEvent($event) {
    this.eventParameter = $event;
    this.view = $event.actionType;
  }
}