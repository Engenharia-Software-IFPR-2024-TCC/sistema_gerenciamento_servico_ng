import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor() {}

    doUserLogin(username: string, password: string): Observable<any> {
        setTimeout(() => {
            console.log(username);
            console.log(password);
        }, 2000);
        return of();
    }
}
