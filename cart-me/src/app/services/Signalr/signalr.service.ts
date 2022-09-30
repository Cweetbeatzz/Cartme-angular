import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {

  constructor(private http: HttpClient) { }

    //   let connection = new signalR.HubConnectionBuilder()
  //   .withUrl("/chat")
  //   .build();

  // connection.on("send", data => {
  //   console.log(data);
  // });

  // connection.start()
  //   .then(() => connection.invoke("send", "Hello"));
}
