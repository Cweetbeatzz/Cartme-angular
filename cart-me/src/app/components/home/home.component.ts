import { AfterViewInit, Component, OnInit } from '@angular/core';
import { PaystackOptions } from 'angular4-paystack';


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

  //########################################################
  //PAYSTACK  

  options: PaystackOptions = {
    amount: 5000000,
    email: 'ojo.emmanuelx@gmail.com',
    ref: `${Math.ceil(Math.random() * 10e10)}`
  }

  paymentInit() {
    console.log('Payment initialized');
  }

  paymentDone(ref: any) {
    this.title = 'Payment successfull';
    console.log(this.title, ref);
  }

  paymentCancel() {
    console.log('payment failed');
  }

  //########################################################



}
