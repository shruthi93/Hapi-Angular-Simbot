import { Component, } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import {Employee} from './employee'
import { FormsModule, NgForm } from '@angular/forms';
/*import 'rxjs';
*/

@Component({
    moduleId: module.id,
    templateUrl: 'employee.component.html',
    styleUrls: ['employee.component.css'],
    providers: [EmployeeService]
})

export class EmployeeComponent {
    employees: any = {};
    public errorMsg = '';
    constructor(private employeeService: EmployeeService) {
        this.employeeService = employeeService;
    }

    employee(empId: string, firstName: string, lastName: string, birthDate: Date,officialEmail: string,personalEmail: string,designation: string,state: string,joiningDate: Date,leavingDate: Date,experience: string,bloodGroup: string,mobileNo: string,altMobileNo: string,bankAccNo: string,IdType: string,IdNo: string,presentAddress: string,permanentAddress: string,orgId: string,password: string) {

        this.employeeService.newEmployee(this.employees).subscribe(data => {

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