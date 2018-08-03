import { Component } from '@angular/core';
import {OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  baseUrl: string;

  constructor() {

  }

  ngOnInit(): void {
    this.baseUrl = location.toString();
    console.log(this.baseUrl);
  }

}
