import { Component, Input } from '@angular/core';

@Component({
    selector: 'client-detail',
    templateUrl: 'client.component.html',
    styleUrls: ['client.component.css']
})

export class ClientComponent {
    @Input() selectedClient;
}