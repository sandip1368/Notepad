(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\angularProject\angular-flight-booking\src\main.ts */"zUnb");


/***/ }),

/***/ "7Vn+":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




const AUTH_API = 'http://ec2-34-211-143-32.us-west-2.compute.amazonaws.com:8802/api/auth/';
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
class AuthService {
    constructor(http) {
        this.http = http;
    }
    login(username, password) {
        return this.http.post(AUTH_API + 'signin', {
            username,
            password
        }, httpOptions);
    }
    register(username, email, password) {
        return this.http.post(AUTH_API + 'signup', {
            username,
            email,
            password
        }, httpOptions);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "8pWB":
/*!*****************************************!*\
  !*** ./src/app/Entity/BookingTicket.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BookingTicket; });
class BookingTicket {
}


/***/ }),

/***/ "9ePn":
/*!****************************************************************!*\
  !*** ./src/app/component/book-flight/book-flight.component.ts ***!
  \****************************************************************/
/*! exports provided: BookFlightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookFlightComponent", function() { return BookFlightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Entity_BookingTicket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Entity/BookingTicket */ "8pWB");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/user.service */ "VITL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class BookFlightComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.ticket = new src_app_Entity_BookingTicket__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.tickets = [];
    }
    bookFlight() {
        const observable = this.service.bookFlight(this.ticket);
        observable.subscribe((Response) => {
            console.log(Response);
            // this.tickets.push(Response);
        }, function (error) {
            console.log(error);
            // alert('Something went wrong please try again!');
            alert('Succesfully Book Flight!');
        });
    }
    ngOnInit() {
    }
}
BookFlightComponent.ɵfac = function BookFlightComponent_Factory(t) { return new (t || BookFlightComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
BookFlightComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookFlightComponent, selectors: [["app-book-flight"]], decls: 48, vars: 9, consts: [[2, "text-align", "center"], [1, "wrapper", "bg-White"], ["id", "inputGroup-sizing-default", 1, "input-group-text"], ["type", "number", "placeholder", "flightNo", "aria-label", "Sizing example input", "aria-describedby", "inputGroup-sizing-default", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "passenger_name", "aria-label", "Sizing example input", "aria-describedby", "inputGroup-sizing-default", 1, "form-control", 3, "ngModel", "ngModelChange"], ["placeholder", "Email", "type", "text", "aria-label", "Sizing example input", "aria-describedby", "inputGroup-sizing-default", 1, "form-control", 3, "ngModel", "ngModelChange"], ["placeholder", "Age", "type", "text", "aria-label", "Sizing example input", "aria-describedby", "inputGroup-sizing-default", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Seat Number", "aria-label", "Sizing example input", "aria-describedby", "inputGroup-sizing-default", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "meal ", "aria-label", "Sizing example input", "aria-describedby", "inputGroup-sizing-default", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "placeholder", "No Of Seat", "aria-label", "Sizing example input", "aria-describedby", "inputGroup-sizing-default", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-check"], ["value", "Male", "type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault1", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "flexRadioDefault1", 1, "form-check-label"], ["type", "radio", "value", "Female", "name", "flexRadioDefault", "id", "flexRadioDefault2", "checked", "", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "flexRadioDefault2", 1, "form-check-label"], ["routerLink", "/thankyou", 1, "btn", "btn-primary", "btn-lg", 3, "click"]], template: function BookFlightComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Book Flight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Flight No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookFlightComponent_Template_input_ngModelChange_7_listener($event) { return ctx.ticket.flightNo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookFlightComponent_Template_input_ngModelChange_11_listener($event) { return ctx.ticket.passenger_name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookFlightComponent_Template_input_ngModelChange_16_listener($event) { return ctx.ticket.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookFlightComponent_Template_input_ngModelChange_21_listener($event) { return ctx.ticket.passenger_age = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Seat Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookFlightComponent_Template_input_ngModelChange_26_listener($event) { return ctx.ticket.passenger_seatNo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Meal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookFlightComponent_Template_input_ngModelChange_31_listener($event) { return ctx.ticket.optMeal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "No Of Seat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookFlightComponent_Template_input_ngModelChange_36_listener($event) { return ctx.ticket.noOfSeats = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookFlightComponent_Template_input_ngModelChange_38_listener($event) { return ctx.ticket.gender = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Male ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookFlightComponent_Template_input_ngModelChange_42_listener($event) { return ctx.ticket.gender = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Female ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookFlightComponent_Template_button_click_46_listener() { return ctx.bookFlight(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Book Flight ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ticket.flightNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ticket.passenger_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ticket.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ticket.passenger_age);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ticket.passenger_seatNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ticket.optMeal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ticket.noOfSeats);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ticket.gender);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ticket.gender);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RadioControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib29rLWZsaWdodC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookFlightComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-book-flight',
                templateUrl: './book-flight.component.html',
                styleUrls: ['./book-flight.component.css']
            }]
    }], function () { return [{ type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DPaS":
/*!**************************************************************!*\
  !*** ./src/app/component/add-flight/add-flight.component.ts ***!
  \**************************************************************/
/*! exports provided: AddFlightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFlightComponent", function() { return AddFlightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Entity_Flight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Entity/Flight */ "M5Ap");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/user.service */ "VITL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class AddFlightComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.flight = new src_app_Entity_Flight__WEBPACK_IMPORTED_MODULE_1__["Flight"]();
        this.flights = [];
    }
    save() {
        const observable = this.service.doAdd(this.flight);
        observable.subscribe((Response) => {
            console.log(Response);
            this.flights.push(Response);
        }, function (error) {
            console.log(error);
            // alert('Something went wrong please try again!');
            alert('Succesfully Add Flight!');
        });
    }
    ngOnInit() {
    }
}
AddFlightComponent.ɵfac = function AddFlightComponent_Factory(t) { return new (t || AddFlightComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AddFlightComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddFlightComponent, selectors: [["app-add-flight"]], decls: 61, vars: 11, consts: [[2, "text-align", "center"], [1, "wrapper", "bg-White"], ["id", "inputGroup-sizing-default", 1, "input-group-text"], ["type", "text", "placeholder", "Enter AirlineName", "aria-label", "Sizing example input", "aria-describedby", "inputGroup-sizing-default", "ng-required", "true", 1, "form-control", 3, "ngModel", "ngModelChange"], ["placeholder", "Enter From Place ", "type", "text", "aria-label", "Sizing example input", "aria-describedby", "inputGroup-sizing-default", 1, "form-control", 3, "ngModel", "ngModelChange"], ["placeholder", "Enter To Place", "type", "text", "aria-label", "Sizing example input", "aria-describedby", "inputGroup-sizing-default", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Enter Instrument Name", "aria-label", "Sizing example input", "aria-describedby", "inputGroup-sizing-default", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "placeholder", "Enter BusinessSeat", "aria-label", "Sizing example input", "aria-describedby", "inputGroup-sizing-default", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "placeholder", "Enter nonBusinessSeat", "aria-label", "Sizing example input", "aria-describedby", "inputGroup-sizing-default", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "placeholder", "Enter Ticket ", "aria-label", "Sizing example input", "aria-describedby", "inputGroup-sizing-default", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Enter Meal", "aria-label", "Sizing example input", "aria-describedby", "inputGroup-sizing-default", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Enter Way", "aria-label", "Sizing example input", "aria-describedby", "inputGroup-sizing-default", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group", "d-sm-flex", "margin"], [1, "d-flex", "align-items-center", "flex-fill", "me-sm1", "my-sm-0", "border-bottom", "position-relative"], ["type", "Date", "required", "", "placeholder", "Depart Date", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "startDate", 1, "label"], [1, "d-flex", "align-items-center", "flex-fill", "ms-sm-1", "my-sm-0", "my-4", "border-bottom", "position-relative"], ["type", "Date", "required", "", "placeholder", "Return Date", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "endDate", 1, "label"], [1, "btn", "btn-primary", "btn-lg", 3, "click"]], template: function AddFlightComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ADD FLIGHT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Enter AirlineName");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddFlightComponent_Template_input_ngModelChange_7_listener($event) { return ctx.flight.airLinename = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Enter From Place");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddFlightComponent_Template_input_ngModelChange_12_listener($event) { return ctx.flight.fromPlace = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Enter To Place");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddFlightComponent_Template_input_ngModelChange_17_listener($event) { return ctx.flight.toPlace = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Choose Instrument ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddFlightComponent_Template_input_ngModelChange_22_listener($event) { return ctx.flight.instrument = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "businessSeat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddFlightComponent_Template_input_ngModelChange_27_listener($event) { return ctx.flight.businessSeat = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "NonbusinessSeat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddFlightComponent_Template_input_ngModelChange_32_listener($event) { return ctx.flight.nonBusinessSeat = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Ticket ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddFlightComponent_Template_input_ngModelChange_37_listener($event) { return ctx.flight.ticket = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Meal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddFlightComponent_Template_input_ngModelChange_43_listener($event) { return ctx.flight.meal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Way");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddFlightComponent_Template_input_ngModelChange_48_listener($event) { return ctx.flight.ways = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddFlightComponent_Template_input_ngModelChange_52_listener($event) { return ctx.flight.startDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddFlightComponent_Template_input_ngModelChange_55_listener($event) { return ctx.flight.endDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddFlightComponent_Template_button_click_59_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Add Flight ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.flight.airLinename);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.flight.fromPlace);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.flight.toPlace);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.flight.instrument);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.flight.businessSeat);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.flight.nonBusinessSeat);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.flight.ticket);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.flight.meal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.flight.ways);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.flight.startDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.flight.endDate);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');\r\n\r\n\r\n\r\n*[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Poppins', sans-serif;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n    background-color: #96d6f3;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n    max-width: 800px;\r\n    margin: 50px auto;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n    padding: 30px 50px;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n    padding-bottom: .5rem;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    padding-left: 25px;\r\n    cursor: pointer;\r\n    display: block;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 4px;\r\n    left: 0;\r\n    height: 17px;\r\n    width: 17px;\r\n    background-color: #fff;\r\n    border: 1px solid #aaa;\r\n    border-radius: 50%;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%]:after {\r\n    display: block;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\r\n    content: \"\";\r\n    width: 7px;\r\n    height: 10px;\r\n    display: block;\r\n    border-radius: 50%;\r\n    background-color: #333;\r\n    position: absolute;\r\n    top: 48%;\r\n    left: 52%;\r\n    transform: translate(-50%, -50%) scale(0);\r\n    transition: 200ms ease-in-out 0s;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]:hover   input[type=\"radio\"][_ngcontent-%COMP%] ~ .checkmark[_ngcontent-%COMP%] {\r\n    background-color: #f4f4f4;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    color: #fff;\r\n    transition: 300ms ease-in-out 0s;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%]:after {\r\n    transform: translate(-50%, -50%) scale(1);\r\n    color: #fff;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #333;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n    outline: none;\r\n    border: none;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\r\n    box-shadow: none;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%]:focus::placeholder {\r\n    color: transparent\r\n}\r\n\r\ninput[type=\"date\"][_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]::after {\r\n    position: absolute;\r\n    \r\n    top: 5px;\r\n    left: 0px;\r\n    font-size: 0.9rem;\r\n    margin: 0rem 0.4rem;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.08rem;\r\n    font-weight: 600;\r\n    color: #999;\r\n    transition: all .2s ease-in-out;\r\n    transform: scale(0);\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .label#from[_ngcontent-%COMP%]::after {\r\n    content: 'From';\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .label#to[_ngcontent-%COMP%]::after {\r\n    content: 'To';\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .label#depart[_ngcontent-%COMP%]::after {\r\n    content: 'Depart Date';\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .label#return[_ngcontent-%COMP%]::after {\r\n    content: 'Return Date';\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .label#psngr[_ngcontent-%COMP%]::after {\r\n    content: 'AirlineName(s)';\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%]:focus ~ .label[_ngcontent-%COMP%]::after {\r\n    top: -15px;\r\n    left: 0px;\r\n    transform: scale(1);\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=\"date\"][_ngcontent-%COMP%]:focus ~ .label[_ngcontent-%COMP%]::after {\r\n    top: -15px;\r\n    left: 0px;\r\n    transform: scale(1);\r\n}\r\n\r\n\r\n\r\n.margin[_ngcontent-%COMP%] {\r\n    margin: 2rem 0rem;\r\n}\r\n\r\n\r\n\r\n@media(max-width: 575.5px) {\r\n    .wrapper[_ngcontent-%COMP%] {\r\n        margin: 10px;\r\n    }\r\n\r\n    .wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n        padding: 20px;\r\n    }\r\n\r\n    .margin[_ngcontent-%COMP%] {\r\n        margin: .2rem 0rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1mbGlnaHQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0RUFBNEU7O0FBRTVFLGNBQWM7O0FBQ2Q7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQjtJQUN0QixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE9BQU87SUFDUCxZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULHlDQUF5QztJQUN6QyxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHlDQUF5QztJQUN6QyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixRQUFRO0lBQ1IsU0FBUztJQUNULGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLCtCQUErQjtJQUMvQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxtQkFBbUI7QUFDdkI7O0FBRUEsV0FBVzs7QUFDWDtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQSxrQkFBa0I7O0FBQ2xCO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKIiwiZmlsZSI6ImFkZC1mbGlnaHQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnMmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4vKiBSZXNldHRpbmcgKi9cclxuKiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk2ZDZmMztcclxufVxyXG5cclxuLndyYXBwZXIge1xyXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xyXG59XHJcblxyXG4ud3JhcHBlciBmb3JtIHtcclxuICAgIHBhZGRpbmc6IDMwcHggNTBweDtcclxufVxyXG5cclxuLndyYXBwZXIgZm9ybSAuZm9ybS1ncm91cCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XHJcbn1cclxuXHJcbi53cmFwcGVyIGZvcm0gLm9wdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLndyYXBwZXIgZm9ybSAub3B0aW9uIGlucHV0IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi53cmFwcGVyIGZvcm0gLmNoZWNrbWFyayB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDRweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDE3cHg7XHJcbiAgICB3aWR0aDogMTdweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4ud3JhcHBlciBmb3JtIC5vcHRpb24gaW5wdXQ6Y2hlY2tlZH4uY2hlY2ttYXJrOmFmdGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ud3JhcHBlciBmb3JtIC5vcHRpb24gLmNoZWNrbWFyazphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDdweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNDglO1xyXG4gICAgbGVmdDogNTIlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XHJcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dCAwcztcclxufVxyXG5cclxuLndyYXBwZXIgZm9ybSAub3B0aW9uOmhvdmVyIGlucHV0W3R5cGU9XCJyYWRpb1wiXX4uY2hlY2ttYXJrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XHJcbn1cclxuXHJcbi53cmFwcGVyIGZvcm0gLm9wdGlvbiBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZH4uY2hlY2ttYXJrIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRyYW5zaXRpb246IDMwMG1zIGVhc2UtaW4tb3V0IDBzO1xyXG59XHJcblxyXG4ud3JhcHBlciBmb3JtIC5vcHRpb24gaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWR+LmNoZWNrbWFyazphZnRlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ud3JhcHBlciBmb3JtIGEge1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi53cmFwcGVyIGZvcm0gLmZvcm0tY29udHJvbCB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ud3JhcHBlciBmb3JtIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLndyYXBwZXIgZm9ybSBpbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1czo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJkYXRlXCJdIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLndyYXBwZXIgZm9ybSAubGFiZWw6OmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmZmY7ICovXHJcbiAgICB0b3A6IDVweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgbWFyZ2luOiAwcmVtIDAuNHJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wOHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG59XHJcblxyXG4ud3JhcHBlciBmb3JtIC5sYWJlbCNmcm9tOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnRnJvbSc7XHJcbn1cclxuXHJcbi53cmFwcGVyIGZvcm0gLmxhYmVsI3RvOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnVG8nO1xyXG59XHJcblxyXG4ud3JhcHBlciBmb3JtIC5sYWJlbCNkZXBhcnQ6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICdEZXBhcnQgRGF0ZSc7XHJcbn1cclxuXHJcbi53cmFwcGVyIGZvcm0gLmxhYmVsI3JldHVybjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJ1JldHVybiBEYXRlJztcclxufVxyXG5cclxuLndyYXBwZXIgZm9ybSAubGFiZWwjcHNuZ3I6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICdBaXJsaW5lTmFtZShzKSc7XHJcbn1cclxuXHJcbi53cmFwcGVyIGZvcm0gaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXN+LmxhYmVsOjphZnRlciB7XHJcbiAgICB0b3A6IC0xNXB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxufVxyXG5cclxuLndyYXBwZXIgZm9ybSBpbnB1dFt0eXBlPVwiZGF0ZVwiXTpmb2N1c34ubGFiZWw6OmFmdGVyIHtcclxuICAgIHRvcDogLTE1cHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG59XHJcblxyXG4vKiBNYXJnaW4gKi9cclxuLm1hcmdpbiB7XHJcbiAgICBtYXJnaW46IDJyZW0gMHJlbTtcclxufVxyXG5cclxuLyogTWVkaWEgUXVlcmllcyAqL1xyXG5AbWVkaWEobWF4LXdpZHRoOiA1NzUuNXB4KSB7XHJcbiAgICAud3JhcHBlciB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC53cmFwcGVyIGZvcm0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1hcmdpbiB7XHJcbiAgICAgICAgbWFyZ2luOiAuMnJlbSAwcmVtO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddFlightComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-flight',
                templateUrl: './add-flight.component.html',
                styleUrls: ['./add-flight.component.css']
            }]
    }], function () { return [{ type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "E8dp":
/*!**************************************************!*\
  !*** ./src/app/component/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/user.service */ "VITL");



class HomeComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        this.userService.getPublicContent().subscribe(data => {
            this.content = data;
        }, err => {
            this.content = JSON.parse(err.error).message;
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 1, vars: 0, consts: [["src", "https://th.bing.com/th/id/R.55055663fc52293091b84fde06a098e0?rik=7nDBcB7YiCRjUg&riu=http%3a%2f%2fwww.01webdirectory.com%2fblog%2fwp-content%2fuploads%2f2015%2f01%2fCheap-Flights.jpg&ehk=xhPHdbvlEyS%2bcov6%2b1XTNfhnf4RRES1Wbvxs0YPcjPQ%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1", "width", "1250", "height", "700"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, null); })();


/***/ }),

/***/ "FQmJ":
/*!****************************************************!*\
  !*** ./src/app/_services/token-storage.service.ts ***!
  \****************************************************/
/*! exports provided: TokenStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorageService", function() { return TokenStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
class TokenStorageService {
    constructor() { }
    signOut() {
        window.sessionStorage.clear();
    }
    saveToken(token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }
    getToken() {
        return window.sessionStorage.getItem(TOKEN_KEY);
    }
    saveUser(user) {
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }
    getUser() {
        const user = window.sessionStorage.getItem(USER_KEY);
        if (user) {
            return JSON.parse(user);
        }
        return {};
    }
}
TokenStorageService.ɵfac = function TokenStorageService_Factory(t) { return new (t || TokenStorageService)(); };
TokenStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenStorageService, factory: TokenStorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "M5Ap":
/*!**********************************!*\
  !*** ./src/app/Entity/Flight.ts ***!
  \**********************************/
/*! exports provided: Flight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Flight", function() { return Flight; });
class Flight {
}


/***/ }),

