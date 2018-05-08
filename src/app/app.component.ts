import { Component } from '@angular/core';

import { ClientService } from './client.service';
import { CLIENTS } from './mock-clients'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ClientService]
})

export class AppComponent {
  title = 'app';  
  clients = CLIENTS;
  selectedClient;
  searchStr=''

  constructor(private clientService: ClientService){}

  onSelect(client): void{
    this.selectedClient=client;
  }

}
