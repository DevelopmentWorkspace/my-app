import { Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  vheight: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'my-app';

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue',vheight : '10%'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen',vheight : '100%'},
    {text: 'Three', cols: 3, rows: 1, color: 'lightpink',vheight : '90%'},
  ];
}
