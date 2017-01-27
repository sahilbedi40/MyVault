import {Injectable} from "@angular/core";
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class NewsService{
 
 apiUrl:string="https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=cc85f31c0d014a04b807ec14cace3869";
    constructor(private http:Http){}

    getAllNews(){
        return this.http.get(this.apiUrl).map(res=>res.json());
    }
}