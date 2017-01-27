import {Injectable} from "@angular/core";
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class UserService{
 apiUrl:string="https://randomuser.me/api/?results=30";
constructor(private http:Http){}

getUsers()
{
    return this.http.get(this.apiUrl).map(res=>res.json());
}

}