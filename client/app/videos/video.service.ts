import { Injectable } from '@angular/core';
import {HttpModule, Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Video} from './video';

@Injectable()
export class VideoService {
    private videos
    private url = 'http://localhost:3000/videos';


    constructor(private _http: Http){

    }


    getVideos(): Observable<Video[]>{
        return this._http.get(this.url)
            .map(res => res.json());
    }

    addVideo(newVideo){
        
    }
}