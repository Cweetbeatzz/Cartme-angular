import { AfterViewInit, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  title!: string;

  constructor() { }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }
  //########################################################



}
