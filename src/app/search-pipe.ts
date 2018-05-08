import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'search'
})

export class SearchPipe implements PipeTransform {
    transform(clients, value) {
        return clients.filter(client =>{
            console.log(typeof client)
            return JSON.stringify(client).toLowerCase().includes(value)
        })
    }
}