/***/ "Nv+Q":
/*!****************************************************!*\
  !*** ./src/app/board-user/board-user.component.ts ***!
  \****************************************************/
/*! exports provided: BoardUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardUserComponent", function() { return BoardUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/user.service */ "VITL");



class BoardUserComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        this.userService.getUserBoard().subscribe(data => {
            this.content = data;
        }, err => {
            this.content = JSON.parse(err.error).message;
        });
    }
}
BoardUserComponent.ɵfac = function BoardUserComponent_Factory(t) { return new (t || BoardUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
BoardUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BoardUserComponent, selectors: [["app-board-user"]], decls: 4, vars: 1, consts: [[1, "container"], [1, "jumbotron"]], template: function BoardUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.content);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib2FyZC11c2VyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoardUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-board-user',
                templateUrl: './board-user.component.html',
                styleUrls: ['./board-user.component.css']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_services/token-storage.service */ "FQmJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function AppComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Admin Board");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Book Flight ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Show Flight ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_a_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_li_13_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Book Flight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_li_13_a_1_Template, 2, 0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isLoggedIn);
} }
function AppComponent_a_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Flight Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_a_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Booking History");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ul_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ul_19_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ul_19_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "LogOut");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.username);
} }
class AppComponent {
    constructor(tokenStorageService) {
        this.tokenStorageService = tokenStorageService;
        this.roles = [];
        this.isLoggedIn = false;
        this.showAdminBoard = false;
        this.showUserBoard = false;
        this.showModeratorBoard = false;
    }
    title(title) {
        throw new Error('Method not implemented.');
    }
    ngOnInit() {
        this.isLoggedIn = !!this.tokenStorageService.getToken();
        if (this.isLoggedIn) {
            const user = this.tokenStorageService.getUser();
            this.roles = user.roles;
            this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
            this.showUserBoard = this.roles.includes('ROLE_USER');
            this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
            this.username = user.username;
        }
    }
    logout() {
        this.tokenStorageService.signOut();
        window.location.reload();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 22, vars: 9, consts: [["id", "app"], [1, "navbar", "navbar-expand", "navbar-dark", "bg-primary"], ["href", "#", 1, "navbar-brand"], ["routerLinkActive", "active", 1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["href", "/home", "routerLink", "home", 1, "badge", "badge-success"], ["class", "nav-item", 4, "ngIf"], ["href", "/user", "class", "badge badge-success", "routerLink", "user", 4, "ngIf"], ["href", "/flight-search", "class", "badge badge-success", "routerLink", "flight-search", 4, "ngIf"], ["href", "/search-pnr", "class", "badge badge-success", "routerLink", "search-pnr", 4, "ngIf"], ["class", "navbar-nav ml-auto", 4, "ngIf"], [1, "container"], ["href", "/admin", "routerLink", "board-admin", 1, "badge", "badge-dark"], ["href", "/flight", "routerLink", "add-flight", 1, "badge", "badge-secondary"], ["href", "/flight", "routerLink", "show-all-flight", 1, "badge", "badge-secondary"], ["href", "/user", "routerLink", "user", 1, "badge", "badge-success"], ["href", "/book-flight", "class", "badge badge-success", "routerLink", "book-flight", 4, "ngIf"], ["href", "/book-flight", "routerLink", "book-flight", 1, "badge", "badge-success"], ["href", "/flight-search", "routerLink", "flight-search", 1, "badge", "badge-success"], ["href", "/search-pnr", "routerLink", "search-pnr", 1, "badge", "badge-success"], [1, "navbar-nav", "ml-auto"], ["href", "/register", "routerLink", "register", 1, "badge", "badge-danger"], ["href", "/login", "routerLink", "login", 1, "badge", "badge-success"], ["href", "/profile", "routerLink", "profile", 1, "badge", "badge-success"], ["href", "", 1, "badge", "badge-danger", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "FLIGHT BOOK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_li_8_Template, 3, 0, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_li_9_Template, 3, 0, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_li_10_Template, 3, 0, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_a_12_Template, 2, 0, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_li_13_Template, 2, 1, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_a_15_Template, 2, 0, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AppComponent_a_17_Template, 2, 0, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AppComponent_ul_18_Template, 7, 0, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AppComponent_ul_19_Template, 7, 1, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAdminBoard);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAdminBoard);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAdminBoard);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showUserBoard);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"] }]; }, null); })();


