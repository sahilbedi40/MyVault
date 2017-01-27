import {Injectable} from "@angular/core";
import {Http} from '@angular/http';
import {ApiConfig} from './apiConfig';
import 'rxjs/Rx';

@Injectable()
export class MusicService{
 apiUrl:string="https://freemusicarchive.org/api/get/";
constructor(private http:Http,private config:ApiConfig){}

getAlbums()
{
    return this.http.get(this.apiUrl+"albums.json?api_key="+this.config.freeMusicApi+"&limit=30&sort_by=curator_date_created").map(res=>res.json());
}

getTracksByAlbumID(id:number){
    return this.http.get(this.apiUrl+"tracks.json?api_key="+this.config.freeMusicApi+"&album_id="+id).map(res=>res.json());
}

}