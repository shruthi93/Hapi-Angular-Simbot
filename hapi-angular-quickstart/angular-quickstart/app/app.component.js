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
const login_service_1 = require('./login/login.service');
let LoginComponent = class LoginComponent {
    constructor(loginService) {
        this.loginService = loginService;
        this.model = {};
        this.loginId = '';
        this.password = '';
        this.errorMsg = '';
        this.loginService = loginService;
    }
    login(loginId, password) {
        var userData = {};
        userData['loginId'] = loginId;
        userData['password'] = password;
        this.loginService.loginAuth(userData).subscribe(data => {
            if (data.finalStatus === 'success') {
                console.log("Login success");
            }
            if (data.finalStatus === 'failure') {
                this.errorMsg = 'Email ID/Password is wrong';
            }
        }, error => console.log('Error HTTP Post Service'));
    }
};
LoginComponent = __decorate([
    core_1.Component({ moduleId: module.id,
        templateUrl: 'login.component.html',
        styleUrls: ['login.component.css'],
        providers: [login_service_1.LoginService]
    }), 
    __metadata('design:paramtypes', [login_service_1.LoginService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
class AppComponent {
    constructor() {
        this.name = 'Angular';
    }
}
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map