/***/ }),

/***/ "VITL":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



const API_URL = 'http://localhost:8802/api/test/';
// Admin Mode
const API_URL_Add_Flight = 'http://ec2-34-211-143-32.us-west-2.compute.amazonaws.com:8802/api/V1.0/flight/register';
const API_URL_Show_All_Flight = 'http://ec2-34-211-143-32.us-west-2.compute.amazonaws.com:8802/api/V1.0/flight/allFlight';
const API_URL_CancelFlight = 'http://ec2-34-211-143-32.us-west-2.compute.amazonaws.com:8802/api/V1.0/flight/removeFlight';
const API_URL_UpdateFlight = 'http://ec2-34-211-143-32.us-west-2.compute.amazonaws.com:8802/api/V1.0/flight/editFlight';
const API_URl_GetFlightByID = 'http://ec2-34-211-143-32.us-west-2.compute.amazonaws.com:8802/api/V1.0/flight/viewFlight';
// User Mode
const API_URL_Book_Flight = 'http://ec2-34-211-143-32.us-west-2.compute.amazonaws.com:8081/user/bookFlight';
const API_URL_SearchFlight = 'http://ec2-34-211-143-32.us-west-2.compute.amazonaws.com:8081/user/FindFlight';
const API_URL_Search_By_PNR = 'http://ec2-34-211-143-32.us-west-2.compute.amazonaws.com:8081/user/flight/ticket/';
const API_URL_Search_By_Email = 'http://ec2-34-211-143-32.us-west-2.compute.amazonaws.com:8081/user/booking/history/';
class UserService {
    constructor(http) {
        this.http = http;
    }
    getPublicContent() {
        return this.http.get(API_URL + 'all', { responseType: 'text' });
    }
    getUserBoard() {
        return this.http.get(API_URL + 'user', { responseType: 'text' });
    }
    getModeratorBoard() {
        return this.http.get(API_URL + 'mod', { responseType: 'text' });
    }
    getAdminBoard() {
        return this.http.get(API_URL + 'admin', { responseType: 'text' });
    }
    // Admin-Mode
    doAdd(flight) {
        return this.http.post(API_URL_Add_Flight, flight);
    }
    getFlight() {
        return this.http.get(API_URL_Show_All_Flight);
    }
    removeFlight(flightNo) {
        return this.http.delete(API_URL_CancelFlight + "/" + flightNo);
    }
    getFlightByFlighNo(flightNo) {
        return this.http.get(API_URl_GetFlightByID + "/" + flightNo);
    }
    updateFlight(flightNo, flight) {
        return this.http.put(API_URL_UpdateFlight + "/" + flightNo, flight);
    }
    //User_Mode
    bookFlight(bookingTicket) {
        return this.http.post(API_URL_Book_Flight, bookingTicket);
    }
    searchFlight(fromPlace, toPlace, startDate, endDate) {
        return this.http.get(API_URL_SearchFlight + "/" + fromPlace + "/" + toPlace + "/" + startDate + "/" + endDate);
    }
    searchByPnr(pnrNumber) {
        return this.http.get(API_URL_Search_By_PNR + pnrNumber);
    }
    searchByEmail(email) {
        return this.http.get(API_URL_Search_By_Email + email);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _component_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/login/login.component */ "g8H4");
/* harmony import */ var _component_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/register/register.component */ "nEsl");
/* harmony import */ var _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/profile/profile.component */ "rID0");
/* harmony import */ var _board_admin_board_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./board-admin/board-admin.component */ "jg0z");
/* harmony import */ var _board_moderator_board_moderator_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./board-moderator/board-moderator.component */ "lIvq");
/* harmony import */ var _board_user_board_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./board-user/board-user.component */ "Nv+Q");
/* harmony import */ var _helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_helpers/auth.interceptor */ "tElQ");
/* harmony import */ var _component_add_flight_add_flight_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/add-flight/add-flight.component */ "DPaS");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/home/home.component */ "E8dp");
/* harmony import */ var _component_show_all_flight_show_all_flight_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/show-all-flight/show-all-flight.component */ "pt+s");
/* harmony import */ var _component_update_update_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/update/update.component */ "moiR");
/* harmony import */ var _component_book_flight_book_flight_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./component/book-flight/book-flight.component */ "9ePn");
/* harmony import */ var _component_flight_search_flight_search_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./component/flight-search/flight-search.component */ "ZnVa");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _component_thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./component/thankyou/thankyou.component */ "rvN9");
/* harmony import */ var _component_search_pnr_search_pnr_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./component/search-pnr/search-pnr.component */ "fmSY");
/* harmony import */ var _component_booking_history_booking_history_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./component/booking-history/booking-history.component */ "e7gS");
























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__["authInterceptorProviders"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["DatePipe"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _component_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        _component_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
        _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
        _board_admin_board_admin_component__WEBPACK_IMPORTED_MODULE_9__["BoardAdminComponent"],
        _board_moderator_board_moderator_component__WEBPACK_IMPORTED_MODULE_10__["BoardModeratorComponent"],
        _board_user_board_user_component__WEBPACK_IMPORTED_MODULE_11__["BoardUserComponent"],
        _component_add_flight_add_flight_component__WEBPACK_IMPORTED_MODULE_13__["AddFlightComponent"],
        _component_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
        _component_show_all_flight_show_all_flight_component__WEBPACK_IMPORTED_MODULE_15__["ShowAllFlightComponent"],
        _component_update_update_component__WEBPACK_IMPORTED_MODULE_16__["UpdateComponent"],
        _component_book_flight_book_flight_component__WEBPACK_IMPORTED_MODULE_17__["BookFlightComponent"],
        _component_flight_search_flight_search_component__WEBPACK_IMPORTED_MODULE_18__["FlightSearchComponent"],
        _component_thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_20__["ThankyouComponent"],
        _component_search_pnr_search_pnr_component__WEBPACK_IMPORTED_MODULE_21__["SearchPNRComponent"],
        _component_booking_history_booking_history_component__WEBPACK_IMPORTED_MODULE_22__["BookingHistoryComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _component_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                    _component_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                    _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
                    _board_admin_board_admin_component__WEBPACK_IMPORTED_MODULE_9__["BoardAdminComponent"],
                    _board_moderator_board_moderator_component__WEBPACK_IMPORTED_MODULE_10__["BoardModeratorComponent"],
                    _board_user_board_user_component__WEBPACK_IMPORTED_MODULE_11__["BoardUserComponent"],
                    _component_add_flight_add_flight_component__WEBPACK_IMPORTED_MODULE_13__["AddFlightComponent"],
                    _component_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                    _component_show_all_flight_show_all_flight_component__WEBPACK_IMPORTED_MODULE_15__["ShowAllFlightComponent"],
                    _component_update_update_component__WEBPACK_IMPORTED_MODULE_16__["UpdateComponent"],
                    _component_book_flight_book_flight_component__WEBPACK_IMPORTED_MODULE_17__["BookFlightComponent"],
                    _component_flight_search_flight_search_component__WEBPACK_IMPORTED_MODULE_18__["FlightSearchComponent"],
                    _component_thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_20__["ThankyouComponent"],
                    _component_search_pnr_search_pnr_component__WEBPACK_IMPORTED_MODULE_21__["SearchPNRComponent"],
                    _component_booking_history_booking_history_component__WEBPACK_IMPORTED_MODULE_22__["BookingHistoryComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
                ],
                providers: [_helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__["authInterceptorProviders"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["DatePipe"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZnVa":
/*!********************************************************************!*\
  !*** ./src/app/component/flight-search/flight-search.component.ts ***!
  \********************************************************************/
/*! exports provided: FlightSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightSearchComponent", function() { return FlightSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Entity_Flight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Entity/Flight */ "M5Ap");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/user.service */ "VITL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _book_flight_book_flight_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../book-flight/book-flight.component */ "9ePn");








function FlightSearchComponent_div_29_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Book");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const flight_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r3.flightNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r3.airLinename);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r3.fromPlace);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r3.toPlace);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r3.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r3.endDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r3.businessSeat);
} }
function FlightSearchComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "FlIGHT LIST");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Flight No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "AirLine Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "From Place");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "To Place");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Departure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Arrival");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Business Seat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, FlightSearchComponent_div_29_tr_24_Template, 18, 7, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.flights);
} }
function FlightSearchComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-book-flight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FlightSearchComponent {
    constructor(servicesearch, router, datepipe) {
        this.servicesearch = servicesearch;
        this.router = router;
        this.datepipe = datepipe;
        // ticket :BookingTicket= new BookingTicket();
        // tickets :BookingTicket []=[];
        this.flight = new src_app_Entity_Flight__WEBPACK_IMPORTED_MODULE_1__["Flight"]();
        this.flights = [];
        this.isSearchTicket = false;
        this.isBook = false;
    }
    bookByTicket() {
        formattedDeparteDate: String;
        //inside search function
        this.formattedDeparteDate = this.datepipe.transform(this.flight.startDate, 'yyyy-MM-dd');
        console.log(Date.parse(this.formattedDeparteDate));
        this.formattedendDate = this.datepipe.transform(this.flight.endDate, 'yyyy-MM-dd');
        console.log(Date.parse(this.formattedendDate));
        const observable1 = this.servicesearch.searchFlight(this.flight.fromPlace, this.flight.toPlace, Date.parse(this.formattedDeparteDate), Date.parse(this.formattedendDate));
        observable1.subscribe((Response) => {
            this.isSearchTicket = true;
            console.log(Response);
            this.flights = Response;
        }, function (error) {
            console.log(error);
            // alert('Something went wrong please try again!');
            alert('Succesfully Search Flight!');
        });
    }
    Booking() {
        //    const observable=this.servicesearch.bookFlight(this.ticket)
        //    observable._subscribe(
        //      (response:any) => {
        // this.isBook=false;
        // console.log(response)
        //      }
        //    )
        this.isSearchTicket = false;
        this.isBook = true;
    }
    ngOnInit() {
    }
}
FlightSearchComponent.ɵfac = function FlightSearchComponent_Factory(t) { return new (t || FlightSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"])); };
FlightSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FlightSearchComponent, selectors: [["app-flight-search"]], decls: 31, vars: 6, consts: [[2, "text-align", "center"], [1, "wrapper", "bg-White"], ["id", "inputGroup-sizing-default", 1, "input-group-text"], ["placeholder", "Enter From Place ", "type", "text", "aria-label", "Sizing example input", "aria-describedby", "inputGroup-sizing-default", 1, "form-control", 3, "ngModel", "ngModelChange"], ["placeholder", "Enter To Place", "type", "text", "aria-label", "Sizing example input", "aria-describedby", "inputGroup-sizing-default", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group", "d-sm-flex", "margin"], [1, "d-flex", "align-items-center", "flex-fill", "me-sm1", "my-sm-0", "border-bottom", "position-relative"], ["type", "Date", "required", "", "placeholder", "Depart Date", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "startDate", 1, "label"], [1, "d-flex", "align-items-center", "flex-fill", "ms-sm-1", "my-sm-0", "my-4", "border-bottom", "position-relative"], ["type", "Date", "required", "", "placeholder", "Return Date", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "endDate", 1, "label"], [1, "btn", "btn-primary", "btn-lg", 3, "click"], ["class", "panel panel-primary", 4, "ngIf"], [4, "ngIf"], [1, "panel", "panel-primary"], [1, "row"], [1, "panel-heading"], [1, "panel-body"], [1, "table", "table-striped"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["routerLink", "/book-flight", 1, "btn", "btn-success"]], template: function FlightSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "SEARCH FLIGHT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Enter From Place");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FlightSearchComponent_Template_input_ngModelChange_10_listener($event) { return ctx.flight.fromPlace = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Enter To Place");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FlightSearchComponent_Template_input_ngModelChange_15_listener($event) { return ctx.flight.toPlace = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FlightSearchComponent_Template_input_ngModelChange_19_listener($event) { return ctx.flight.startDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FlightSearchComponent_Template_input_ngModelChange_22_listener($event) { return ctx.flight.endDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlightSearchComponent_Template_button_click_26_listener() { return ctx.bookByTicket(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, FlightSearchComponent_div_29_Template, 25, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, FlightSearchComponent_div_30_Template, 2, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.flight.fromPlace);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.flight.toPlace);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.flight.startDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.flight.endDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSearchTicket);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isBook);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _book_flight_book_flight_component__WEBPACK_IMPORTED_MODULE_6__["BookFlightComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmbGlnaHQtc2VhcmNoLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlightSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-flight-search',
                templateUrl: './flight-search.component.html',
                styleUrls: ['./flight-search.component.css']
            }]
    }], function () { return [{ type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] }]; }, null); })();


