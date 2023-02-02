import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public currentView = 1;

  public ChangeView(view: number): void {
    this.currentView = view;
  }
}
