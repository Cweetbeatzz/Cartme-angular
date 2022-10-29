import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { HubConnection } from '@microsoft/signalr';
@Injectable({
  providedIn: 'root'
})
export class SignalrService {
  title = 'SignalRClient';
  private hubConnectionBuilder!: HubConnection;
  offers: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.hubConnectionBuilder = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:7219/offers')
      .configureLogging(signalR.LogLevel.Information)
      .build();

    //##############################

    this.hubConnectionBuilder.start()
      .then(() => console.log('Connection started.......!'))
      .catch(err => console.log('Error while connect with server'));

    this.hubConnectionBuilder.on('SendOffersToUser', (result: any) => {
      this.offers.push(result);
    });

    // let connection = new signalR.HubConnectionBuilder()
    //   .withUrl("/chat")
    //   .build();

    // connection.on("send", data => {
    //   console.log(data);
    // });

    // connection.start()
    //   .then(() => connection.invoke("send", "Hello"));
  }


}