/***/ }),

/***/ "e7gS":
/*!************************************************************************!*\
  !*** ./src/app/component/booking-history/booking-history.component.ts ***!
  \************************************************************************/
/*! exports provided: BookingHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingHistoryComponent", function() { return BookingHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BookingHistoryComponent {
    constructor() { }
    ngOnInit() {
    }
}
BookingHistoryComponent.ɵfac = function BookingHistoryComponent_Factory(t) { return new (t || BookingHistoryComponent)(); };
BookingHistoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookingHistoryComponent, selectors: [["app-booking-history"]], decls: 1, vars: 0, template: function BookingHistoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " -->\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib29raW5nLWhpc3RvcnkuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookingHistoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-booking-history',
                templateUrl: './booking-history.component.html',
                styleUrls: ['./booking-history.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fmSY":
/*!**************************************************************!*\
  !*** ./src/app/component/search-pnr/search-pnr.component.ts ***!
  \**************************************************************/
/*! exports provided: SearchPNRComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPNRComponent", function() { return SearchPNRComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Entity_BookingTicket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Entity/BookingTicket */ "8pWB");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var src_app_Entity_Flight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Entity/Flight */ "M5Ap");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/user.service */ "VITL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









const _c0 = ["content"];
function SearchPNRComponent_div_17_tr_19_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchPNRComponent_div_17_tr_19_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const t_r5 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.downloadPdf(t_r5.pnrNumber); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r5.flightNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r5.passenger_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r5.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r5.pnrNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r5.passenger_seatNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r5.gender);
} }
function SearchPNRComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Flight No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Pnr Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Seat No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SearchPNRComponent_div_17_tr_19_Template, 16, 6, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.tickets);
} }
function SearchPNRComponent_div_19_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r10.flightNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r10.passenger_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r10.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r10.pnrNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r10.passenger_seatNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r10.gender);
} }
function SearchPNRComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Flight No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Pnr Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Seat No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SearchPNRComponent_div_19_tr_19_Template, 13, 6, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.tickets);
} }
function SearchPNRComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Flight Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " From");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " To ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Ticket No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Name -");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Email -");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Seat No -");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Age -");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Gender -");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " PRN -");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.flightpdf1.fromPlace);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.flightpdf1.toPlace);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.flightpdf1.ticket);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.bookTicketpdf1.passenger_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.bookTicketpdf1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.bookTicketpdf1.passenger_seatNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.bookTicketpdf1.passenger_age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.bookTicketpdf1.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.bookTicketpdf1.pnrNumber);
} }
class SearchPNRComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.bookTicketpdf = new src_app_Entity_BookingTicket__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.flightpdf = new src_app_Entity_Flight__WEBPACK_IMPORTED_MODULE_3__["Flight"]();
        this.tickets = [];
        this.bookTicketpdf1 = new src_app_Entity_BookingTicket__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.flightpdf1 = new src_app_Entity_Flight__WEBPACK_IMPORTED_MODULE_3__["Flight"]();
        this.tickets1 = [];
        this.isPnrSearch = false;
        this.isEmailSearch = false;
        this.hideContent = false;
    }
    pnrSearch() {
        const observable = this.userService.searchByPnr(this.bookTicketpdf.pnrNumber).subscribe((Response) => {
            this.isPnrSearch = true;
            console.log(Response);
            this.tickets = Response;
        }, function (error) {
            console.log(error);
            //alert('Succesfully Search Ticket!');
        });
    }
    searchEmail() {
        const observable1 = this.userService.searchByEmail(this.bookTicketpdf.email).subscribe((Response) => {
            this.isEmailSearch = true;
            console.log(Response);
            this.tickets = Response;
        }, function (error) {
            console.log(error);
            //alert('Succesfully Search Ticket!');
        });
    }
    downloadPdf(pnrNumber) {
        console.log("-----" + pnrNumber);
        const observable = this.userService.searchByPnr(pnrNumber);
        console.log("-----" + pnrNumber);
        observable.subscribe((response) => {
            console.log(response);
            console.log("-----" + pnrNumber);
            this.bookTicketpdf = response;
            console.log(this.bookTicketpdf1.flightNo);
            const promise = this.userService.getFlightByFlighNo(this.bookTicketpdf.flightNo);
            promise.subscribe((response) => {
                console.log("-----" + pnrNumber);
                this.flightpdf = response;
                console.log("------" + this.flightpdf.fromPlace);
                if (this.flightpdf != null) {
                    console.log(this.flightpdf);
                    this.hideContent = true;
                    // setTimeout(() => {
                    //   this.callDownloadPdf(pnrNumber);
                    //   this.hideContent = false;
                    // }, 10)
                }
            });
        });
    }
    callDownloadPdf(pnrNumber) {
        let pdf = new jspdf__WEBPACK_IMPORTED_MODULE_2__["default"]('p', 'pt', 'a4');
        pdf.html(this.content.nativeElement, {
            callback: (pdf) => {
                pdf.save(pnrNumber + ".pdf");
            }
        });
    }
    ngOnInit() {
    }
}
SearchPNRComponent.ɵfac = function SearchPNRComponent_Factory(t) { return new (t || SearchPNRComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
SearchPNRComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchPNRComponent, selectors: [["app-search-pnr"]], viewQuery: function SearchPNRComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, decls: 25, vars: 5, consts: [[1, "form-outline", "mb-4"], ["type", "search", "required", "", "placeholder", "Enter PNR Number", "id", "datatable-search-input", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "datatable"], [1, "btn", "btn-primary", "btn-lg", 3, "click"], ["type", "search", "required", "", "placeholder", "Enter Email", "id", "datatable-search-input", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "display-3"], [4, "ngIf"], ["id", "content"], ["content", ""], ["class", "text-center", 4, "ngIf"], [1, "table", "table-dark", "table-striped"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-danger", 3, "click"], [1, "text-center"], [1, "row"], [1, "col-md-2"], [1, "col-md-4"]], template: function SearchPNRComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchPNRComponent_Template_input_ngModelChange_2_listener($event) { return ctx.bookTicketpdf.pnrNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchPNRComponent_Template_button_click_5_listener() { return ctx.pnrSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchPNRComponent_Template_input_ngModelChange_9_listener($event) { return ctx.bookTicketpdf.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchPNRComponent_Template_button_click_12_listener() { return ctx.searchEmail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Booking History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SearchPNRComponent_div_17_Template, 20, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SearchPNRComponent_div_19_Template, 20, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " --> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SearchPNRComponent_div_24_Template, 44, 9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.bookTicketpdf.pnrNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.bookTicketpdf.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPnrSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEmailSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hideContent);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2gtcG5yLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchPNRComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search-pnr',
                templateUrl: './search-pnr.component.html',
                styleUrls: ['./search-pnr.component.css']
            }]
    }], function () { return [{ type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['content']
        }] }); })();


