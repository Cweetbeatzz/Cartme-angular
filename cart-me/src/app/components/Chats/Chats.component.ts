import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Chats',
  templateUrl: './Chats.component.html',
  styleUrls: ['./Chats.component.css']
})
export class ChatsComponent implements OnInit {

  title = 'SignalRClient';
  // private hubConnectionBuilder!: HubConnection;
  offers: any[] = [];
  constructor() { }

  //#############################################################

  ngOnInit(): void {
    // this.hubConnectionBuilder = new HubConnectionBuilder().withUrl('https://localhost:7219/offers').configureLogging(LogLevel.Information).build();
    // this.hubConnectionBuilder.start().then(() => console.log('Connection started.......!')).catch(err => console.log('Error while connect with server'));
    // this.hubConnectionBuilder.on('SendOffersToUser', (result: any) => {
    //   this.offers.push(result);
    // });
  }

  //#############################################################

}
