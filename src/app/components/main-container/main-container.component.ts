import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {
  seedValue!: string;

  constructor() { }

  ngOnInit(): void {
    console.log("Main OK!");
    console.log(this.seedValue);
  }

    seedData(ev: string) {
    this.seedValue = ev;
    console.log(this.seedValue);
    }
}
