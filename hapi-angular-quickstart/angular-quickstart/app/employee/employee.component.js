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
const employee_service_1 = require('./employee.service');
/*import 'rxjs';
*/
let EmployeeComponent = class EmployeeComponent {
    constructor(employeeService) {
        this.employeeService = employeeService;
        this.employees = {};
        this.errorMsg = '';
        this.employeeService = employeeService;
    }
    employee(empId, firstName, lastName, birthDate, officialEmail, personalEmail, designation, state, joiningDate, leavingDate, experience, bloodGroup, mobileNo, altMobileNo, bankAccNo, IdType, IdNo, presentAddress, permanentAddress, orgId, password) {
        this.employeeService.newEmployee(this.employees).subscribe(data => {
            if (data.finalStatus === 'success') {
                console.log("Login success");
            }
            if (data.finalStatus === 'failure') {
                this.errorMsg = 'Email ID/Password is wrong';
            }
        }, error => console.log('Error HTTP Post Service'));
    }
};
EmployeeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'employee.component.html',
        styleUrls: ['employee.component.css'],
        providers: [employee_service_1.EmployeeService]
    }), 
    __metadata('design:paramtypes', [employee_service_1.EmployeeService])
], EmployeeComponent);
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map