/***/ }),

/***/ "g8H4":
/*!****************************************************!*\
  !*** ./src/app/component/login/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/auth.service */ "7Vn+");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/token-storage.service */ "FQmJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function LoginComponent_form_3_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Username is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_form_3_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_form_3_div_13_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at least 6 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_form_3_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_form_3_div_13_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_form_3_div_13_div_2_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.minlength);
} }
function LoginComponent_form_3_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Login failed: ", ctx_r7.errorMessage, " ");
} }
function LoginComponent_form_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_form_3_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _r2.form.valid && ctx_r10.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_form_3_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.form.username = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LoginComponent_form_3_div_7_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_form_3_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.form.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginComponent_form_3_div_13_Template, 3, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LoginComponent_form_3_div_18_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.form.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors && _r2.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.form.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors && _r2.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.submitted && ctx_r0.isLoginFailed);
} }
function LoginComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Logged in as ", ctx_r1.roles, ". ");
} }
class LoginComponent {
    constructor(authService, tokenStorage) {
        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.form = {
            username: null,
            password: null
        };
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = '';
        this.roles = [];
    }
    ngOnInit() {
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles;
        }
    }
    onSubmit() {
        const { username, password } = this.form;
        this.authService.login(username, password).subscribe(data => {
            this.tokenStorage.saveToken(data.accessToken);
            this.tokenStorage.saveUser(data);
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles;
            this.reloadPage();
        }, err => {
            this.errorMessage = err.error.message;
            this.isLoginFailed = true;
        });
    }
    reloadPage() {
        window.location.reload();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 5, vars: 2, consts: [[1, "col-md-12"], [1, "card", "card-container"], ["id", "profile-img", "src", "//ssl.gstatic.com/accounts/ui/avatar_2x.png", 1, "profile-img-card"], ["name", "form", "novalidate", "", 3, "ngSubmit", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["name", "form", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "forms-inputs", "mb-4"], ["for", "username"], ["type", "text", "name", "username", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["for", "password"], ["type", "password", "name", "password", "required", "", "minlength", "6", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "btn", "btn-primary", "btn-block"], [1, "form-group"], ["role", "alert", 1, "alert", "alert-danger"], [4, "ngIf"], [1, "alert", "alert-success"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_form_3_Template, 19, 5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginComponent_div_4_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"]], styles: ["label[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-top: 10px;\r\n}\r\n\r\n.card-container.card[_ngcontent-%COMP%] {\r\n  max-width: 400px !important;\r\n  padding: 40px 40px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  background-color: #f7f7f7;\r\n  padding: 20px 25px 30px;\r\n  margin: 0 auto 25px;\r\n  margin-top: 50px;\r\n  border-radius: 2px;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.profile-img-card[_ngcontent-%COMP%] {\r\n  width: 96px;\r\n  height: 96px;\r\n  margin: 0 auto 10px;\r\n  display: block;\r\n  border-radius: 50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUdoQixrQkFBa0I7RUFHbEIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsY0FBYztFQUdkLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lci5jYXJkIHtcclxuICBtYXgtd2lkdGg6IDQwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogNDBweCA0MHB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcclxuICBwYWRkaW5nOiAyMHB4IDI1cHggMzBweDtcclxuICBtYXJnaW46IDAgYXV0byAyNXB4O1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxufVxyXG5cclxuLnByb2ZpbGUtaW1nLWNhcmQge1xyXG4gIHdpZHRoOiA5NnB4O1xyXG4gIGhlaWdodDogOTZweDtcclxuICBtYXJnaW46IDAgYXV0byAxMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"] }]; }, null); })();


/***/ }),

/***/ "jg0z":
/*!******************************************************!*\
  !*** ./src/app/board-admin/board-admin.component.ts ***!
  \******************************************************/
/*! exports provided: BoardAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardAdminComponent", function() { return BoardAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/user.service */ "VITL");



class BoardAdminComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        this.userService.getAdminBoard().subscribe(data => {
            this.content = data;
        }, err => {
            this.content = JSON.parse(err.error).message;
        });
    }
}
BoardAdminComponent.ɵfac = function BoardAdminComponent_Factory(t) { return new (t || BoardAdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
BoardAdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BoardAdminComponent, selectors: [["app-board-admin"]], decls: 6, vars: 1, consts: [[1, "container"], ["href", "fullsize.html"], ["src", "https://programmer.help/images/blog/5a4b39619c1098a064281f19493fef29.jpg"], [1, "jumbotron"]], template: function BoardAdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "header", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.content);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib2FyZC1hZG1pbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoardAdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-board-admin',
                templateUrl: './board-admin.component.html',
                styleUrls: ['./board-admin.component.css']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, null); })();


