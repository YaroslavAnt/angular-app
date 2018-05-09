import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'search'
})

export class SearchPipe implements PipeTransform {
    transform(clients, value) {
        return clients.filter(client =>{
            return JSON.stringify(client).toLowerCase().includes(value.toLowerCase())
        })
    }
}