import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ha-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'pivot-table';
}