/***/ }),

/***/ "lIvq":
/*!**************************************************************!*\
  !*** ./src/app/board-moderator/board-moderator.component.ts ***!
  \**************************************************************/
/*! exports provided: BoardModeratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardModeratorComponent", function() { return BoardModeratorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/user.service */ "VITL");



class BoardModeratorComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        this.userService.getModeratorBoard().subscribe(data => {
            this.content = data;
        }, err => {
            this.content = JSON.parse(err.error).message;
        });
    }
}
BoardModeratorComponent.ɵfac = function BoardModeratorComponent_Factory(t) { return new (t || BoardModeratorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
BoardModeratorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BoardModeratorComponent, selectors: [["app-board-moderator"]], decls: 4, vars: 1, consts: [[1, "container"], [1, "jumbotron"]], template: function BoardModeratorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.content);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib2FyZC1tb2RlcmF0b3IuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoardModeratorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-board-moderator',
                templateUrl: './board-moderator.component.html',
                styleUrls: ['./board-moderator.component.css']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, null); })();


/***/ }),

/***/ "moiR":
/*!******************************************************!*\
  !*** ./src/app/component/update/update.component.ts ***!
  \******************************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Entity_Flight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Entity/Flight */ "M5Ap");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/user.service */ "VITL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class UpdateComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.flight = new src_app_Entity_Flight__WEBPACK_IMPORTED_MODULE_1__["Flight"]();
        this.butDisable = true;
    }
    getFlightByFlighNo() {
        const observable = this.service.updateFlight(this.flightNo, this.flight);
        observable.subscribe((Response) => {
            console.log(Response);
        }, function (error) {
            console.log(error);
            // alert('Something went wrong please try again!');
            alert('Succesfully Add Flight!');
        });
    }
    ngOnInit() {
        this.router.params.subscribe(params => {
            this.flightNo = params.flightNo;
            console.log(this.flightNo);
        });
        const promise = this.service.getFlightByFlighNo(this.flightNo);
        promise.subscribe((response) => {
            console.log(response);
            this.flight = response;
        });
    }
}
UpdateComponent.ɵfac = function UpdateComponent_Factory(t) { return new (t || UpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
UpdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdateComponent, selectors: [["app-update"]], decls: 61, vars: 11, consts: [[2, "text-align", "center"], [1, "wrapper", "bg-white"], ["id", "inputGroup-sizing-default", 1, "input-group-text"], ["type", "text", "placeholder", "Enter AirlineName", "aria-label", "Sizing example input", "aria-describedby", "inputGroup-sizing-default", 1, "form-control", 3, "ngModel", "ngModelChange"], ["placeholder", "Enter From Place ", "type", "text", "aria-label", "Sizing example input", "aria-describedby", "inputGroup-sizing-default", 1, "form-control", 3, "ngModel", "ngModelChange"], ["placeholder", "Enter To Place", "type", "text", "aria-label", "Sizing example input", "aria-describedby", "inputGroup-sizing-default", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Enter Instrument Name", "aria-label", "Sizing example input", "aria-describedby", "inputGroup-sizing-default", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "placeholder", "Enter BusinessSeat", "aria-label", "Sizing example input", "aria-describedby", "inputGroup-sizing-default", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "placeholder", "Enter nonBusinessSeat", "aria-label", "Sizing example input", "aria-describedby", "inputGroup-sizing-default", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "placeholder", "Enter Ticket ", "aria-label", "Sizing example input", "aria-describedby", "inputGroup-sizing-default", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Enter Meal", "aria-label", "Sizing example input", "aria-describedby", "inputGroup-sizing-default", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Enter Way", "aria-label", "Sizing example input", "aria-describedby", "inputGroup-sizing-default", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group", "d-sm-flex", "margin"], [1, "d-flex", "align-items-center", "flex-fill", "me-sm1", "my-sm-0", "border-bottom", "position-relative"], ["type", "Date", "required", "", "placeholder", "Depart Date", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "startDate", 1, "label"], [1, "d-flex", "align-items-center", "flex-fill", "ms-sm-1", "my-sm-0", "my-4", "border-bottom", "position-relative"], ["type", "Date", "required", "", "placeholder", "Return Date", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "endDate", 1, "label"], [1, "btn", "btn-primary", "btn-lg", 3, "click"]], template: function UpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Update Flight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Enter AirlineName");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_7_listener($event) { return ctx.flight.airLinename = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Enter From Place");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_12_listener($event) { return ctx.flight.fromPlace = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Enter To Place");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_17_listener($event) { return ctx.flight.toPlace = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Choose Instrument ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_22_listener($event) { return ctx.flight.instrument = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "businessSeat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_27_listener($event) { return ctx.flight.businessSeat = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "NonbusinessSeat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_32_listener($event) { return ctx.flight.nonBusinessSeat = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Ticket ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_37_listener($event) { return ctx.flight.ticket = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Meal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_43_listener($event) { return ctx.flight.meal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Way");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_48_listener($event) { return ctx.flight.ways = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_52_listener($event) { return ctx.flight.startDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_55_listener($event) { return ctx.flight.endDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateComponent_Template_button_click_59_listener() { return ctx.getFlightByFlighNo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " UpdateFlight ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.flight.airLinename);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.flight.fromPlace);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.flight.toPlace);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.flight.instrument);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.flight.businessSeat);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.flight.nonBusinessSeat);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.flight.ticket);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.flight.meal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.flight.ways);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.flight.startDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.flight.endDate);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-update',
                templateUrl: './update.component.html',
                styleUrls: ['./update.component.css']
            }]
    }], function () { return [{ type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "nEsl":
/*!**********************************************************!*\
  !*** ./src/app/component/register/register.component.ts ***!
  \**********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/auth.service */ "7Vn+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function RegisterComponent_form_3_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Username is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_form_3_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Username must be at least 3 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_form_3_div_7_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Username must be at most 20 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_form_3_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_form_3_div_7_div_1_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_form_3_div_7_div_2_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RegisterComponent_form_3_div_7_div_3_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.maxlength);
} }
function RegisterComponent_form_3_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_form_3_div_13_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email must be a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_form_3_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_form_3_div_13_div_1_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_form_3_div_13_div_2_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.email);
} }
function RegisterComponent_form_3_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_form_3_div_19_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at least 6 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_form_3_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_form_3_div_19_div_1_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_form_3_div_19_div_2_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.errors.minlength);
} }
function RegisterComponent_form_3_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Signup failed!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r9.errorMessage, " ");
} }
function RegisterComponent_form_3_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_form_3_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _r2.form.valid && ctx_r17.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_form_3_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.form.username = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RegisterComponent_form_3_div_7_Template, 4, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_form_3_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.form.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RegisterComponent_form_3_div_13_Template, 3, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_form_3_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.form.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RegisterComponent_form_3_div_19_Template, 3, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RegisterComponent_form_3_div_23_Template, 4, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.form.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors && _r2.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.form.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors && _r2.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.form.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.errors && _r2.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.submitted && ctx_r0.isSignUpFailed);
} }
function RegisterComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your registration is successful! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class RegisterComponent {
    constructor(authService) {
        this.authService = authService;
        this.form = {
            username: null,
            email: null,
            password: null
        };
        this.isSuccessful = false;
        this.isSignUpFailed = false;
        this.errorMessage = '';
    }
    ngOnInit() {
    }
    onSubmit() {
        const { username, email, password } = this.form;
        this.authService.register(username, email, password).subscribe(data => {
            console.log(data);
            this.isSuccessful = true;
            this.isSignUpFailed = false;
        }, err => {
            this.errorMessage = err.error.message;
            this.isSignUpFailed = true;
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 5, vars: 2, consts: [[1, "col-md-12"], [1, "card", "card-container"], ["id", "profile-img", "src", "//ssl.gstatic.com/accounts/ui/avatar_2x.png", 1, "profile-img-card"], ["name", "form", "novalidate", "", 3, "ngSubmit", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["name", "form", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "username"], ["type", "text", "name", "username", "required", "", "minlength", "3", "maxlength", "20", 1, "form-control", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], ["class", "alert-danger", 4, "ngIf"], ["for", "email"], ["type", "email", "name", "email", "required", "", "email", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["for", "password"], ["type", "password", "name", "password", "required", "", "minlength", "6", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "btn", "btn-primary", "btn-block"], ["class", "alert alert-warning", 4, "ngIf"], [1, "alert-danger"], [4, "ngIf"], [1, "alert", "alert-warning"], [1, "alert", "alert-success"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RegisterComponent_form_3_Template, 24, 7, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RegisterComponent_div_4_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSuccessful);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSuccessful);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["EmailValidator"]], styles: ["label[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-top: 10px;\r\n}\r\n\r\n.card-container.card[_ngcontent-%COMP%] {\r\n  max-width: 400px !important;\r\n  padding: 40px 40px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  background-color: #f7f7f7;\r\n  padding: 20px 25px 30px;\r\n  margin: 0 auto 25px;\r\n  margin-top: 50px;\r\n  border-radius: 2px;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.profile-img-card[_ngcontent-%COMP%] {\r\n  width: 96px;\r\n  height: 96px;\r\n  margin: 0 auto 10px;\r\n  display: block;\r\n  border-radius: 50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUdoQixrQkFBa0I7RUFHbEIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsY0FBYztFQUdkLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lci5jYXJkIHtcclxuICBtYXgtd2lkdGg6IDQwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogNDBweCA0MHB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcclxuICBwYWRkaW5nOiAyMHB4IDI1cHggMzBweDtcclxuICBtYXJnaW46IDAgYXV0byAyNXB4O1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxufVxyXG5cclxuLnByb2ZpbGUtaW1nLWNhcmQge1xyXG4gIHdpZHRoOiA5NnB4O1xyXG4gIGhlaWdodDogOTZweDtcclxuICBtYXJnaW46IDAgYXV0byAxMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "pt+s":
/*!************************************************************************!*\
  !*** ./src/app/component/show-all-flight/show-all-flight.component.ts ***!
  \************************************************************************/
/*! exports provided: ShowAllFlightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowAllFlightComponent", function() { return ShowAllFlightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Entity_Flight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Entity/Flight */ "M5Ap");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/user.service */ "VITL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ShowAllFlightComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowAllFlightComponent_tr_31_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const flight_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.deleteFlight(flight_r1.flightNo); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const flight_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r1.flightNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r1.airLinename);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r1.fromPlace);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r1.toPlace);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r1.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r1.endDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r1.instrument);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r1.businessSeat);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/updateFlight/", flight_r1.flightNo, "");
} }
class ShowAllFlightComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.flight = new src_app_Entity_Flight__WEBPACK_IMPORTED_MODULE_1__["Flight"]();
        this.flights = [];
    }
    deleteFlight(flight) {
        console.log(flight);
        const observable = this.service.removeFlight(flight);
        observable.subscribe((response) => {
            console.log(response);
            this.flights.slice(flight, 1);
        });
    }
    ngOnInit() {
        const promise = this.service.getFlight();
        promise.subscribe((response) => {
            console.log(response);
            this.flights = response;
        });
    }
}
ShowAllFlightComponent.ɵfac = function ShowAllFlightComponent_Factory(t) { return new (t || ShowAllFlightComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ShowAllFlightComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowAllFlightComponent, selectors: [["app-show-all-flight"]], decls: 32, vars: 1, consts: [[1, "pb-5", "header", "text-center"], [1, "container", "py-5", "text-white"], [1, "row"], [1, "col-lg-20", "mx-auto"], [1, "card", "border-0", "shadow"], [1, "card-body", "p-5"], [1, "table-responsive"], [1, "table", "table-hover"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["type", "button", "data-toggle", "modal", "data-target", "updateFlight", 1, "btn", "btn-outline-primary", "me-2", 3, "routerLink"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click"]], template: function ShowAllFlightComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "LIST OF FLIGHT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "FlightNo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "AirLineName");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "FromPlace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "ToPlace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Departure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Arrival");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Instrument");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "BusinessSeat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ShowAllFlightComponent_tr_31_Template, 22, 9, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.flights);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG93LWFsbC1mbGlnaHQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowAllFlightComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-show-all-flight',
                templateUrl: './show-all-flight.component.html',
                styleUrls: ['./show-all-flight.component.css']
            }]
    }], function () { return [{ type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "rID0":
/*!********************************************************!*\
  !*** ./src/app/component/profile/profile.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/token-storage.service */ "FQmJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ProfileComponent_div_0_li_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", role_r4, " ");
} }
function ProfileComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Token:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Roles:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProfileComponent_div_0_li_17_Template, 2, 1, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.currentUser.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r0.currentUser.accessToken.substring(0, 20), " ... ", ctx_r0.currentUser.accessToken.substr(ctx_r0.currentUser.accessToken.length - 20), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.currentUser.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.currentUser.roles);
} }
function ProfileComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Please login.\n");
} }
class ProfileComponent {
    constructor(token) {
        this.token = token;
    }
    ngOnInit() {
        this.currentUser = this.token.getUser();
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 3, vars: 2, consts: [["class", "container", 4, "ngIf", "ngIfElse"], ["loggedOut", ""], [1, "container"], [1, "jumbotron"], [4, "ngFor", "ngForOf"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProfileComponent_div_0_Template, 18, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css']
            }]
    }], function () { return [{ type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"] }]; }, null); })();


/***/ }),

/***/ "rvN9":
/*!**********************************************************!*\
  !*** ./src/app/component/thankyou/thankyou.component.ts ***!
  \**********************************************************/
/*! exports provided: ThankyouComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankyouComponent", function() { return ThankyouComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ThankyouComponent {
    constructor() { }
    ngOnInit() {
    }
}
ThankyouComponent.ɵfac = function ThankyouComponent_Factory(t) { return new (t || ThankyouComponent)(); };
ThankyouComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ThankyouComponent, selectors: [["app-thankyou"]], decls: 1, vars: 0, consts: [["src", "https://propellerheadaviation.com/wp-content/uploads/2016/12/Thank-You.jpg", "alt", "Digital Ocean\u2019s mascot, a blue smiling shark.", 1, "float-full"]], template: function ThankyouComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aGFua3lvdS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThankyouComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-thankyou',
                templateUrl: './thankyou.component.html',
                styleUrls: ['./thankyou.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "tElQ":
/*!**********************************************!*\
  !*** ./src/app/_helpers/auth.interceptor.ts ***!
  \**********************************************/
/*! exports provided: AuthInterceptor, authInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authInterceptorProviders", function() { return authInterceptorProviders; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/token-storage.service */ "FQmJ");




