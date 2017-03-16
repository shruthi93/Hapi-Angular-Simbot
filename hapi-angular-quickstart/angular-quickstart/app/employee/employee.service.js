"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const http_1 = require('@angular/http');
const router_1 = require('@angular/router');
require('rxjs/add/operator/map');
let EmployeeService = class EmployeeService {
    constructor(http, routes) {
        this.http = http;
        this.routes = routes;
        this.loginUrl = 'http://localhost:8000/api/v1/employees';
    }
    newEmployee(requestBody) {
        let headers = new http_1.Headers({ 'Content-Type': 'application/Json' });
        headers.append('Accept', 'application/json;q=0.9,*/*;q=0.8');
        let options = new http_1.RequestOptions({ headers: headers, method: 'post' });
        return this.http.post(this.loginUrl, requestBody, options).map(response => {
            let user = response.json();
            return response.json();
        });
    }
};
EmployeeService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http, router_1.Router])
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map