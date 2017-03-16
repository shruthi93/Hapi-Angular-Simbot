import { Component, } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { LoginService } from './login/login.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
    providers: [LoginService]
})

export class LoginComponent {
    model: any = {};
    loginId: string = '';
    password: string = '';
    public errorMsg = '';

    constructor(private loginService: LoginService) {
        this.loginService = loginService;
    }

    login(loginId: string, password: string) {

        var userData: any = {};
        userData['loginId'] =  loginId;
        userData['password'] = password;
        this.loginService.loginAuth(userData).subscribe(data => {

                if (data.finalStatus === 'success') {
                    console.log("Login success")
                }

                if (data.finalStatus === 'failure') {
                    this.errorMsg = 'Email ID/Password is wrong';
                }
            },
            error => console.log('Error HTTP Post Service')

        );
    }
}
export class AppComponent  { name = 'Angular'; }