import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../_models/index';

@Injectable()
export class UserService {
    
    constructor(private http: Http) { }

    get() {
        return this.http.get('videos').map((response: Response) => response.json());
    }
}