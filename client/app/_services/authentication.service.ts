import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Md5 } from 'ts-md5/dist/md5';


@Injectable()
export class AuthenticationService {

    constructor(
        private http: Http,
        private _md5: Md5) {
        let hash = Md5.hashStr('password');
    }

    login(username: string, password: string) {
        return this.http.post('/user/auth', { username: username, password: Md5.hashStr('password') })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}