const TOKEN_HEADER_KEY = 'Authorization'; // for Spring Boot back-end
// const TOKEN_HEADER_KEY = 'x-access-token';   // for Node.js Express back-end
class AuthInterceptor {
    constructor(token) {
        this.token = token;
    }
    intercept(req, next) {
        let authReq = req;
        const token = this.token.getToken();
        if (token != null) {
            // for Spring Boot back-end
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
            // for Node.js Express back-end
            // authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, token) });
        }
        return next.handle(authReq);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"] }]; }, null); })();
const authInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: AuthInterceptor, multi: true }
];


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _component_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/register/register.component */ "nEsl");
/* harmony import */ var _component_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/login/login.component */ "g8H4");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/home/home.component */ "E8dp");
/* harmony import */ var _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/profile/profile.component */ "rID0");
/* harmony import */ var _board_user_board_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./board-user/board-user.component */ "Nv+Q");
/* harmony import */ var _board_moderator_board_moderator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./board-moderator/board-moderator.component */ "lIvq");
/* harmony import */ var _board_admin_board_admin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./board-admin/board-admin.component */ "jg0z");
/* harmony import */ var _component_add_flight_add_flight_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/add-flight/add-flight.component */ "DPaS");
/* harmony import */ var _component_show_all_flight_show_all_flight_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/show-all-flight/show-all-flight.component */ "pt+s");
/* harmony import */ var _component_update_update_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/update/update.component */ "moiR");
/* harmony import */ var _component_book_flight_book_flight_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/book-flight/book-flight.component */ "9ePn");
/* harmony import */ var _component_flight_search_flight_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/flight-search/flight-search.component */ "ZnVa");
/* harmony import */ var _component_thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/thankyou/thankyou.component */ "rvN9");
/* harmony import */ var _component_search_pnr_search_pnr_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/search-pnr/search-pnr.component */ "fmSY");
/* harmony import */ var _component_booking_history_booking_history_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/booking-history/booking-history.component */ "e7gS");



















