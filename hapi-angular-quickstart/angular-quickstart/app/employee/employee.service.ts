import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class EmployeeService {
    loginUrl: string = 'http://localhost:8000/api/v1/employees';

    constructor(private http: Http, private routes: Router) {}

    newEmployee(requestBody: Object) {
        let headers = new Headers({ 'Content-Type': 'application/Json' });
        headers.append('Accept', 'application/json;q=0.9,*/*;q=0.8');
        let options = new RequestOptions({ headers: headers, method: 'post' });
        return this.http.post(this.loginUrl, requestBody, options).map(response => {
            let user = response.json();
            return response.json();
        });
    }
}
