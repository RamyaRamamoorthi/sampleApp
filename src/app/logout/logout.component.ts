import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  array: number[];
  constructor() { }

  ngOnInit(): void {
    this.array=[1,2,3,4,5,6,7,8,9,10];
  }

}