const routes = [
    { path: 'login', component: _component_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _component_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: 'profile', component: _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: 'user', component: _board_user_board_user_component__WEBPACK_IMPORTED_MODULE_6__["BoardUserComponent"] },
    { path: 'mod', component: _board_moderator_board_moderator_component__WEBPACK_IMPORTED_MODULE_7__["BoardModeratorComponent"] },
    { path: 'board-admin', component: _board_admin_board_admin_component__WEBPACK_IMPORTED_MODULE_8__["BoardAdminComponent"] },
    { path: 'add-flight', component: _component_add_flight_add_flight_component__WEBPACK_IMPORTED_MODULE_9__["AddFlightComponent"] },
    { path: 'home', component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'show-all-flight', component: _component_show_all_flight_show_all_flight_component__WEBPACK_IMPORTED_MODULE_10__["ShowAllFlightComponent"] },
    { path: 'updateFlight/:flightNo', component: _component_update_update_component__WEBPACK_IMPORTED_MODULE_11__["UpdateComponent"] },
    { path: 'book-flight', component: _component_book_flight_book_flight_component__WEBPACK_IMPORTED_MODULE_12__["BookFlightComponent"] },
    { path: 'flight-search', component: _component_flight_search_flight_search_component__WEBPACK_IMPORTED_MODULE_13__["FlightSearchComponent"] },
    { path: "thankyou", component: _component_thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_14__["ThankyouComponent"] },
    { path: 'search-pnr', component: _component_search_pnr_search_pnr_component__WEBPACK_IMPORTED_MODULE_15__["SearchPNRComponent"] },
    { path: 'booking-history', component: _component_booking_history_booking_history_component__WEBPACK_IMPORTED_MODULE_16__["BookingHistoryComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map