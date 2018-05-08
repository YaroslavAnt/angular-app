import { Injectable } from '@angular/core';

import { CLIENTS } from './mock-clients';

@Injectable()

export class ClientService{
    getClients(){
        return CLIENTS;
    }
}