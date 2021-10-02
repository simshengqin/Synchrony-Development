(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+/AT":
/*!***********************************************!*\
  !*** ./src/app/core/services/crud.service.ts ***!
  \***********************************************/
/*! exports provided: CrudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudService", function() { return CrudService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _firestore_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firestore.service */ "W5nQ");


class CrudService {
    constructor(fs) {
        this.fs = fs;
    }
    create(collection, data) {
        return this.fs.add(collection, data);
    }
    update(collection, docId, data) {
        return this.fs.update(collection + '/' + docId, data);
    }
    delete(collection, docId) {
        return this.fs.delete(collection + '/' + docId);
    }
    readByDocId(collection, docId) {
        return this.fs.doc$(collection + '/' + docId);
    }
    read(collection, filterName1 = '', filterOp1 = '', filterValue1 = '', filterName2 = '', filterOp2 = '', filterValue2 = '', filterName3 = '', filterOp3 = '', filterValue3 = '', filterName4 = '', filterOp4 = '', filterValue4 = '', sortColumn = '', isAsc = false) {
        // Cannot use === as filterValue1 etc can be a number
        // tslint:disable-next-line:triple-equals
        // console.log(filterValue1 + ',' + filterValue2 + ',' + filterValue3 + ',' + filterValue4 + ',');
        // tslint:disable-next-line:triple-equals
        if (filterValue1 == '' && filterValue2 == '' && filterValue3 == '' && filterValue4 == '') {
            return this.fs.col$(collection, ref => {
                return ref;
                // .orderBy('createdDatetime', 'desc');
            });
        }
        // @ts-ignore
        return this.fs.col$(collection, ref => {
            let result;
            if (filterValue1 !== '') {
                result = ref.where(filterName1, filterOp1, filterValue1);
            }
            // else if (filterValue2 !== '') {result = ref.where(filterName2, filterOp2, filterValue2); }
            // else if (filterValue3 !== '') {result = ref.where(filterName3, filterOp3, filterValue3); }
            // else if (filterValue4 !== '') {result = ref.where(filterName4, filterOp4, filterValue4); }
            for (let i = 2; i <= 4; i++) {
                switch (i) {
                    // case 1:
                    //   if (filterValue1 !== '') {
                    //     console.log('First filter op only');
                    //     result = result?.where(filterName1, filterOp1, filterValue1); }
                    //   break;
                    case 2:
                        if (filterValue2 !== '') {
                            result = result === null || result === void 0 ? void 0 : result.where(filterName2, filterOp2, filterValue2);
                        }
                        break;
                    case 3:
                        if (filterValue3 !== '') {
                            result = result === null || result === void 0 ? void 0 : result.where(filterName3, filterOp3, filterValue3);
                        }
                        break;
                    case 4:
                        if (filterValue4 !== '') {
                            result = result === null || result === void 0 ? void 0 : result.where(filterName4, filterOp4, filterValue4);
                        }
                        break;
                }
            }
            return result; // ?.orderBy('school', 'asc');
        });
    }
}
CrudService.ɵfac = function CrudService_Factory(t) { return new (t || CrudService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_firestore_service__WEBPACK_IMPORTED_MODULE_1__["FirestoreService"])); };
CrudService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CrudService, factory: CrudService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "/WYx":
/*!*******************************************************************!*\
  !*** ./src/app/ui/student/student-home/student-home.component.ts ***!
  \*******************************************************************/
/*! exports provided: StudentHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentHomeComponent", function() { return StudentHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/header/header.component */ "aZ8m");


class StudentHomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
StudentHomeComponent.ɵfac = function StudentHomeComponent_Factory(t) { return new (t || StudentHomeComponent)(); };
StudentHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentHomeComponent, selectors: [["app-student-home"]], decls: 3, vars: 0, template: function StudentHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "student-home works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHVkZW50LWhvbWUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Documents\GitHub\Synchrony-Development\src\main.ts */"zUnb");


/***/ }),

/***/ 1:
/*!******************************!*\
  !*** min-document (ignored) ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "2BFw":
/*!*********************************************************************!*\
  !*** ./src/app/ui/admin/account-delete/account-delete.component.ts ***!
  \*********************************************************************/
/*! exports provided: AccountDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountDeleteComponent", function() { return AccountDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/crud.service */ "+/AT");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/header/header.component */ "aZ8m");
/* harmony import */ var _shared_components_input_dropdown_select_input_dropdown_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/input-dropdown-select/input-dropdown-select.component */ "x/FY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/table/table.component */ "Xv+k");








function AccountDeleteComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "app-input-dropdown-select", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("outputData", function AccountDeleteComponent_ng_container_8_Template_app_input_dropdown_select_outputData_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.get_query_data_sub_instruments($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("inputDataList", ctx_r0.sub_instrument)("name", ctx_r0.nameInstrument);
} }
function AccountDeleteComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "app-input-dropdown-select", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("outputData", function AccountDeleteComponent_ng_container_9_Template_app_input_dropdown_select_outputData_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.get_query_data_sub_levels($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("inputDataList", ctx_r1.sub_levels)("name", ctx_r1.nameLevels);
} }
class AccountDeleteComponent {
    constructor(crudservice) {
        this.crudservice = crudservice;
        this.accounts = [];
        this.displayedColumns = ['username', 'first_name', 'last_name', 'role', 'school_instrument_level', 'action'];
        this.actionType = "accountDelete";
        // === set filter data === //
        //schools:string[] = [];
        this.school_instrument_levels = [];
        //groups:string[] = [];
        //instruments:string[] = [];
        //levels:string[] = [];
        this.roles = ["admin", "instructor", "student"];
        this.sub_schools = [];
        this.sub_instrument = [];
        this.sub_levels = [];
        this.sub_display_instrument = false;
        this.sub_display_levels = false;
        // === set filter name === //
        this.nameSchool = "School";
        //nameGroup:string = "Group"
        this.nameRole = "Role";
        this.nameSchoolInstrumentLevels = "School Instrument Levels";
        this.nameInstrument = "Instrument";
        this.nameLevels = "Levels";
        // === get filter data === //
        this.selectRoles = [];
        this.selectSchools = [];
        //selectGroups:string[] = [];
        this.selectGroups = [];
        //selectSchoolInstrumentLevels:string[] = [];
        this.select_Combine_SchoolInstrumentLevels = [];
        this.selectSubSchools = [];
        this.selectSubInstruments = [];
        this.selectSubLevels = [];
    }
    ngOnInit() {
        this.retrieve_all_accounts();
        this.accountDetail = JSON.parse(sessionStorage.getItem("account"));
        this.accountUsername = this.accountDetail.username;
    }
    ngAfterViewInit() {
        // empty
    }
    retrieve_all_accounts() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = yield this.crudservice.read('accounts').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).toPromise();
            if (data != undefined || data != null) {
                //this.dataSource = data
                for (var ele of data) {
                    try {
                        this.create_account(ele);
                        var school_instrument_level = ele["school_instrument_level"];
                        this.set_distint_school_instrument_level(school_instrument_level);
                    }
                    catch (e) {
                        // console.log("something wrong with the data! check the database!")
                    }
                }
                //console.log(this.accounts.length)
                this.dataSource = this.accounts;
            }
        });
    }
    create_account(data) {
        if (data.school[0] == "-") {
            data.school[0] = "NA";
        }
        if (data.school_instrument_level[0] == "-") {
            data.school_instrument_level[0] = "NA";
        }
        if (!data.is_delete) {
            var account = {
                docId: data.docId,
                username: data.username,
                role: data.role,
                school: data.school,
                school_instrument_level: data.school_instrument_level,
                first_name: data.first_name,
                last_name: data.last_name,
                password: data.password,
                first_login: data.first_login,
                is_delete: data.is_delete
            };
            this.accounts.push(account);
        }
    }
    // Method:
    set_distint_school_instrument_level(data) {
        for (var dataSchoolInstrumentLevel of data) {
            if (dataSchoolInstrumentLevel != "NA") {
                var sub_query = dataSchoolInstrumentLevel.split("_");
                var school = sub_query[0];
                var instrument = sub_query[1];
                var level = sub_query[2];
                if (this.sub_schools.indexOf(school) == -1) {
                    this.sub_schools.push(school);
                }
                if (this.sub_instrument.indexOf(instrument) == -1) {
                    this.sub_instrument.push(instrument);
                }
                if (this.sub_levels.indexOf(level) == -1) {
                    this.sub_levels.push(level);
                }
            }
        }
    }
    // == get filter == //
    get_query_data_roles($event) {
        this.selectRoles = $event.value;
        this.query_table_with_filter();
    }
    get_query_data_sub_schools($event) {
        this.selectSubSchools = $event.value;
        if (this.selectSubSchools.length == 0) {
            this.sub_display_instrument = false;
            this.sub_display_levels = false;
        }
        else {
            this.sub_display_instrument = true;
            this.sub_display_levels = false;
        }
    }
    get_query_data_sub_instruments($event) {
        this.selectSubInstruments = $event.value;
        if (this.selectSubInstruments.length == 0) {
            this.sub_display_levels = false;
        }
        else {
            this.sub_display_levels = true;
        }
    }
    get_query_data_sub_levels($event) {
        this.selectSubLevels = $event.value;
        this.combine_querry_search_data();
        this.query_table_with_filter();
    }
    // Method: Combine all the permutation of the sub Strings of School, Instrument and levels
    combine_querry_search_data() {
        // console.log(this.selectSubSchools)
        // console.log(this.selectSubInstruments)
        // console.log(this.selectSubLevels)
        this.select_Combine_SchoolInstrumentLevels = [];
        for (var eleSchool of this.selectSubSchools) {
            // console.log(eleSchool)
            for (var eleInstrument of this.selectSubInstruments) {
                for (var eleLevel of this.selectSubLevels) {
                    var query = eleSchool + "_" + eleInstrument + "_" + eleLevel;
                    // console.log(query);
                    if (this.select_Combine_SchoolInstrumentLevels.indexOf(query) == -1) {
                        this.select_Combine_SchoolInstrumentLevels.push(query);
                    }
                }
            }
        }
        //console.log(this.select_Combine_SchoolInstrumentLevels)
    }
    // Method:
    query_table_with_filter() {
        var result = [];
        result = this.accounts;
        if (this.selectRoles.length != 0) {
            result = this.filtering_by_role(result, this.selectRoles);
        }
        if (this.select_Combine_SchoolInstrumentLevels.length != 0) {
            result = this.filtering_by_school_instrument_levels(result, this.select_Combine_SchoolInstrumentLevels);
        }
        if (this.selectRoles.length == 0 && this.select_Combine_SchoolInstrumentLevels.length == 0) {
            result = this.accounts;
        }
        this.dataSource = [];
        this.dataSource = result;
    }
    filtering_by_role(result, filter) {
        var filterResult = [];
        var exist = false;
        for (var ele of result) {
            for (var role of filter) {
                if (ele.role == role) {
                    for (var eleResult of filterResult) {
                        if (eleResult.docId == ele.docId) {
                            exist = true;
                        }
                    }
                    if (!exist) {
                        filterResult.push(ele);
                        exist = false;
                    }
                }
            }
        }
        return filterResult;
    }
    // Brute force method
    filtering_by_school_instrument_levels(result, filter) {
        var filterResult = [];
        var exist = false;
        for (var ele of result) {
            var school_instrument_levels = ele.school_instrument_level;
            for (var query of filter) {
                for (var school_instrument_level of school_instrument_levels) {
                    if (school_instrument_level == query) {
                        for (var eleResult of filterResult) {
                            if (eleResult.docId == ele.docId) {
                                exist = true;
                            }
                        }
                        if (!exist) {
                            filterResult.push(ele);
                            exist = false;
                        }
                    }
                }
            }
        }
        return filterResult;
    }
    delete_doc_id($event) {
        if ($event != "" || $event != null) {
            // console.log($event)
            this.crudservice.delete("accounts", $event);
            var result = [];
            for (var ele of this.dataSource) {
                if (ele.docId != $event) {
                    result.push(ele);
                }
            }
            this.dataSource = result;
        }
        else {
            // console.log("There is no account to delete!")
        }
    }
}
AccountDeleteComponent.ɵfac = function AccountDeleteComponent_Factory(t) { return new (t || AccountDeleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"])); };
AccountDeleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AccountDeleteComponent, selectors: [["app-account-delete"]], decls: 12, vars: 10, consts: [[1, "account-create-wrapper", "wrapper-padding"], [1, "mb-3"], [3, "inputDataList", "name", "outputData"], [4, "ngIf"], [3, "dataSource", "displayedColumns", "actionType", "accountUsername"]], template: function AccountDeleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Delete Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "app-input-dropdown-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("outputData", function AccountDeleteComponent_Template_app_input_dropdown_select_outputData_4_listener($event) { return ctx.get_query_data_roles($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "app-input-dropdown-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("outputData", function AccountDeleteComponent_Template_app_input_dropdown_select_outputData_7_listener($event) { return ctx.get_query_data_sub_schools($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AccountDeleteComponent_ng_container_8_Template, 2, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, AccountDeleteComponent_ng_container_9_Template, 2, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "app-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("inputDataList", ctx.roles)("name", ctx.nameRole);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("inputDataList", ctx.sub_schools)("name", ctx.nameSchool);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.sub_display_instrument);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.sub_display_levels);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns)("actionType", ctx.actionType)("accountUsername", ctx.accountUsername);
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _shared_components_input_dropdown_select_input_dropdown_select_component__WEBPACK_IMPORTED_MODULE_5__["InputDropdownSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_7__["TableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LWRlbGV0ZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "5l12":
/*!*********************************************************************!*\
  !*** ./src/app/ui/admin/freelance-wage/freelance-wage.component.ts ***!
  \*********************************************************************/
/*! exports provided: FreelanceWageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreelanceWageComponent", function() { return FreelanceWageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/crud.service */ "+/AT");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/header/header.component */ "aZ8m");
/* harmony import */ var _shared_components_input_dropdown_select_input_dropdown_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/input-dropdown-select/input-dropdown-select.component */ "x/FY");
/* harmony import */ var _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/table/table.component */ "Xv+k");







class FreelanceWageComponent {
    /*
    accounts:Account[] = [];
    // set table data
    dataSource!:any;
    displayedColumns:string[] = ['username', 'role', 'school', 'school_instrument_level', 'action'];
    actionType:string = "wage";
  
    // set filter data
    school_instrument_levels:string[] = [];
    sub_schools:string[] = [];
    sub_instrument:string[] = [];
    sub_levels:string[] = [];
    sub_display_instrument:boolean = false
    sub_display_levels:boolean = false
  
    // set filter name
    nameSchool:string = "School"
    nameInstrument:string = "Instrument"
    nameLevels:string = "Levels"
  
    // get filter data
    select_Combine_SchoolInstrumentLevels:string[] = [];
    selectSubSchools:string[] = [];
    selectSubInstruments:string[] = [];
    selectSubLevels:string[] = [];
    */
    constructor(crudservice) {
        this.crudservice = crudservice;
        this.wages = [];
        this.displayedColumns = ['first_name', 'last_name', 'month', 'number_of_minutes', 'school_abbreviation', 'year'];
        //displayedColumns:string[] = ['month', 'number_of_minutes', 'school_abbreviation', 'year'];
        this.actionType = "wage";
        // set filter data
        this.schools = [];
        // set filter name
        this.nameSchool = "School";
        // selected schools 
        this.selectedSchools = [];
    }
    ngOnInit() {
        //this.retrieve_all_accounts();
        this.retrieve_all_wages();
    }
    retrieve_all_wages() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dataSource = [];
            this.wages = [];
            const data = yield this.crudservice.read('wages').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).toPromise();
            for (var ele of data) {
                // console.log(ele)
                const instructorData = yield this.crudservice.readByDocId('accounts', ele.account_doc_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).toPromise();
                this.create_wage(ele, instructorData);
                this.set_distint_school(ele.school_abbreviation);
            }
            this.dataSource = this.wages;
            // console.log(this.dataSource);
        });
    }
    create_wage(data, instructorData) {
        //const instructor = await this.crudservice.readByDocId('accounts',data.account_doc_id).pipe(first()).toPromise();
        //console.log(instructor)
        var wage = {
            docId: data.docId,
            first_name: instructorData.first_name,
            last_name: instructorData.last_name,
            account_doc_id: data.account_doc_id,
            month: data.month,
            number_of_minutes: data.number_of_minutes,
            school_abbreviation: data.school_abbreviation,
            year: data.year
        };
        this.wages.push(wage);
    }
    set_distint_school(data) {
        if (this.schools.indexOf(data) == -1) {
            this.schools.push(data);
        }
    }
    get_query_data_sub_schools($event) {
        this.selectedSchools = $event.value;
        // console.log(this.selectedSchools)
        if (this.selectedSchools.length == 0) {
            this.retrieve_all_wages();
        }
        else {
            this.filter_wages_by_selected_school();
        }
    }
    filter_wages_by_selected_school() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dataSource = [];
            this.wages = [];
            const data = yield this.crudservice.read('wages', 'school_abbreviation', 'in', this.selectedSchools).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).toPromise();
            // console.log(data)
            for (var ele of data) {
                // console.log(ele)
                const instructorData = yield this.crudservice.readByDocId('accounts', ele.account_doc_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).toPromise();
                this.create_wage(ele, instructorData);
            }
            this.dataSource = this.wages;
        });
    }
}
FreelanceWageComponent.ɵfac = function FreelanceWageComponent_Factory(t) { return new (t || FreelanceWageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"])); };
FreelanceWageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FreelanceWageComponent, selectors: [["app-freelance-wage"]], decls: 8, vars: 5, consts: [[1, "account-create-wrapper", "wrapper-padding"], [1, "mb-3"], [3, "inputDataList", "name", "outputData"], [3, "dataSource", "displayedColumns", "actionType"]], template: function FreelanceWageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Calculate Wages ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "app-input-dropdown-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("outputData", function FreelanceWageComponent_Template_app_input_dropdown_select_outputData_5_listener($event) { return ctx.get_query_data_sub_schools($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "app-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("inputDataList", ctx.schools)("name", ctx.nameSchool);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns)("actionType", ctx.actionType);
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _shared_components_input_dropdown_select_input_dropdown_select_component__WEBPACK_IMPORTED_MODULE_5__["InputDropdownSelectComponent"], _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_6__["TableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmcmVlbGFuY2Utd2FnZS5jb21wb25lbnQuc2NzcyJ9 */"] });


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
    production: false,
    firebase: {
        apiKey: "AIzaSyA_bzSe5zt66gNGTqOGjXNhtf7IIfgjTUE",
        authDomain: "synchrony-581ed.firebaseapp.com",
        projectId: "synchrony-581ed",
        storageBucket: "synchrony-581ed.appspot.com",
        messagingSenderId: "457246691317",
        appId: "1:457246691317:web:ad586375c8b8ee8d101abc",
        measurementId: "G-YGYD6JY9D2"
    }
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

/***/ "IruG":
/*!***************************************************************************!*\
  !*** ./src/app/ui/admin/account-edit-form/account-edit-form.component.ts ***!
  \***************************************************************************/
/*! exports provided: AccountEditFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountEditFormComponent", function() { return AccountEditFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/crud.service */ "+/AT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/header/header.component */ "aZ8m");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");









class AccountEditFormComponent {
    constructor(route, crudservice, formBuilder, router) {
        this.route = route;
        this.crudservice = crudservice;
        this.formBuilder = formBuilder;
        this.router = router;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            let data = params;
            this.docId = data.docId;
            this.username = data.username;
            this.first_name = data.first_name;
            this.last_name = data.last_name;
            this.role = data.role;
            this.school = data.school;
            this.school_instrument_level = data.school_instrument_level;
            this.selectedItem = data.role;
        });
        this.initForm();
    }
    initForm() {
        this.editForm = this.formBuilder.group({
            username: [""],
            first_name: [""],
            last_name: [""],
            role: [""],
            school: [""],
            school_instrument_level: [""]
        });
    }
    // get new_username(): FormControl{
    //   return this.editForm.get('username') as FormControl;
    // }
    // get new_first_name(): FormControl{
    //   return this.editForm.get('first_name') as FormControl;
    // }
    // get new_last_name(): FormControl{
    //   return this.editForm.get('last_name') as FormControl;
    // }
    // get new_role(): FormControl{
    //   return this.editForm.get('role') as FormControl;
    // }
    // get new_school(): FormControl{
    //   return this.editForm.get('school') as FormControl;
    // }
    // get new_school_instrument_level(): FormControl{
    //   return this.editForm.get('school_instrument_level') as FormControl;
    // }
    edit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // let username = this.editForm.value.username;
            let firstName = this.editForm.value.first_name;
            let lastName = this.editForm.value.last_name;
            let role = this.editForm.value.role;
            let school = this.editForm.value.school;
            let schoolInstrumentLevel = this.editForm.value.school_instrument_level;
            try {
                // username shouldnt be allowed to be editable!!
                // if(username!='') {
                //   this.crudservice.update("accounts", this.docId, {"username": username});
                // }
                if (firstName != '') {
                    this.crudservice.update("accounts", this.docId, { "first_name": firstName });
                }
                if (lastName != '') {
                    this.crudservice.update("accounts", this.docId, { "last_name": lastName });
                }
                if (role != '') {
                    this.crudservice.update("accounts", this.docId, { "role": role });
                }
                if (school != '') {
                    this.crudservice.update("accounts", this.docId, { "school": school });
                }
                if (schoolInstrumentLevel != '') {
                    let delimit = schoolInstrumentLevel.split(","); // it's an array
                    this.crudservice.update("accounts", this.docId, { "school_instrument_level": delimit });
                    // check if the entry follows the sch_inst_lvl format!
                }
                this.router.navigate(['/admin/account/edit']);
            }
            catch (e) {
                // console.log(e);
            }
        });
    }
}
AccountEditFormComponent.ɵfac = function AccountEditFormComponent_Factory(t) { return new (t || AccountEditFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AccountEditFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AccountEditFormComponent, selectors: [["app-account-edit-form"]], decls: 42, vars: 7, consts: [[1, "account_edit_wrapper"], [1, "container"], [3, "formGroup"], ["for", "username"], ["for", "first_name"], ["type", "text", "formControlName", "first_name", 3, "ngModel"], ["for", "last_name"], ["type", "text", "formControlName", "last_name", 3, "ngModel"], ["for", "role"], ["appearance", "fill"], ["formControlName", "role", 3, "ngModel"], ["value", "student"], ["value", "instructor"], ["value", "admin"], ["for", "school"], ["type", "text", "formControlName", "school", 3, "ngModel"], ["for", "school_instrument_level"], ["type", "text", "size", "50", "formControlName", "school_instrument_level", 3, "ngModel"], ["name", "Submit", "value", "Submit", 3, "click"]], template: function AccountEditFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Edit Account & Grouping");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Username:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "First Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Surname:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Role:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Student");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Instructor");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "School:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "School-Instrument-Level:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccountEditFormComponent_Template_button_click_40_listener() { return ctx.edit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.editForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.first_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.last_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.school);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.school_instrument_level);
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"]], styles: [".account_edit_wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.account_edit_wrapper[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], .account_edit_wrapper[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%] {\n  width: 50%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n}\n.account_edit_wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 40px;\n}\n.account_edit_wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding-top: 10px;\n  padding-right: 20px;\n}\n.account_edit_wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: blue;\n  color: white;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  margin-right: 15px;\n  padding: 14px 20px;\n  border: none;\n  cursor: pointer;\n  width: 30%;\n}\n.account_edit_wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWNjb3VudC1lZGl0LWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxhQUFBO0FBQVI7QUFHSTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7QUFEUjtBQUlJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FBRlI7QUFLSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBSFI7QUFNSTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBSlI7QUFPSTtFQUNJLFlBQUE7QUFMUiIsImZpbGUiOiJhY2NvdW50LWVkaXQtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY2NvdW50X2VkaXRfd3JhcHBlciB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gICAgICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIH1cclxuXHJcbiAgICBoMSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIH1cclxuXHJcbiAgICBsYWJlbHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7IFxyXG4gICAgICAgIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "JagH":
/*!**************************************************************************************************!*\
  !*** ./src/app/ui/instructor/assignment-edit-individual/assignment-edit-individual.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: AssignmentEditIndividualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentEditIndividualComponent", function() { return AssignmentEditIndividualComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment.prod */ "cxbk");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "JZFu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/crud.service */ "+/AT");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/header/header.component */ "aZ8m");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_dropzone_dropzone_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/components/dropzone/dropzone.component */ "lqgp");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-bootstrap-md */ "dbUT");
/* harmony import */ var _shared_components_input_select_input_select_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/components/input-select/input-select.component */ "S2nj");
/* harmony import */ var _shared_components_dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/components/dialog-box/dialog-box.component */ "PXIg");
















function AssignmentEditIndividualComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "app-input-select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("outputData", function AssignmentEditIndividualComponent_div_26_Template_app_input_select_outputData_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6.get_query_data_school($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("inputDataList", ctx_r0.schools)("name", ctx_r0.nameSchool);
} }
function AssignmentEditIndividualComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "app-input-select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("outputData", function AssignmentEditIndividualComponent_div_27_Template_app_input_select_outputData_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r8.get_query_data_instrument($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("inputDataList", ctx_r1.queriedInstruments)("name", ctx_r1.nameInstrument);
} }
function AssignmentEditIndividualComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "app-input-select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("outputData", function AssignmentEditIndividualComponent_div_28_Template_app_input_select_outputData_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r10.get_query_data_level($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("inputDataList", ctx_r2.queriedLevels)("name", ctx_r2.nameLevels);
} }
function AssignmentEditIndividualComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AssignmentEditIndividualComponent_div_29_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r12.add(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AssignmentEditIndividualComponent_button_35_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AssignmentEditIndividualComponent_button_35_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17); const i_r15 = ctx.index; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r16.removeButton(i_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " X ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const buttonText_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", buttonText_r14, " ");
} }
function AssignmentEditIndividualComponent_tr_62_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "app-dialog-box", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AssignmentEditIndividualComponent_tr_62_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const ele_r18 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r20.delete_file(ele_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ele_r18 = ctx.$implicit;
    const i_r19 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", i_r19 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ele_r18, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("actionType", ctx_r5.actionType)("fileLocationPath", ctx_r5.fileLocationPath)("fileName", ele_r18);
} }
class AssignmentEditIndividualComponent {
    constructor(route, router, crudservice, storage, 
    //private afStorage: AngularFireStorage,
    fb, toastr) {
        this.route = route;
        this.router = router;
        this.crudservice = crudservice;
        this.storage = storage;
        this.fb = fb;
        this.toastr = toastr;
        this.actionType = "instructorEditIndividual";
        this.instructorSchools = [];
        this.assignmentSchool = [];
        this.assignmentSchoolInstrumentLevel = [];
        this.assignmentFileNames = [];
        this.nameSchool = "School";
        this.nameInstrument = "Instrument";
        this.nameLevels = "Levels";
        this.schools = [];
        this.instruments = [];
        this.levels = [];
        this.queriedInstruments = [];
        this.queriedLevels = [];
        this.displaySchool = false;
        this.displayInstruments = false;
        this.displayLevels = false;
        this.acceptMultipleFiles = true;
        this.acceptedFileTypes = ".pdf,.mp3,.mp4";
        this.newFiles = []; // Contains the new files as object to upload, retrive from dropzone.
        this.newFilesNames = []; // Contains the new files names to upload to chck for duplicates.
        this.filesToBeDeleted = []; // contains the list of files to be deleted
        this.files = []; // contains all the files
        this.storage_bucket = "gs://" + _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].firebase.storageBucket;
        // validation, will be true when on load.
        this.isFileAcceptable = true;
        this.isNameAcceptable = true;
        this.isDescriptionAcceptable = true;
        this.isDueDateTimeAcceptable = true;
        this.isSchoolInstrumentLevelAcceptable = true;
    }
    ngOnInit() {
        this.get_account_information();
        this.get_assignment_information();
    }
    // Get the account information
    get_account_information() {
        if (sessionStorage.getItem('account') != null) {
            this.account = JSON.parse(sessionStorage.getItem('account'));
            this.accountDocId = this.account.docId;
            this.instructorSchools = this.account.school;
            this.get_instructor_assign_school_insturment_level(this.account.school_instrument_level);
        }
    }
    // Get the assignment information
    get_assignment_information() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const assignmentid = this.route.snapshot.paramMap.get('docId');
            this.assignmentDocId = assignmentid;
            const data = yield this.crudservice.readByDocId('assignments', assignmentid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).toPromise();
            this.assignment = data;
            this.assignmentDescription = this.assignment.description;
            this.convert_date_time(this.assignment.due_datetime);
            this.assignmentName = this.assignment.name;
            this.assignmentSchool = this.assignment.school;
            this.assignmentSchoolInstrumentLevel = this.assignment.school_instrument_level;
            //this.assignmentFileNames = this.assignment.file_names;
            this.get_assignment_files(assignmentid);
        });
    }
    // === === //
    // === INSTRUCTOR SCHOOL INSTRUMENT AND LEVEL === //
    // === === //
    get_instructor_assign_school_insturment_level(data) {
        this.schools = [];
        this.instruments = [];
        this.levels = [];
        this.displayInstruments = false;
        this.displayLevels = false;
        this.schools.push("none");
        for (var ele of data) {
            var tempsSchool = ele.split("_")[0];
            var tempInsturment = ele.split("_")[1];
            // ensure distinct values
            if (this.schools.indexOf(tempsSchool) == -1) {
                this.schools.push(tempsSchool);
            }
            if (this.instruments.indexOf(tempsSchool + "_" + tempInsturment) == -1) {
                this.instruments.push(tempsSchool + "_" + tempInsturment);
            }
            if (this.levels.indexOf(ele) == -1) {
                this.levels.push(ele);
            }
        }
        this.displaySchool = true;
    }
    get_query_data_school($event) {
        // change in school will refresh the instruments and levels
        if (this.selectedSchool != $event.value) {
            this.queriedInstruments = [];
            this.queriedLevels = [];
            this.selectedInstrument = "";
            this.selectedLevel = "";
        }
        this.queriedInstruments = [];
        this.selectedSchool = $event.value;
        if (this.selectedSchool.length == 0 || this.selectedSchool == "none") {
            this.displayInstruments = false;
            this.displayLevels = false;
        }
        else {
            this.displayInstruments = true;
            this.displayLevels = false;
            this.queriedInstruments.push("none");
            for (var ele of this.instruments) {
                var tempSchool = ele.split("_")[0];
                if (tempSchool == this.selectedSchool) {
                    this.queriedInstruments.push(ele.split("_")[1]);
                }
            }
            // console.log(this.queriedInstruments)
        }
    }
    get_query_data_instrument($event) {
        this.queriedLevels = [];
        this.selectedInstrument = $event.value;
        if (this.selectedInstrument.length == 0 || this.selectedInstrument == "none") {
            this.displayInstruments = true;
            this.displayLevels = false;
        }
        else {
            this.queriedLevels.push("none");
            this.displayInstruments = true;
            this.displayLevels = true;
            for (var ele of this.levels) {
                var tempSchoolInstrument = ele.split("_")[0] + "_" + ele.split("_")[1];
                var selectedSchoolInstrument = this.selectedSchool + "_" + this.selectedInstrument;
                if (tempSchoolInstrument == selectedSchoolInstrument) {
                    this.queriedLevels.push(ele.split("_")[2]);
                }
            }
        }
    }
    get_query_data_level($event) {
        this.selectedLevel = $event.value;
        this.toAddSchoolInstrumentLevel = this.selectedSchool + "_" + this.selectedInstrument + "_" + this.selectedLevel;
    }
    add() {
        if (this.selectedSchool == "none" || this.selectedInstrument == "none" || this.selectedLevel == "none") {
            this.toastr.error('Please ensure that you have selected and input!', '', { positionClass: 'toast-top-center' });
        }
        else {
            if (!this.assignmentSchoolInstrumentLevel.includes(this.toAddSchoolInstrumentLevel)) {
                this.assignmentSchoolInstrumentLevel.push(this.toAddSchoolInstrumentLevel);
            }
            else {
                this.toastr.error('Group has been added already!', '', { positionClass: 'toast-top-center' });
            }
        }
        this.displaySchool = false;
        this.get_instructor_assign_school_insturment_level(this.account.school_instrument_level);
    }
    // === === //
    // === TIME AND DATE === //
    // === === //
    convert_date_time(data) {
        //var month = data.toDate().getMonth()
        //var day = data.toDate().getDay()
        this.assignmentDueDateTime = data.toDate().toString().split(" ");
        this.assignmentDueDate = this.assignmentDueDateTime[3] + "-" + this.convert_date_abbreviation_to_number(this.assignmentDueDateTime[1]) + "-" + this.assignmentDueDateTime[2];
        this.assignmentDueTime = this.assignmentDueDateTime[4].split(":")[0] + ":" + this.assignmentDueDateTime[4].split(":")[1];
        //var dueDate = this.assignmentDueDateTime[3] + "-" + (month+1) + "-" + day
        //data.toDate().getMonth;
        //this.assignmentDueDate = dueDate;
        //this.assignmentDueDate = data.toDate().getFullYear() + "-" + data.toDate().getMonth() + "-" + data.toDate().getDay()
    }
    // Method: Convert date_abbreviation "Jan" or "January" to a number
    convert_date_abbreviation_to_number(data) {
        var num = "January___February__March_____April_____May_______June______July______August____September_October___November__December__".indexOf(data) / 10 + 1;
        var strNum = num.toString();
        if (strNum.length == 1) {
            strNum = "0" + strNum;
        }
        return strNum;
    }
    // === === //
    // === FILES == //
    // === === //
    // Get assignment files
    get_assignment_files(docid) {
        // console.log(docid)
        this.fileLocationPath = "/assignment/" + docid + "/";
        // console.log(this.assignment["file_names"])
        for (var ele of this.assignment["file_names"]) {
            this.assignmentFileNames.push(ele);
        }
    }
    // Method: Remove the file from the array, will not remove if request is canceled
    delete_file(data) {
        var index = this.assignmentFileNames.indexOf(data);
        this.filesToBeDeleted.push(this.assignmentFileNames[index]);
        this.assignmentFileNames.splice(index, 1);
        // Remove the file from S3 Stroge.
        //this.storage.storage.refFromURL(this.storage_bucket + this.fileLocationPath + data).delete();
        // Set updated data into new object
        //var updateData = this.update_data_assignment()
        // Update the assignment.
        //this.crudservice.update("assignments",this.assignmentDocId,updateData)
    }
    // Method: Remove the file from firestorge Stroge.
    delete_files_from_database() {
        if (this.filesToBeDeleted.length != 0) {
            // console.log("Deleteing ")
            for (var file of this.filesToBeDeleted) {
                // console.log(file)
                this.storage.storage.refFromURL(this.storage_bucket + this.fileLocationPath + file).delete();
            }
        }
    }
    addFiles($event) {
        for (var file of $event) {
            //if(!this.check_file_naming_convention(file["name"])){
            if (this.assignmentFileNames.indexOf(file["name"]) == -1) {
                this.newFiles.push(file);
            }
            else {
                this.showMessageError(file['name'] + " is already included in this assignment");
                this.isFileAcceptable = false;
            }
            /*} else {
              this.showMessageError(file['name'] + " has special characters, please remove this file")
              this.isFileAcceptable = false
            }*/
        }
        this.isFileAcceptable = true;
    }
    check_file_naming_convention(filename) {
        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/;
        // return true is there is special characters
        if (format.test(filename)) {
            return true;
        }
        // return false if no special characters
        return false;
    }
    add_files_to_database() {
        if (this.newFiles.length != 0) {
            for (var file of this.newFiles) {
                var location = 'assignment/' + this.assignmentDocId + "/" + file['name'];
                //console.log(location + file["name"])
                if (this.assignmentFileNames.indexOf(file['name']) == -1) {
                    this.assignmentFileNames.push(file['name']);
                    this.storage.upload(location, file);
                    this.showMessageSuccess("file Uploaded");
                }
                else {
                    this.showMessageError(file['name'] + " is already included");
                }
            }
        }
    }
    // remove school instrument level
    removeButton(i) {
        this.assignmentSchoolInstrumentLevel.splice(i, 1);
    }
    onSubmit() {
        this.validate_due_date_and_time();
        this.validate_name();
        this.validate_school_instrument_level();
        this.validate_description();
        if (this.isFileAcceptable && this.isNameAcceptable &&
            this.isSchoolInstrumentLevelAcceptable && this.isDueDateTimeAcceptable &&
            this.isDescriptionAcceptable) {
            var updateAssignmentDueDateandTime = firebase__WEBPACK_IMPORTED_MODULE_3__["default"].firestore.Timestamp.fromDate(new Date(this.assignmentDueDate + " " + this.assignmentDueTime));
            this.delete_files_from_database();
            this.add_files_to_database();
            let updateData = {
                //instructor_account_doc_id: this.assignment.instructor_account_doc_id,
                //created_datetime: this.assignment.created_datetime,
                description: this.assignmentDescription,
                due_datetime: updateAssignmentDueDateandTime,
                name: this.assignmentName,
                school_instrument_level: this.assignmentSchoolInstrumentLevel,
                file_names: this.assignmentFileNames
            };
            // Update the assignment.
            this.crudservice.update("assignments", this.assignmentDocId, updateData);
            this.router.navigate(['/instructor/assignment/edit']);
            this.showMessageSuccess(this.assignmentName + " has been updated!");
        }
        else {
            this.showMessageError(this.assignmentName + " attributes do not meet the requirements");
        }
    }
    back() {
        this.router.navigate(['/instructor/assignment/edit']);
    }
    validate_description() {
        if (this.assignmentDescription.length == 0 || this.assignmentDescription == "") {
            this.isDescriptionAcceptable = false;
            this.showMessageError(this.assignmentName + " description is empty, plase give context to the assignment");
        }
        else {
            this.isDescriptionAcceptable = true;
        }
    }
    validate_school_instrument_level() {
        if (this.assignmentSchoolInstrumentLevel.length == 0) {
            this.isSchoolInstrumentLevelAcceptable = false;
            this.showMessageError(this.assignmentName + " needs to have groups to be attached to this assignment.");
        }
        else {
            this.isSchoolInstrumentLevelAcceptable = true;
        }
    }
    validate_name() {
        if (this.assignmentName.length == 0 || this.assignmentName == "") {
            this.isNameAcceptable = false;
            this.showMessageError(this.assignmentName + " name is empty, plase give it a title");
        }
        else {
            this.isNameAcceptable = true;
        }
    }
    validate_due_date_and_time() {
        var updateAssignmentDueDateandTime = firebase__WEBPACK_IMPORTED_MODULE_3__["default"].firestore.Timestamp.fromDate(new Date(this.assignmentDueDate + " " + this.assignmentDueTime));
        var currentDateAndTime = firebase__WEBPACK_IMPORTED_MODULE_3__["default"].firestore.Timestamp.fromDate(new Date());
        if (currentDateAndTime > updateAssignmentDueDateandTime) {
            this.isDueDateTimeAcceptable = false;
            this.showMessageError(this.assignmentName + " due date & time has already pass");
        }
        else {
            this.isDueDateTimeAcceptable = true;
        }
    }
    showMessageSuccess(message) {
        if (message == null || message == "") {
            message = "Success!";
        }
        this.toastr.success(message);
    }
    showMessageError(message) {
        if (message == null || message == "") {
            message = "Error!";
        }
        this.toastr.error(message);
    }
}
AssignmentEditIndividualComponent.ɵfac = function AssignmentEditIndividualComponent_Factory(t) { return new (t || AssignmentEditIndividualComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_6__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"])); };
AssignmentEditIndividualComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AssignmentEditIndividualComponent, selectors: [["app-assignment-edit-individual"]], decls: 75, vars: 12, consts: [[1, "account-create-wrapper", "wrapper-padding"], [1, "container"], [1, "row"], [1, "form-outline", "col-8"], ["type", "text", "placeholder", "Title", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], [1, "form-outline", "col-4"], ["type", "date", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], ["type", "time", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], ["class", "form-outline col-3", 4, "ngIf"], [1, "form-outline", "col-12"], ["type", "button", "class", "btn btn-primary", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-12"], ["rows", "4", "cols", "80", 3, "ngModel", "ngModelChange"], [1, "col-6"], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], [3, "acceptMultipleFiles", "acceptedFileTypes", "fileEmit"], [1, "float-end"], ["type", "button", "mdbBtn", "", "color", "danger", "mdbWavesEffect", "", 3, "click"], ["type", "button", "mdbBtn", "", "color", "success", "mdbWavesEffect", "", 3, "click"], [1, "form-outline", "col-3"], ["id", "testSchool", 3, "inputDataList", "name", "outputData"], [3, "inputDataList", "name", "outputData"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "badge", "bg-danger", "ms-2"], ["scope", "row"], [3, "actionType", "fileLocationPath", "fileName"]], template: function AssignmentEditIndividualComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Title: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Title: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AssignmentEditIndividualComponent_Template_input_ngModelChange_9_listener($event) { return ctx.assignmentName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Due Date and Time: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, " Due Date: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AssignmentEditIndividualComponent_Template_input_ngModelChange_17_listener($event) { return ctx.assignmentDueDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, " Due Time: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AssignmentEditIndividualComponent_Template_input_ngModelChange_21_listener($event) { return ctx.assignmentDueTime = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " School / Instrument / Level: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, AssignmentEditIndividualComponent_div_26_Template, 2, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, AssignmentEditIndividualComponent_div_27_Template, 2, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, AssignmentEditIndividualComponent_div_28_Template, 2, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, AssignmentEditIndividualComponent_div_29_Template, 3, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, " Selected: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, AssignmentEditIndividualComponent_button_35_Template, 4, 1, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, " Description: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AssignmentEditIndividualComponent_Template_textarea_ngModelChange_41_listener($event) { return ctx.assignmentDescription = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, " Files: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, " Current Files: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, " #");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, " File Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, " View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, " Remove ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](62, AssignmentEditIndividualComponent_tr_62_Template, 11, 5, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, " Upload New Files: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "app-dropzone", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("fileEmit", function AssignmentEditIndividualComponent_Template_app_dropzone_fileEmit_66_listener($event) { return ctx.addFiles($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AssignmentEditIndividualComponent_Template_button_click_70_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AssignmentEditIndividualComponent_Template_button_click_72_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, " Update ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](74, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.assignmentName);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.assignmentDueDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.assignmentDueTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.displaySchool);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.displayInstruments);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.displayLevels);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.displayLevels);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.assignmentSchoolInstrumentLevel);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.assignmentDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.assignmentFileNames);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("acceptMultipleFiles", ctx.acceptMultipleFiles)("acceptedFileTypes", ctx.acceptedFileTypes);
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _shared_components_dropzone_dropzone_component__WEBPACK_IMPORTED_MODULE_12__["DropzoneComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_13__["MdbBtnDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_13__["WavesDirective"], _shared_components_input_select_input_select_component__WEBPACK_IMPORTED_MODULE_14__["InputSelectComponent"], _shared_components_dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_15__["DialogBoxComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc3NpZ25tZW50LWVkaXQtaW5kaXZpZHVhbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "OdCY":
/*!****************************************************************************!*\
  !*** ./src/app/ui/instructor/instructor-home/instructor-home.component.ts ***!
  \****************************************************************************/
/*! exports provided: InstructorHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructorHomeComponent", function() { return InstructorHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/header/header.component */ "aZ8m");
/* harmony import */ var _shared_components_cards_cards_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/cards/cards.component */ "kkAW");



class InstructorHomeComponent {
    constructor() {
        this.newTitle = "New Assignment";
        this.editTitle = "Edit Assignment";
        this.markTitle = "Mark Assignment";
        this.newDescription = "Create new assignments for students to complete.";
        this.editDescription = "Edit created assignments' deadline, attachments and more.";
        this.markDescription = "Mark or re-mark assignment submissions by students.";
        this.newLink = "instructor/assignment/create";
        this.editLink = "instructor/assignment/edit";
        this.markLink = "instructor/assignment/mark";
    }
    ngOnInit() {
    }
}
InstructorHomeComponent.ɵfac = function InstructorHomeComponent_Factory(t) { return new (t || InstructorHomeComponent)(); };
InstructorHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InstructorHomeComponent, selectors: [["app-instructor-home"]], decls: 10, vars: 9, consts: [[1, "container"], [1, "row"], [1, "col"], [3, "title", "description", "href"]], template: function InstructorHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-cards", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-cards", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-cards", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.newTitle)("description", ctx.newDescription)("href", ctx.newLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.editTitle)("description", ctx.editDescription)("href", ctx.editLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.markTitle)("description", ctx.markDescription)("href", ctx.markLink);
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _shared_components_cards_cards_component__WEBPACK_IMPORTED_MODULE_2__["CardsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnN0cnVjdG9yLWhvbWUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "PXIg":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/dialog-box/dialog-box.component.ts ***!
  \**********************************************************************/
/*! exports provided: DialogBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogBoxComponent", function() { return DialogBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment.prod */ "cxbk");
/* harmony import */ var src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/crud.service */ "+/AT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-bootstrap-md */ "dbUT");











function DialogBoxComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogBoxComponent_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); return _r5.show(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DialogBoxComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogBoxComponent_button_1_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.send_to_parent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DialogBoxComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogBoxComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); return _r5.show(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DialogBoxComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogBoxComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); return _r5.show(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DialogBoxComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogBoxComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.acquire_file(); })("click", function DialogBoxComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); return _r5.show(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DialogBoxComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Delete User ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogBoxComponent_div_7_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); return _r5.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "mdb-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Are you sure you would want to delete this user \"");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\"?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "This action cannot be undone.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogBoxComponent_div_7_Template_a_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.click_to_delete_account(); })("click", function DialogBoxComponent_div_7_Template_a_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); return _r5.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogBoxComponent_div_7_Template_a_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); return _r5.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.username);
} }
function DialogBoxComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Edit User ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogBoxComponent_div_8_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); return _r5.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "mdb-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Are you sure you would want to modify this user ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " ? this action cannot be undo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogBoxComponent_div_8_Template_a_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r29.click_to_delete_assignment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Confirm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "mdb-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogBoxComponent_div_8_Template_a_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); return _r5.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r7.username, " ");
} }
function DialogBoxComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " view instructor wages ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogBoxComponent_div_9_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); return _r5.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "mdb-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Would you like to pay the instructor ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogBoxComponent_div_9_Template_a_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r33.click_to_view(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Pay Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "mdb-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogBoxComponent_div_9_Template_a_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); return _r5.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DialogBoxComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Delete Assignment ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogBoxComponent_div_10_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); return _r5.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "mdb-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Are you sure you would want to delete this assignment titled \"");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\"? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "This action cannot be undone.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogBoxComponent_div_10_Template_a_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r37.click_to_delete_assignment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "mdb-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogBoxComponent_div_10_Template_a_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); return _r5.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.assignmentName);
} }
function DialogBoxComponent_div_11_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "embed", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r39.returnSafeURL(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeResourceUrl"]);
} }
function DialogBoxComponent_div_11_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "video", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r40.videoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function DialogBoxComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " View File ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogBoxComponent_div_11_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r42); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); return _r5.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DialogBoxComponent_div_11_div_10_Template, 2, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, DialogBoxComponent_div_11_div_11_Template, 3, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogBoxComponent_div_11_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r42); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); return _r5.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.fileType == "pdf");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.fileType == "mp4");
} }
class DialogBoxComponent {
    constructor(crudservice, router, storage, ds, toastr) {
        this.crudservice = crudservice;
        this.router = router;
        this.storage = storage;
        this.ds = ds;
        this.toastr = toastr;
        this.storage_bucket = 'gs://' + _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].firebase.storageBucket;
        this.editEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.triggerUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.contenteditable = new Boolean;
    }
    ngOnInit() {
    }
    // Modal //
    onOpen(event) {
        console.log(event);
    }
    click_to_delete_account() {
        console.log('User ' + this.username + ' has be hidden!');
        const data = {
            is_delete: true,
            password: this.genPassword()
        };
        this.crudservice.update('accounts', this.docid, data);
        this.showMessageSuccess('The following user: ' + this.username + ' account has been successfully deleted');
        this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/admin/account/delete']);
        });
    }
    click_to_delete_assignment() {
        console.log('Assignment deleted!');
        console.log(this.docid);
        this.crudservice.delete('assignments', this.docid);
        this.showMessageSuccess('The following assignment, title: ' + this.assignmentName + ' has been successfully deleted');
        this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/instructor/assignment/edit']);
        });
    }
    acquire_file() {
        const arr = this.fileName.split('.');
        this.fileType = arr[arr.length - 1];
        console.log(this.fileType);
        if (this.fileType === 'pdf') {
            this.getPDF();
        }
        if (this.fileType === 'mp4') {
            this.getVideo();
        }
    }
    getPDF() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const pdf = this.storage_bucket + this.fileLocationPath + this.fileName;
            const ref = this.storage.refFromURL(pdf);
            // return this.pdfUrl = ref.getDownloadURL().subscribe(data => {this.pdfUrl = data})
            this.pdfUrl = yield ref.getDownloadURL().subscribe(data => {
                this.pdfUrl = data;
            });
            this.pdfSafeUrl = this.ds.bypassSecurityTrustResourceUrl(this.pdfUrl);
            console.log(this.pdfSafeUrl);
            return this.pdfSafeUrl;
        });
    }
    getVideo() {
        const video = this.storage_bucket + this.fileLocationPath + this.fileName;
        const ref = this.storage.refFromURL(video);
        ref.getDownloadURL().subscribe(data => { this.videoUrl = data; });
        return this.videoUrl = ref.getDownloadURL().subscribe(data => { this.videoUrl = data; });
        // console.log(ref.getDownloadURL().subscribe(data => {this.videoUrl = data}))
        // console.log(this.videoUrl)
    }
    returnSafeURL() {
        return this.ds.bypassSecurityTrustResourceUrl(this.pdfUrl);
    }
    click_to_view() {
        console.log('View');
    }
    send_to_parent(value) {
        this.editEvent.emit(value);
    }
    make_true($event) {
        this.triggerUpdate.emit($event);
        this.send_to_parent($event);
    }
    make_false($event) {
        this.send_to_parent($event);
    }
    // Method: auto generate a radnom password
    genPassword() {
        const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let password = '';
        for (let i = 0; i < 20; i++) {
            password += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
        }
        return password;
    }
    showMessageSuccess(message) {
        if (message == null || message == '') {
            message = 'Success!';
        }
        this.toastr.success(message);
    }
    showMessageError(message) {
        if (message == null || message == '') {
            message = 'Error!';
        }
        this.toastr.error(message);
    }
}
DialogBoxComponent.ɵfac = function DialogBoxComponent_Factory(t) { return new (t || DialogBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"])); };
DialogBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DialogBoxComponent, selectors: [["app-dialog-box"]], inputs: { actionType: "actionType", docid: "docid", username: "username", assignmentName: "assignmentName", fileLocationPath: "fileLocationPath", fileName: "fileName", contenteditable: "contenteditable" }, outputs: { editEvent: "editEvent", triggerUpdate: "triggerUpdate" }, decls: 12, vars: 10, consts: [["type", "button", "mdbBtn", "", "color", "danger", "rounded", "true", "data-toggle", "modal", "data-target", "#basicExample", "mdbWavesEffect", "", 3, "click", 4, "ngIf"], ["type", "button", "mdbBtn", "", "color", "primary", "rounded", "true", "data-toggle", "modal", "data-target", "#basicExample", "mdbWavesEffect", "", 3, "click", 4, "ngIf"], ["type", "button", "mdbBtn", "", "color", "info", "rounded", "true", "data-toggle", "modal", "data-target", "#basicExample", "mdbWavesEffect", "", 3, "click", 4, "ngIf"], ["mdbModal", "", "id", "frameModalTop", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myModalLabel", "aria-hidden", "true", 1, "modal", "fade", 3, "open"], ["frame", "mdbModal"], ["class", "modal-dialog modal-notify modal-danger", "role", "document", 4, "ngIf"], ["class", "modal-dialog modal-notify modal-info", "role", "document", 4, "ngIf"], ["class", "modal-dialog modal-notify modal-primary", "role", "document", 4, "ngIf"], ["type", "button", "mdbBtn", "", "color", "danger", "rounded", "true", "data-toggle", "modal", "data-target", "#basicExample", "mdbWavesEffect", "", 3, "click"], ["type", "button", "mdbBtn", "", "color", "primary", "rounded", "true", "data-toggle", "modal", "data-target", "#basicExample", "mdbWavesEffect", "", 3, "click"], ["type", "button", "mdbBtn", "", "color", "info", "rounded", "true", "data-toggle", "modal", "data-target", "#basicExample", "mdbWavesEffect", "", 3, "click"], ["role", "document", 1, "modal-dialog", "modal-notify", "modal-danger"], [1, "modal-content"], [1, "modal-header"], [1, "heading", "lead"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true", 1, "white-text"], [1, "modal-body"], [1, "text-center"], ["fas", "", "icon", "user-alt-slash", "size", "4x", 1, "mb-3", "animated", "rotateIn"], [1, "modal-footer", "justify-content-center"], ["type", "button", "mdbBtn", "", "color", "danger", "mdbWavesEffect", "", 1, "waves-light", 3, "click"], ["type", "button", "mdbBtn", "", "color", "primary", "outline", "true", "mdbWavesEffect", "", "data-dismiss", "modal", 1, "waves-effect", 3, "click"], ["far", "", "icon", "times-circle", 1, "ml-1"], ["role", "document", 1, "modal-dialog", "modal-notify", "modal-info"], ["type", "button", "mdbBtn", "", "color", "info", "mdbWavesEffect", "", 1, "waves-light", 3, "click"], ["type", "button", "mdbBtn", "", "color", "success", "outline", "true", "mdbWavesEffect", "", "data-dismiss", "modal", 1, "waves-effect", 3, "click"], ["fas", "", "icon", "comment-slash", "size", "4x", 1, "mb-3", "animated", "rotateIn"], ["role", "document", 1, "modal-dialog", "modal-notify", "modal-primary"], [4, "ngIf"], ["type", "application/pdf", 2, "width", "100%", "height", "300px", 3, "src"], [1, "embed-responsive", "embed-responsive-16by9"], ["width", "320", "height", "240", "controls", "", "type", "video/mp4", 3, "src"]], template: function DialogBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DialogBoxComponent_button_0_Template, 2, 0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DialogBoxComponent_button_1_Template, 2, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DialogBoxComponent_button_2_Template, 2, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DialogBoxComponent_button_3_Template, 2, 0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DialogBoxComponent_button_4_Template, 2, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("open", function DialogBoxComponent_Template_div_open_5_listener($event) { return ctx.onOpen($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, DialogBoxComponent_div_7_Template, 24, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DialogBoxComponent_div_8_Template, 23, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, DialogBoxComponent_div_9_Template, 19, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DialogBoxComponent_div_10_Template, 25, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, DialogBoxComponent_div_11_Template, 15, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.actionType == "accountDelete");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.actionType == "accountEdit" && ctx.contenteditable == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.actionType == "wage");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.actionType == "instructorAssignmentEdit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.actionType == "instructorEditIndividual");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.actionType == "accountDelete");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.actionType == "accountEdit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.actionType == "wage");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.actionType == "instructorAssignmentEdit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.actionType == "instructorEditIndividual");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["ModalDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["MdbBtnDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["WavesDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["FasDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["FarDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWFsb2ctYm94LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "QuZi":
/*!**************************************************************************************!*\
  !*** ./src/app/ui/home/update_password/update-password/update-password.component.ts ***!
  \**************************************************************************************/
/*! exports provided: UpdatePasswordComponent, MyErrorStateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePasswordComponent", function() { return UpdatePasswordComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/crud.service */ "+/AT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");









function UpdatePasswordComponent_h1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Synchrony Login Page ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UpdatePasswordComponent_h1_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Update Password Page");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UpdatePasswordComponent_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Username cannot be blank! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UpdatePasswordComponent_mat_error_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Password cannot be blank! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UpdatePasswordComponent_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Incorrect Username or Password! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UpdatePasswordComponent_div_16_mat_error_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " New Password must be at least 5 characters long! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UpdatePasswordComponent_div_16_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " New Password cannot be blank! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UpdatePasswordComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "New Password: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, UpdatePasswordComponent_div_16_mat_error_4_Template, 2, 0, "mat-error", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, UpdatePasswordComponent_div_16_mat_error_5_Template, 2, 0, "mat-error", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Confirm Password:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.isSubmitClicked && (ctx_r5.newPassword.errors == null ? null : ctx_r5.newPassword.errors.minlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.isSubmitClicked && (ctx_r5.newPassword.errors == null ? null : ctx_r5.newPassword.errors.required));
} }
function UpdatePasswordComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Passwords do not match! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UpdatePasswordComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Update Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UpdatePasswordComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class UpdatePasswordComponent {
    constructor(fb, crudservice, router) {
        this.fb = fb;
        this.crudservice = crudservice;
        this.router = router;
        this.loginPage = false;
        this.updatePasswordPage = true;
        this.isSubmitClicked = false;
        this.isValidUsernamePasswordCombi = true;
        this.passwordMatch = false;
        this.matcher = new MyErrorStateMatcher();
        this.firstTime = true;
        // Custom Validator for password matching
        this.checkPasswords = (group) => {
            let pass = group.get('newPassword').value;
            let confirmPass = group.get('confirmPassword').value;
            return pass === confirmPass ? null : { notSame: true };
        };
    }
    ngOnInit() {
        // Initialize formbuilder
        this.initForm();
    }
    initForm() {
        this.loginForm = this.fb.group({
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            newPassword: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]],
            confirmPassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        }, { validators: this.checkPasswords });
        // console.log(this.loginForm);
    }
    // Retrieve username
    get username() {
        return this.loginForm.get('username');
    }
    // Retrieve password
    get password() {
        return this.loginForm.get('password');
    }
    get newPassword() {
        return this.loginForm.get('newPassword');
    }
    get confirmPassword() {
        return this.loginForm.get('confirmPassword');
    }
    onSubmit() {
        // Submit was clicked. Form validation will take place
        this.isSubmitClicked = true;
        // Validate account and password match
        if (this.loginForm.valid) {
            // Form validation complete. Update password
            // console.log("Form Validated ");
            // Login Validation only happens once
            if (this.firstTime) {
                // console.log("Login Validation triggered!");
                this.firstTime = false;
                // Validate login
                this.crudservice.read("accounts", "username", "==", this.loginForm.value.username, "password", "==", this.loginForm.value.password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe((account) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    // console.log(account);
                    if (account.length == 0) {
                        // username and password does not exist on the database
                        // console.log("Login denied");
                        this.isValidUsernamePasswordCombi = false;
                    }
                    else {
                        // Login is successful
                        // console.log("Login successful");
                        this.isValidUsernamePasswordCombi = true;
                        this.account = account[0];
                        if (account[0].is_delete) {
                            alert("Account has been deactivated. Please seek the admin to reset your account");
                            this.router.navigate(["/login"]);
                            return;
                        }
                        // Update password
                        this.account.password = this.loginForm.value.newPassword;
                        this.account.first_login = false;
                        // console.log(this.account);
                        this.crudservice.update("accounts", this.account.docId, this.account);
                        alert("Update successful! Please login again");
                        this.router.navigate(["/login"]);
                        return;
                    }
                }));
            }
            else {
                // console.log("Update rejected");
            }
        }
    }
}
UpdatePasswordComponent.ɵfac = function UpdatePasswordComponent_Factory(t) { return new (t || UpdatePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
UpdatePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: UpdatePasswordComponent, selectors: [["app-update-password"]], decls: 20, vars: 10, consts: [[1, "account-create-wrapper"], ["src", "../../../../assets/images/Logo.png", "width", "400", "height", "400", 1, "center"], [4, "ngIf"], [1, "container"], [3, "formGroup", "ngSubmit"], ["for", "username"], ["type", "text", "formControlName", "username"], ["for", "password"], ["type", "password", "formControlName", "password"], ["for", "newPassword"], ["type", "password", "formControlName", "newPassword"], ["for", "confirmPassword"], ["type", "password", "formControlName", "confirmPassword"], ["type", "submit"]], template: function UpdatePasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, UpdatePasswordComponent_h1_2_Template, 2, 0, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, UpdatePasswordComponent_h1_3_Template, 2, 0, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function UpdatePasswordComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Username: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, UpdatePasswordComponent_mat_error_9_Template, 2, 0, "mat-error", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Password: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, UpdatePasswordComponent_mat_error_14_Template, 3, 0, "mat-error", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, UpdatePasswordComponent_mat_error_15_Template, 2, 0, "mat-error", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, UpdatePasswordComponent_div_16_Template, 10, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, UpdatePasswordComponent_mat_error_17_Template, 2, 0, "mat-error", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, UpdatePasswordComponent_div_18_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, UpdatePasswordComponent_div_19_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.updatePasswordPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isSubmitClicked && (ctx.username.errors == null ? null : ctx.username.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isSubmitClicked && (ctx.password.errors == null ? null : ctx.password.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isSubmitClicked && !ctx.isValidUsernamePasswordCombi);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.updatePasswordPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isSubmitClicked && ctx.loginForm.hasError("notSame"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.updatePasswordPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginPage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"]], styles: [".account-create-wrapper[_ngcontent-%COMP%] {\n  \n}\n.account-create-wrapper[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: auto;\n}\n.account-create-wrapper[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], .account-create-wrapper[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n}\n.account-create-wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.account-create-wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 40px;\n}\n.account-create-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding-top: 10px;\n}\n.account-create-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: blue;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n}\n.account-create-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUEwQ0ksbUNBQUE7QUF4Q0o7QUFBSTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUVSO0FBQ0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0FBQ047QUFFSTtFQUNFLGFBQUE7QUFBTjtBQUdJO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBRE47QUFJSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUZOO0FBS0k7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFITjtBQU9JO0VBQ0UsWUFBQTtBQUxOIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjY291bnQtY3JlYXRlLXdyYXBwZXJ7XHJcblxyXG4gICAgLmNlbnRlciB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICB9XHJcblxyXG4gICAgaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaDEge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIH1cclxuXHJcbiAgICBsYWJlbHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICAgICAgbWFyZ2luOiA4cHggMDtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIEFkZCBhIGhvdmVyIGVmZmVjdCBmb3IgYnV0dG9ucyAqL1xyXG4gICAgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
class MyErrorStateMatcher {
    isErrorState(control, form) {
        var _a, _b, _c;
        const invalidCtrl = !!((control === null || control === void 0 ? void 0 : control.invalid) && ((_a = control === null || control === void 0 ? void 0 : control.parent) === null || _a === void 0 ? void 0 : _a.dirty));
        const invalidParent = !!(((_b = control === null || control === void 0 ? void 0 : control.parent) === null || _b === void 0 ? void 0 : _b.invalid) && ((_c = control === null || control === void 0 ? void 0 : control.parent) === null || _c === void 0 ? void 0 : _c.dirty));
        return invalidCtrl || invalidParent;
    }
}


/***/ }),

/***/ "RAkc":
/*!*****************************************************************!*\
  !*** ./src/app/ui/admin/account-edit/account-edit.component.ts ***!
  \*****************************************************************/
/*! exports provided: AccountEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountEditComponent", function() { return AccountEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/crud.service */ "+/AT");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/header/header.component */ "aZ8m");
/* harmony import */ var _shared_components_input_dropdown_select_input_dropdown_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/input-dropdown-select/input-dropdown-select.component */ "x/FY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/table/table.component */ "Xv+k");








function AccountEditComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "app-input-dropdown-select", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("outputData", function AccountEditComponent_ng_container_7_Template_app_input_dropdown_select_outputData_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.get_query_data_sub_instruments($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("inputDataList", ctx_r0.sub_instrument)("name", ctx_r0.nameInstrument);
} }
function AccountEditComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "app-input-dropdown-select", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("outputData", function AccountEditComponent_ng_container_8_Template_app_input_dropdown_select_outputData_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.get_query_data_sub_levels($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("inputDataList", ctx_r1.sub_levels)("name", ctx_r1.nameLevels);
} }
class AccountEditComponent {
    constructor(crudservice) {
        this.crudservice = crudservice;
        this.accounts = [];
        this.displayedColumns = ['username', 'first_name', 'last_name', 'role', 'school', 'school_instrument_level', 'action'];
        this.actionType = "accountEdit";
        // === set filter data === //
        //schools:string[] = [];
        this.school_instrument_levels = [];
        //groups:string[] = [];
        //instruments:string[] = [];
        //levels:string[] = [];
        this.roles = ["admin", "instructor", "student"];
        this.sub_schools = [];
        this.sub_instrument = [];
        this.sub_levels = [];
        this.sub_display_instrument = false;
        this.sub_display_levels = false;
        // === set filter name === //
        this.nameSchool = "School";
        //nameGroup:string = "Group"
        this.nameRole = "Role";
        this.nameSchoolInstrumentLevels = "School Instrument Levels";
        this.nameInstrument = "Instrument";
        this.nameLevels = "Levels";
        // === get filter data === //
        this.selectRoles = [];
        this.selectSchools = [];
        //selectGroups:string[] = [];
        this.selectGroups = [];
        //selectSchoolInstrumentLevels:string[] = [];
        this.select_Combine_SchoolInstrumentLevels = [];
        this.selectSubSchools = [];
        this.selectSubInstruments = [];
        this.selectSubLevels = [];
    }
    ngOnInit() {
        this.retrieve_all_accounts();
        this.accountDetail = JSON.parse(sessionStorage.getItem("account"));
        this.accountUsername = this.accountDetail.username;
    }
    ngAfterViewInit() {
        // empty
    }
    retrieve_all_accounts() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = yield this.crudservice.read('accounts').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).toPromise();
            if (data != undefined || data != null) {
                this.dataSource = data;
                for (var ele of data) {
                    try {
                        this.create_account(ele);
                        //var schoolgrp = ele["school_group"].split(",")
                        //var school = ele["school"].split(",")
                        //var school = ele["school"]
                        var school_instrument_level = ele["school_instrument_level"];
                        //this.set_distint_school_levels(ele["levels"])
                        //this.set_distint_school_instruments(ele["instruments"])
                        // get distint school groups
                        //this.set_distint_school_group(schoolgrp);
                        // get distint school
                        //this.set_distint_school(school);
                        this.set_distint_school_instrument_level(school_instrument_level);
                    }
                    catch (e) {
                        // console.log("something wrong with the data! check the database!")
                    }
                }
                this.dataSource = this.accounts;
            }
        });
    }
    create_account(data) {
        if (data.school[0] == "-") {
            data.school[0] = "NA";
        }
        if (data.school_instrument_level[0] == "-") {
            data.school_instrument_level[0] = "NA";
        }
        var account = {
            docId: data.docId,
            username: data.username,
            role: data.role,
            school: data.school,
            school_instrument_level: data.school_instrument_level,
            first_name: data.first_name,
            last_name: data.last_name,
            password: data.password,
            first_login: data.first_login,
            is_delete: data.is_delete
        };
        this.accounts.push(account);
    }
    // Method:
    set_distint_school_instrument_level(data) {
        for (var dataSchoolInstrumentLevel of data) {
            var sub_query = dataSchoolInstrumentLevel.split("_");
            var school = sub_query[0];
            var instrument = sub_query[1];
            var level = sub_query[2];
            if (this.sub_schools.indexOf(school) == -1) {
                this.sub_schools.push(school);
            }
            if (this.sub_instrument.indexOf(instrument) == -1) {
                this.sub_instrument.push(instrument);
            }
            if (this.sub_levels.indexOf(level) == -1) {
                this.sub_levels.push(level);
            }
        }
    }
    // == get filter == //
    get_query_data_roles($event) {
        this.selectRoles = $event.value;
        this.query_table_with_filter();
    }
    /*
    get_query_data_schools($event:any):void{
      this.selectSchools = $event.value
      this.query_table_with_filter()
    } */
    /*
    get_query_data_groups($event:any):void{
      this.selectGroups = $event.value
      this.query_table_with_filter()
    } */
    /*
    get_query_data_school_instrument_level($event:any):void{
      this.selectSchools = $event.value
      this.query_table_with_filter()
    } */
    get_query_data_sub_schools($event) {
        this.selectSubSchools = $event.value;
        if (this.selectSubSchools.length == 0) {
            this.sub_display_instrument = false;
            this.sub_display_levels = false;
        }
        else {
            this.sub_display_instrument = true;
            this.sub_display_levels = false;
        }
    }
    get_query_data_sub_instruments($event) {
        this.selectSubInstruments = $event.value;
        if (this.selectSubInstruments.length == 0) {
            this.sub_display_levels = false;
        }
        else {
            this.sub_display_levels = true;
        }
    }
    get_query_data_sub_levels($event) {
        this.selectSubLevels = $event.value;
        this.combine_querry_search_data();
        this.query_table_with_filter();
    }
    // Method: Combine all the permutation of the sub Strings of School, Instrument and levels
    combine_querry_search_data() {
        // console.log(this.selectSubSchools)
        // console.log(this.selectSubInstruments)
        // console.log(this.selectSubLevels)
        this.select_Combine_SchoolInstrumentLevels = [];
        for (var eleSchool of this.selectSubSchools) {
            // console.log(eleSchool)
            for (var eleInstrument of this.selectSubInstruments) {
                for (var eleLevel of this.selectSubLevels) {
                    var query = eleSchool + "_" + eleInstrument + "_" + eleLevel;
                    // console.log(query);
                    if (this.select_Combine_SchoolInstrumentLevels.indexOf(query) == -1) {
                        this.select_Combine_SchoolInstrumentLevels.push(query);
                    }
                }
            }
        }
        //console.log(this.select_Combine_SchoolInstrumentLevels)
    }
    // Method:
    query_table_with_filter() {
        var result = [];
        result = this.accounts;
        if (this.selectRoles.length != 0) {
            result = this.filtering_by_role(result, this.selectRoles);
        }
        if (this.select_Combine_SchoolInstrumentLevels.length != 0) {
            result = this.filtering_by_school_instrument_levels(result, this.select_Combine_SchoolInstrumentLevels);
        }
        /*
        if(this.selectSchools.length!=0){
          result = this.filtering_by_school(result, this.selectSchools)
        } */
        //console.log(result)
        /*
        if(this.selectSchoolInstrumentLevels.length!=0){
          result = this.filtering(result, this.selectSchoolInstrumentLevels)
        } */
        /*
        if(this.selectGroups.length!=0){
          result = this.filtering(result, this.selectGroups)
        } */
        /*
        if(this.selectRoles.length ==0 && this.selectSchools.length ==0 && this.selectGroups.length ==0){
          result = this.accounts;
        }
        */
        if (this.selectRoles.length == 0 && this.select_Combine_SchoolInstrumentLevels.length == 0) {
            result = this.accounts;
        }
        this.dataSource = result;
        /*
        const data = await this.crudservice.read('accounts',"role","in",this.selectRoles).pipe(first()).toPromise();
        */
        /*
        this.crudservice.read("accounts",
          "role","in",this.selectRoles,
          "school","array-contains-any",this.selectSchools,
          "school_group","array-contains-any",this.selectGroups).subscribe(async (data:any) => {
          this.dataSource = data
        }) */
    }
    filtering_by_role(result, filter) {
        var filterResult = [];
        var exist = false;
        for (var ele of result) {
            for (var role of filter) {
                if (ele.role == role) {
                    for (var eleResult of filterResult) {
                        if (eleResult.docId == ele.docId) {
                            exist = true;
                        }
                    }
                    if (!exist) {
                        filterResult.push(ele);
                        exist = false;
                    }
                }
            }
        }
        return filterResult;
    }
    // Brute force method
    filtering_by_school_instrument_levels(result, filter) {
        var filterResult = [];
        var exist = false;
        for (var ele of result) {
            var school_instrument_levels = ele.school_instrument_level;
            for (var query of filter) {
                for (var school_instrument_level of school_instrument_levels) {
                    if (school_instrument_level == query) {
                        for (var eleResult of filterResult) {
                            if (eleResult.docId == ele.docId) {
                                exist = true;
                            }
                        }
                        if (!exist) {
                            filterResult.push(ele);
                            exist = false;
                        }
                    }
                }
            }
        }
        return filterResult;
    }
    edit_doc_id($event) {
        // console.log("edit_doc_id activated");
        // [0] = username, [1] = first_name, [2] = last_name, [3] = role
        // check if any of these are null before passing through crudservice.update
        // if all are null, crudservice.update does not take place and return a message
        // Creating data object
        let data = {};
        for (let i = 0; i < $event.length; i++) {
            if ($event[i] != undefined) {
                // use switch() function to create the data object
                switch (i) {
                    case 0:
                        data['username'] = $event[i];
                        break;
                    case 1:
                        data['first_name'] = $event[i];
                        break;
                    case 2:
                        data['last_name'] = $event[i];
                        break;
                    case 3:
                        data['role'] = $event[i];
                        break;
                }
            }
            else {
                continue;
            }
        }
        if (data == {}) {
            // console.log("No changes were made");
        }
        else {
            try {
                this.crudservice.update("accounts", this.accounts[0].docId, data);
                var result = [];
                for (var ele of this.dataSource) {
                    result.push(ele);
                }
                this.dataSource = result;
                // console.log("Update is successful!");
                // send request back to dialog-box component to return to edit form
            }
            catch (error) {
                // console.log(error);
            }
        }
        // turn contenteditable off!!!!
    }
}
AccountEditComponent.ɵfac = function AccountEditComponent_Factory(t) { return new (t || AccountEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"])); };
AccountEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AccountEditComponent, selectors: [["app-account-edit"]], decls: 11, vars: 10, consts: [[1, "account-create-wrapper", "wrapper-padding"], [1, "mb-3"], [3, "inputDataList", "name", "outputData"], [4, "ngIf"], [3, "dataSource", "displayedColumns", "actionType", "accountUsername", "triggerUpdate"]], template: function AccountEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Edit Account & Grouping");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "app-input-dropdown-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("outputData", function AccountEditComponent_Template_app_input_dropdown_select_outputData_4_listener($event) { return ctx.get_query_data_roles($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "app-input-dropdown-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("outputData", function AccountEditComponent_Template_app_input_dropdown_select_outputData_6_listener($event) { return ctx.get_query_data_sub_schools($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AccountEditComponent_ng_container_7_Template, 2, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AccountEditComponent_ng_container_8_Template, 2, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "app-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("triggerUpdate", function AccountEditComponent_Template_app_table_triggerUpdate_10_listener($event) { return ctx.edit_doc_id($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("inputDataList", ctx.roles)("name", ctx.nameRole);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("inputDataList", ctx.sub_schools)("name", ctx.nameSchool);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.sub_display_instrument);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.sub_display_levels);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns)("actionType", ctx.actionType)("accountUsername", ctx.accountUsername);
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _shared_components_input_dropdown_select_input_dropdown_select_component__WEBPACK_IMPORTED_MODULE_5__["InputDropdownSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_7__["TableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LWVkaXQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "S2nj":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/input-select/input-select.component.ts ***!
  \**************************************************************************/
/*! exports provided: InputSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputSelectComponent", function() { return InputSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "FKr1");






function InputSelectComponent_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ele_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ele_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ele_r1);
} }
class InputSelectComponent {
    constructor() {
        this.outputData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        //empty
    }
    // Method: get the dropdown list values and prepare to sent to parent
    selected_value(event) {
        this.selectedData = {
            value: event.value,
        };
        this.sentToParent();
    }
    // Method: sent data to the parent 
    sentToParent() {
        this.outputData.emit(this.selectedData);
    }
}
InputSelectComponent.ɵfac = function InputSelectComponent_Factory(t) { return new (t || InputSelectComponent)(); };
InputSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputSelectComponent, selectors: [["app-input-select"]], inputs: { inputDataList: "inputDataList", name: "name" }, outputs: { outputData: "outputData" }, decls: 5, vars: 2, consts: [["appearance", "fill"], ["placeholder", "inputDataList", "clearButton", "", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function InputSelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function InputSelectComponent_Template_mat_select_selectionChange_3_listener($event) { return ctx.selected_value($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InputSelectComponent_mat_option_4_Template, 2, 2, "mat-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.inputDataList);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_2__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatOption"]], styles: [".mat-form-field[_ngcontent-%COMP%] {\n  padding-left: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaW5wdXQtc2VsZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSiIsImZpbGUiOiJpbnB1dC1zZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWZvcm0tZmllbGR7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcclxufSJdfQ== */"] });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'Synchrony';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [["name", "viewport", "content", "width=device-width, initial-scale=1"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "UgFz":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/videojs-record/videojs-record.component.ts ***!
  \******************************************************************************/
/*! exports provided: VideojsRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideojsRecordComponent", function() { return VideojsRecordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! video.js */ "8OJ3");
/* harmony import */ var recordrtc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recordrtc */ "qe5e");
/* harmony import */ var recordrtc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recordrtc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var wavesurfer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wavesurfer.js */ "iJZH");
/* harmony import */ var wavesurfer_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wavesurfer_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var wavesurfer_js_dist_plugin_wavesurfer_microphone_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wavesurfer.js/dist/plugin/wavesurfer.microphone.js */ "9Q4Y");
/* harmony import */ var wavesurfer_js_dist_plugin_wavesurfer_microphone_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wavesurfer_js_dist_plugin_wavesurfer_microphone_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var videojs_record_dist_videojs_record_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! videojs-record/dist/videojs.record.js */ "OWZb");
/* harmony import */ var videojs_record_dist_videojs_record_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(videojs_record_dist_videojs_record_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var videojs_record_dist_plugins_videojs_record_ts_ebml_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! videojs-record/dist/plugins/videojs.record.ts-ebml.js */ "1TkR");
/* harmony import */ var videojs_record_dist_plugins_videojs_record_ts_ebml_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(videojs_record_dist_plugins_videojs_record_ts_ebml_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");



// Required imports when recording audio-only using the videojs-wavesurfer plugin


// register videojs-record plugin with this import






function VideojsRecordComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Time elapsed: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r0.player.record().streamCurrentTime, "1.1-1"), "s\n");
} }
wavesurfer_js__WEBPACK_IMPORTED_MODULE_3__["microphone"] = wavesurfer_js_dist_plugin_wavesurfer_microphone_js__WEBPACK_IMPORTED_MODULE_4__;
class VideojsRecordComponent {
    // constructor initializes our declared vars
    constructor(elementRef) {
        this.WaveSurfer = __webpack_require__(/*! wavesurfer.js */ "iJZH");
        // reference to the element itself: used to access events and methods
        // private _elementRef: ElementRef;
        this.startedRecordingEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.recordingEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.feedbackEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // index to create unique ID for component
        this.idx = 'clip1';
        this.isRecording = false;
        this.isPaused = false;
        this.isRecorded = false;
        this.player = false;
        // save reference to plugin (so it initializes)
        this.plugin = videojs_record_dist_videojs_record_js__WEBPACK_IMPORTED_MODULE_5__;
        // const ws  = WaveSurfer.create( {
        //     container: this.player,
        //     backend: 'WebAudio',
        //     waveColor: '#36393b',
        //     progressColor: 'black',
        //     debug: true,
        //     cursorWidth: 1,
        //     displayMilliseconds: true,
        //     hideScrollbar: true,
        //     plugins: [
        //       // enable microphone plugin
        //       WaveSurfer.microphone.create({
        //         bufferSize: 4096,
        //         numberOfInputChannels: 1,
        //         numberOfOutputChannels: 1,
        //         constraints: {
        //           video: false,
        //           audio: true
        //         }
        //       })
        //     ]
        //   });
        // video.js configuration
        this.config = {
            controls: true,
            // autoplay: false,
            fluid: false,
            // fill: true,
            // loop: false,
            width: 410,
            height: 240,
            bigPlayButton: false,
            controlBar: {
                volumePanel: true,
                fullscreenToggle: false,
                bigPlayButton: false
            },
            plugins: {
                // wavesurfer section is only needed when recording audio-only
                // configure videojs-record plugin
                // wavesurfer: ws,
                record: {
                    audio: true,
                    debug: true,
                    displayMilliseconds: false,
                    maxLength: 600,
                    convertEngine: 'ts-ebml'
                }
            }
        };
    }
    ngOnInit() { }
    // use ngAfterViewInit to make sure we initialize the videojs element
    // after the component template itself has been rendered
    ngAfterViewInit() {
        // ID with which to access the template's video element
        const el = 'video_' + this.idx;
        // setup the player via the unique element ID
        this.config.plugins.record.screen = this.selectedRecordingOption !== 'Camera Recording';
        this.config.plugins.record.video = this.selectedRecordingOption === 'Camera Recording';
        this.player = Object(video_js__WEBPACK_IMPORTED_MODULE_1__["default"])(document.getElementById(el), this.config, () => {
            console.log('player ready! id:', el);
            // print version information at startup
            const msg = 'Using video.js ' + video_js__WEBPACK_IMPORTED_MODULE_1__["default"].VERSION +
                ' with videojs-record ' + video_js__WEBPACK_IMPORTED_MODULE_1__["default"].getPluginVersion('record') +
                ' and recordrtc ' + recordrtc__WEBPACK_IMPORTED_MODULE_2__["version"];
            video_js__WEBPACK_IMPORTED_MODULE_1__["default"].log(msg);
        });
        // this.player.fill(true);
        // device is ready
        this.player.on('deviceReady', () => {
            console.log('device is ready!');
            this.player.record().start();
        });
        // user clicked the record button and started recording
        this.player.on('startRecord', () => {
            console.log('started recording!');
            this.isRecording = true;
            this.startedRecordingEmit.emit();
        });
        // user completed recording and stream is available
        this.player.on('finishRecord', () => {
            // recordedData is a blob object containing the recorded data that
            // can be downloaded by the user, stored on server etc.
            console.log('finished recording: ', this.player.recordedData);
            // const recordedDataMp4 = this.player.record().saveAs({video: 'my-video-file-name.mp4'}, 'convert');
            // console.log(recordedDataMp4);
            // this.recordingEmit.emit(recordedDataMp4);
            this.recordingEmit.emit(this.player.recordedData);
        });
        // error handling
        this.player.on('error', (element, error) => {
            console.warn(error);
        });
        this.player.on('deviceError', () => {
            console.error('device error:', this.player.deviceErrorCode);
        });
    }
    // use ngOnDestroy to detach event handlers and remove the player
    ngOnDestroy() {
        if (this.player) {
            this.player.dispose();
            this.player = false;
        }
    }
    startRecording() {
        this.player.record().getDevice();
        this.player.record().start();
        this.isRecording = true;
    }
    startRerecording() {
        this.player.record().start();
        this.isRecording = true;
    }
    pauseRecording() {
        this.isPaused = true;
        this.player.record().pause();
    }
    resumeRecording() {
        this.isPaused = false;
        this.player.record().resume();
    }
    stopRecording() {
        this.player.record().stop();
        this.isPaused = false;
        this.isRecording = false;
        this.isRecorded = true;
    }
    submitFeedback() {
        this.feedbackEmit.emit();
    }
}
VideojsRecordComponent.ɵfac = function VideojsRecordComponent_Factory(t) { return new (t || VideojsRecordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
VideojsRecordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideojsRecordComponent, selectors: [["app-videojs-record"]], inputs: { selectedRecordingOption: "selectedRecordingOption" }, outputs: { startedRecordingEmit: "startedRecordingEmit", recordingEmit: "recordingEmit", feedbackEmit: "feedbackEmit" }, decls: 4, vars: 3, consts: [["fxLayout", "row", "fxLayoutAlign", "center", 1, "w-100", "mb-2"], ["fxLayout", "row", "fxLayoutAlign", "center", "class", "w-100", 4, "ngIf"], [3, "ngClass"], ["playsinline", "", 1, "video-js", "vjs-default-skin", 3, "id"], ["fxLayout", "row", "fxLayoutAlign", "center", 1, "w-100"]], template: function VideojsRecordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VideojsRecordComponent_div_1_Template, 3, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "video", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isRecording && ctx.selectedRecordingOption !== "Camera Recording");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (ctx.isRecording || !ctx.isRecorded) && ctx.selectedRecordingOption !== "Camera Recording" ? "invisible" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "video_", ctx.idx, "");
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultClassDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DecimalPipe"]], styles: [".video-js[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  background-color: grey;\n}\n.invisible[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdmlkZW9qcy1yZWNvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUNBQUE7QUFDQTtFQUNFLHNCQUFBO0FBQ0Y7QUFDQTtFQUNFLFVBQUE7QUFFRiIsImZpbGUiOiJ2aWRlb2pzLXJlY29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNoYW5nZSBwbGF5ZXIgYmFja2dyb3VuZCBjb2xvciAqL1xyXG4udmlkZW8tanMgdmlkZW8ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbn1cclxuLmludmlzaWJsZSB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "W5nQ":
/*!****************************************************!*\
  !*** ./src/app/core/services/firestore.service.ts ***!
  \****************************************************/
/*! exports provided: FirestoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirestoreService", function() { return FirestoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ "5x/H");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");






class FirestoreService {
    constructor(afs) {
        this.afs = afs;
    }
    createId() {
        return this.afs.createId();
    }
    col(ref, queryFn) {
        return typeof ref === 'string' ? this.afs.collection(ref, queryFn) : ref;
    }
    colGroup(collectionId, queryGroupFn) {
        return this.afs.collectionGroup(collectionId, queryGroupFn);
    }
    doc(ref) {
        return typeof ref === 'string' ? this.afs.doc(ref) : ref;
    }
    doc$(ref) {
        // @ts-ignore
        return this.doc(ref)
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((doc) => {
            if (doc.payload.data()) {
                // @ts-ignore
                return Object.assign(Object.assign({}, doc.payload.data()), { docId: doc.payload.id });
            }
            return null;
        }));
    }
    col$(ref, queryFn) {
        return this.col(ref, queryFn)
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((docs) => {
            return docs.map((a) => {
                const data = a.payload.doc.data();
                const docId = a.payload.doc.id;
                return Object.assign(Object.assign({}, data), { docId });
            });
        }));
    }
    // colGroup$<T>(collectionId: string, queryGroupFn?: QueryGroupFn): Observable<T[]> {
    //   // @ts-ignore
    //   return this.colGroup(collectionId, queryGroupFn)
    //     .snapshotChanges()
    //     .pipe(
    //       map((docs: DocumentChangeAction<T>[]) => {
    //         return docs.map((a: DocumentChangeAction<T>) => {
    //           const data = a.payload.doc.data() as T;
    //           const docId = a.payload.doc.id;
    //           return {...data, docId};
    //         }) as T[];
    //       }),
    //     );
    // }
    get timestamp() {
        return firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].firestore.FieldValue.serverTimestamp();
    }
    set(ref, data, options) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const _merge = (_a = options === null || options === void 0 ? void 0 : options.merge) !== null && _a !== void 0 ? _a : false;
            yield this.doc(ref).set(data, { merge: _merge });
        });
    }
    update(ref, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.doc(ref).update(data);
        });
    }
    delete(ref) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.doc(ref).delete();
        });
    }
    add(ref, data) {
        return new Promise((resolve, reject) => {
            this.col(ref).add(data).then((docRef) => {
                return resolve(docRef.id);
            }).catch(reject);
        });
    }
    setOrAdd(path, data) {
        const segments = path.split('/').filter(v => v);
        if (segments.length % 2) {
            // Odd is always a collection
            return this.col(path).add(data);
        }
        else {
            // Even is always document
            return this.doc(path).set(data);
        }
    }
    upsert(ref, data) {
        const doc = this.doc(ref)
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1))
            .toPromise();
        return doc.then((snap) => {
            return snap.payload.exists ? this.update(ref, data) : this.set(ref, data);
        });
    }
}
FirestoreService.ɵfac = function FirestoreService_Factory(t) { return new (t || FirestoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"])); };
FirestoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: FirestoreService, factory: FirestoreService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "WdyK":
/*!****************************************************************************!*\
  !*** ./src/app/ui/instructor/assignment-edit/assignment-edit.component.ts ***!
  \****************************************************************************/
/*! exports provided: AssignmentEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentEditComponent", function() { return AssignmentEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/crud.service */ "+/AT");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/header/header.component */ "aZ8m");
/* harmony import */ var _shared_components_input_dropdown_select_input_dropdown_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/input-dropdown-select/input-dropdown-select.component */ "x/FY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/table/table.component */ "Xv+k");








function AssignmentEditComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "app-input-dropdown-select", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("outputData", function AssignmentEditComponent_ng_container_7_Template_app_input_dropdown_select_outputData_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.get_query_data_sub_instruments($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("inputDataList", ctx_r0.sub_instrument)("name", ctx_r0.nameInstrument);
} }
function AssignmentEditComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "app-input-dropdown-select", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("outputData", function AssignmentEditComponent_ng_container_8_Template_app_input_dropdown_select_outputData_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.get_query_data_sub_levels($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("inputDataList", ctx_r1.sub_levels)("name", ctx_r1.nameLevels);
} }
class AssignmentEditComponent {
    constructor(crudservice) {
        this.crudservice = crudservice;
        this.instructorSchools = [];
        this.sub_schools = [];
        this.sub_instrument = [];
        this.sub_levels = [];
        this.sub_display_instrument = false;
        this.sub_display_levels = false;
        // set filter name
        this.nameSchool = "School";
        this.nameInstrument = "Instrument";
        this.nameLevels = "Levels";
        // get filter data
        this.select_Combine_SchoolInstrumentLevels = [];
        this.selectSubSchools = [];
        this.selectSubInstruments = [];
        this.selectSubLevels = [];
        this.displayedColumns = ['name', 'due_datetime', 'school_instrument_level', 'action'];
        this.actionType = "instructorAssignmentEdit";
        // Assignment
        this.assignments = [];
    }
    ngOnInit() {
        this.get_account_information();
    }
    // Get the account doc Id
    get_account_information() {
        if (sessionStorage.getItem('account') != null) {
            this.account = JSON.parse(sessionStorage.getItem('account'));
            this.accountDocId = this.account.docId;
            this.instructorSchools = this.account.school;
            //console.log(this.accountDocId);
            this.get_all_instructor_assignments();
            this.set_distint_school_instrument_level(this.account.school_instrument_level);
        }
    }
    get_all_instructor_assignments() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dataSource = [];
            this.assignments = [];
            const data = yield this.crudservice.read("assignments", "instructor_account_doc_id", "==", this.accountDocId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).toPromise();
            // console.log(data)
            for (var ele of data) {
                this.create_assignment(ele);
            }
            this.dataSource = this.assignments;
        });
    }
    create_assignment(data) {
        // Change the date and time formate
        var edit_due_datetime = data.due_datetime.toDate();
        edit_due_datetime = edit_due_datetime.toString().split("GMT")[0].split(" ");
        var edit_due_date = edit_due_datetime[0] + ", " + edit_due_datetime[2] + " " + edit_due_datetime[1] + " " + edit_due_datetime[3] + ", ";
        var edit_due_time = edit_due_datetime[4];
        var assignment = {
            docId: data.docId,
            instructor_account_doc_id: data.instructor_account_doc_id,
            created_datetime: data.created_datetime,
            description: data.description,
            due_datetime: edit_due_date + edit_due_time,
            name: data.name,
            school: data.school,
            school_instrument_level: data.school_instrument_level,
            file_names: data.file_names
        };
        this.assignments.push(assignment);
    }
    // split the school_instrument_level into arrays of there own.
    set_distint_school_instrument_level(data) {
        for (var dataSchoolInstrumentLevel of data) {
            var sub_query = dataSchoolInstrumentLevel.split("_");
            var school = sub_query[0];
            var instrument = sub_query[1];
            var level = sub_query[2];
            if (this.sub_schools.indexOf(school) == -1) {
                this.sub_schools.push(school);
            }
            if (this.sub_instrument.indexOf(instrument) == -1) {
                this.sub_instrument.push(instrument);
            }
            if (this.sub_levels.indexOf(level) == -1) {
                this.sub_levels.push(level);
            }
        }
    }
    // == get filter == //
    get_query_data_sub_schools($event) {
        this.selectSubSchools = $event.value;
        if (this.selectSubSchools.length == 0) {
            this.sub_display_instrument = false;
            this.sub_display_levels = false;
        }
        else {
            this.sub_display_instrument = true;
            this.sub_display_levels = false;
        }
        if (this.sub_display_instrument == false && this.sub_display_levels == false) {
            this.get_all_instructor_assignments();
        }
    }
    get_query_data_sub_instruments($event) {
        this.selectSubInstruments = $event.value;
        if (this.selectSubInstruments.length == 0) {
            this.sub_display_levels = false;
        }
        else {
            this.sub_display_levels = true;
        }
    }
    get_query_data_sub_levels($event) {
        this.selectSubLevels = $event.value;
        this.combine_querry_search_data();
        this.query_table_with_filter();
    }
    // Method: 
    combine_querry_search_data() {
        this.select_Combine_SchoolInstrumentLevels = [];
        if (this.sub_display_instrument != false && this.sub_display_levels != false) {
            this.select_Combine_SchoolInstrumentLevels = [];
            for (var eleSchool of this.selectSubSchools) {
                for (var eleInstrument of this.selectSubInstruments) {
                    for (var eleLevel of this.selectSubLevels) {
                        var query = eleSchool + "_" + eleInstrument + "_" + eleLevel;
                        if (this.select_Combine_SchoolInstrumentLevels.indexOf(query) == -1) {
                            this.select_Combine_SchoolInstrumentLevels.push(query);
                        }
                    }
                }
            }
        }
    }
    // Method: 
    query_table_with_filter() {
        var result = [];
        result = this.assignments;
        if (this.select_Combine_SchoolInstrumentLevels.length != 0) {
            this.filtering_by_school_instrument_levels(this.select_Combine_SchoolInstrumentLevels);
        }
    }
    // Method: 
    filtering_by_school_instrument_levels(filter) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.assignments = [];
            const data = yield this.crudservice.read("assignments", "instructor_account_doc_id", "==", this.accountDocId, "school_instrument_level", "array-contains-any", filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).toPromise();
            for (var ele of data) {
                this.create_assignment(ele);
            }
            this.dataSource = this.assignments;
        });
    }
}
AssignmentEditComponent.ɵfac = function AssignmentEditComponent_Factory(t) { return new (t || AssignmentEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"])); };
AssignmentEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AssignmentEditComponent, selectors: [["app-assignment-edit"]], decls: 11, vars: 7, consts: [[1, "account-create-wrapper", "wrapper-padding"], [1, "mb-3"], [3, "inputDataList", "name", "outputData"], [4, "ngIf"], [3, "dataSource", "displayedColumns", "actionType"]], template: function AssignmentEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Edit Assignment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "app-input-dropdown-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("outputData", function AssignmentEditComponent_Template_app_input_dropdown_select_outputData_6_listener($event) { return ctx.get_query_data_sub_schools($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AssignmentEditComponent_ng_container_7_Template, 2, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AssignmentEditComponent_ng_container_8_Template, 2, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "app-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("inputDataList", ctx.sub_schools)("name", ctx.nameSchool);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.sub_display_instrument);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.sub_display_levels);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns)("actionType", ctx.actionType);
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _shared_components_input_dropdown_select_input_dropdown_select_component__WEBPACK_IMPORTED_MODULE_5__["InputDropdownSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_7__["TableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc3NpZ25tZW50LWVkaXQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "XZGf":
/*!***************************************************************************************************!*\
  !*** ./src/app/ui/student/assignment-submit-individual/assignment-submit-individual.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: AssignmentSubmitIndividualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentSubmitIndividualComponent", function() { return AssignmentSubmitIndividualComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "JZFu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_services_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/crud.service */ "+/AT");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/header/header.component */ "aZ8m");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_dropzone_dropzone_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/dropzone/dropzone.component */ "lqgp");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");



var Timestamp = firebase__WEBPACK_IMPORTED_MODULE_2__["default"].firestore.Timestamp;










function AssignmentSubmitIndividualComponent_h1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r0.assignment.name, " Submission");
} }
function AssignmentSubmitIndividualComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.assignment.description);
} }
function AssignmentSubmitIndividualComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_name_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", "https://firebasestorage.googleapis.com/v0/b/synchrony-581ed.appspot.com/o/assignment%2F" + ctx_r7.assignment.docId + "%2F" + file_name_r8 + "?alt=media", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", file_name_r8, "");
} }
function AssignmentSubmitIndividualComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AssignmentSubmitIndividualComponent_div_8_div_1_Template, 5, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.assignment.file_names);
} }
function AssignmentSubmitIndividualComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Previous Submission: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx_r3.assignmentSubmission.student_attachment_scoresheet, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.assignmentSubmission.student_attachment_scoresheet_name, "");
} }
function AssignmentSubmitIndividualComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Previous Submission: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx_r4.assignmentSubmission.student_attachment_recording, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r4.assignmentSubmission.student_attachment_recording_name, "");
} }
function AssignmentSubmitIndividualComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Uploading in process: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "mat-progress-bar", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AssignmentSubmitIndividualComponent_button_28_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AssignmentSubmitIndividualComponent_button_28_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.onSubmitClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class AssignmentSubmitIndividualComponent {
    constructor(activatedRoute, crudService, router, toastrService, afStorage) {
        this.activatedRoute = activatedRoute;
        this.crudService = crudService;
        this.router = router;
        this.toastrService = toastrService;
        this.afStorage = afStorage;
        this.assignmentSubmission = null;
    }
    ngOnInit() {
        this.loggedInAccount = JSON.parse(sessionStorage.getItem('account'));
        this.activatedRoute.queryParams.subscribe((params) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.assignmentDocId = params.assignmentDocId;
            this.assignment = yield this.crudService.readByDocId('assignments', params.assignmentDocId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
                .toPromise();
            // this.assignment = await this.assignmentService.getAssignment(this.assignmentDocId)
            //   .pipe(first())
            //   .toPromise();
            // const assignmentSubmission: Array<AssignmentSubmission> =
            const data = yield this.crudService.read('assignment_submissions', 'student_doc_id', '==', this.loggedInAccount.docId, 'assignment_doc_id', '==', this.assignment.docId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).toPromise();
            if (data && data.length > 0) {
                this.assignmentSubmission = data[0];
            }
            // this.assignmentSubmissionService.getAssignmentSubmissionsByStudentAndAssignment(
            //   localStorage.getItem('activeDocId'), this.assignmentDocId)
            //   .subscribe(async (assignmentSubmissions) => {
            //   this.assignmentSubmission = assignmentSubmissions[assignmentSubmissions.length - 1];
            // console.log(this.assignmentSubmission);
            // });
        }));
    }
    onGoBackClick(assignment) {
        this.router.navigate(['student/assignment/view']);
    }
    onSubmitClick() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.scoresheetFile && !this.recordingFile) {
                this.toastrService.error('Please upload a file!', '', { positionClass: 'toast-top-center' });
            }
            else {
                // Students can have multiple school instrument levels, assignments can also have multiple school instrument level
                // Hence, need to find a list of school instrument level(s) that both the currently logged in student
                // and the selected assignment have! This also explains why assignmentSubmission can have multiple school instrument level
                this.newAssignmentSubmission = {
                    assignment_doc_id: this.assignmentDocId,
                    instructor_doc_id: this.assignment.instructor_account_doc_id,
                    student_doc_id: this.loggedInAccount.docId,
                    school: [this.loggedInAccount.school[0]],
                    school_instrument_level: this.loggedInAccount.school_instrument_level.filter(value => this.assignment.school_instrument_level.includes(value)),
                    submitted_datetime: Timestamp.fromDate(new Date()),
                    feedback: '',
                    instructor_feedback_attachment_name: '',
                    instructor_feedback_attachment: '',
                    feedback_datetime: null
                };
                // need to create the new assignment submission first to get its doc id, so we know where to store the files in firebase storage
                if (this.assignmentSubmission == null) {
                    yield this.crudService.create('assignment_submissions', this.newAssignmentSubmission).then((docId) => {
                        this.assignmentSubmissionDocId = docId;
                    });
                }
                else {
                    this.assignmentSubmissionDocId = this.assignmentSubmission.docId;
                }
                this.isUploading = true;
                if (this.scoresheetFile) {
                    yield this.uploadFile(this.scoresheetFile, 'scoresheet');
                }
                if (this.recordingFile) {
                    yield this.uploadFile(this.recordingFile, 'recording');
                }
                if (this.assignmentSubmission == null) {
                    yield this.crudService.update('assignment_submissions', this.assignmentSubmissionDocId, this.newAssignmentSubmission);
                    this.toastrService.success('Uploaded assignment submission successfully!', '', { positionClass: 'toast-top-center' });
                }
                else {
                    yield this.crudService.update('assignment_submissions', this.assignmentSubmissionDocId, this.assignmentSubmission);
                    this.toastrService.success('Updated assignment submission successfully!', '', { positionClass: 'toast-top-center' });
                }
                this.router.navigate(['student/assignment/view']);
            }
        });
    }
    uploadFile(file, type) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const path = 'assignment_submissions/' + this.assignmentSubmissionDocId + '/' + file.name;
            // console.log(file);
            const task = this.afStorage.upload(path, file);
            yield task.then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield result.ref.getDownloadURL().then((downloadUrl) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    // console.log(downloadUrl);
                    if (this.assignmentSubmission == null) {
                        if (type === 'scoresheet') {
                            this.newAssignmentSubmission.student_attachment_scoresheet = downloadUrl;
                            this.newAssignmentSubmission.student_attachment_scoresheet_name = file.name;
                        }
                        else if (type === 'recording') {
                            this.newAssignmentSubmission.student_attachment_recording = downloadUrl;
                            this.newAssignmentSubmission.student_attachment_recording_name = file.name;
                        }
                    }
                    else {
                        if (type === 'scoresheet') {
                            this.assignmentSubmission.student_attachment_scoresheet = downloadUrl;
                            this.assignmentSubmission.student_attachment_scoresheet_name = file.name;
                        }
                        else if (type === 'recording') {
                            this.assignmentSubmission.student_attachment_recording = downloadUrl;
                            this.assignmentSubmission.student_attachment_recording_name = file.name;
                        }
                    }
                }));
            }));
        });
    }
}
AssignmentSubmitIndividualComponent.ɵfac = function AssignmentSubmitIndividualComponent_Factory(t) { return new (t || AssignmentSubmitIndividualComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_crud_service__WEBPACK_IMPORTED_MODULE_5__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"])); };
AssignmentSubmitIndividualComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AssignmentSubmitIndividualComponent, selectors: [["app-assignment-submit-individual"]], decls: 29, vars: 13, consts: [[1, "assignment-submit-individual-wrapper", "wrapper-padding", "max-width-section"], ["class", "mb-3", 4, "ngIf"], [1, "mb-3"], ["class", "mb-2", 4, "ngIf"], [1, "form-group", "mb-3"], [3, "label", "acceptedFileTypes", "acceptMultipleFiles", "fileEmit"], ["class", "form-text text-muted", 4, "ngIf"], [4, "ngIf"], [1, "go-back-section", 3, "click"], [1, "mr-1", "mt-1"], [1, "go-back-text", "mr-3", "mt-1"], ["class", "btn btn-info submit-btn", 3, "click", 4, "ngIf"], [1, "mb-2"], ["class", "mb-1", 4, "ngFor", "ngForOf"], [1, "mb-1"], [1, "mr-2"], ["target", "_blank", 1, "attachment-name", 3, "href"], [1, "form-text", "text-muted"], ["target", "_blank", 3, "href"], ["id", "progress-bar", "mode", "indeterminate", 1, "mt-3", "mb-3"], [1, "btn", "btn-info", "submit-btn", 3, "click"]], template: function AssignmentSubmitIndividualComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AssignmentSubmitIndividualComponent_h1_2_Template, 2, 1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Assignment Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, AssignmentSubmitIndividualComponent_p_5_Template, 2, 1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Assignment Attachments");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, AssignmentSubmitIndividualComponent_div_8_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Assignment Submission");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Attach Music Score Sheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "app-dropzone", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("fileEmit", function AssignmentSubmitIndividualComponent_Template_app_dropzone_fileEmit_14_listener($event) { return ctx.scoresheetFile = $event[0]; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, AssignmentSubmitIndividualComponent_div_15_Template, 4, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Attach Recording");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "app-dropzone", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("fileEmit", function AssignmentSubmitIndividualComponent_Template_app_dropzone_fileEmit_19_listener($event) { return ctx.recordingFile = $event[0]; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, AssignmentSubmitIndividualComponent_div_20_Template, 4, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, AssignmentSubmitIndividualComponent_div_21_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AssignmentSubmitIndividualComponent_Template_span_click_23_listener() { return ctx.onGoBackClick(ctx.assignment); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, AssignmentSubmitIndividualComponent_button_28_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.assignment);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.assignment);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.assignment && ctx.assignment.file_names);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", "Drop your music score sheet here (Accepted format: .pdf)")("acceptedFileTypes", ".pdf")("acceptMultipleFiles", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.assignmentSubmission && ctx.assignmentSubmission.student_attachment_scoresheet);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", "Drop your video recording here (Accepted formats: .avi, .mov, .mpeg4, .mp4, .webm)")("acceptedFileTypes", ".MOV, .MPEG4, .MP4, .AVI, .WEBM")("acceptMultipleFiles", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.assignmentSubmission && ctx.assignmentSubmission.student_attachment_recording);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isUploading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.assignment);
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _shared_components_dropzone_dropzone_component__WEBPACK_IMPORTED_MODULE_10__["DropzoneComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBar"]], styles: [".assignment-submit-individual-wrapper[_ngcontent-%COMP%]   .attachment-name[_ngcontent-%COMP%] {\n  position: relative;\n  top: -5px;\n}\n.assignment-submit-individual-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  position: relative;\n  top: -5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzaWdubWVudC1zdWJtaXQtaW5kaXZpZHVhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQUZKO0FBSUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUFGSiIsImZpbGUiOiJhc3NpZ25tZW50LXN1Ym1pdC1pbmRpdmlkdWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXNcIjtcclxuXHJcbi5hc3NpZ25tZW50LXN1Ym1pdC1pbmRpdmlkdWFsLXdyYXBwZXIge1xyXG4gIC5hdHRhY2htZW50LW5hbWUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtNXB4O1xyXG4gIH1cclxuICAuc3VibWl0LWJ0biB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC01cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Xv+k":
/*!************************************************************!*\
  !*** ./src/app/shared/components/table/table.component.ts ***!
  \************************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_services_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/crud.service */ "+/AT");







function TableComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Username ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r47.username, " ");
} }
function TableComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r48.first_name, " ");
} }
function TableComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Surname ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r49.last_name, " ");
} }
function TableComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Role ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r50.role, " ");
} }
function TableComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " School ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableComponent_td_22_ng_container_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tag_r53, " ");
} }
function TableComponent_td_22_ng_container_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r54 = ctx_r58.index;
    const tag_r53 = ctx_r58.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" (", i_r54 + 1, ") ", tag_r53, " ");
} }
function TableComponent_td_22_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableComponent_td_22_ng_container_1_span_1_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableComponent_td_22_ng_container_1_span_2_Template, 2, 2, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const tag_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tag_r53 == "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tag_r53 != "NA");
} }
function TableComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableComponent_td_22_ng_container_1_Template, 3, 2, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", element_r51.school);
} }
function TableComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " school_instrument_level ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableComponent_td_25_ng_container_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contentEditable", ctx_r63.contenteditable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tag_r61, " ");
} }
function TableComponent_td_25_ng_container_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r62 = ctx_r66.index;
    const tag_r61 = ctx_r66.$implicit;
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contentEditable", ctx_r64.contenteditable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" (", i_r62 + 1, ") ", tag_r61, " ");
} }
function TableComponent_td_25_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableComponent_td_25_ng_container_1_span_1_Template, 2, 2, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableComponent_td_25_ng_container_1_span_2_Template, 2, 3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const tag_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tag_r61 == "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tag_r61 != "NA");
} }
function TableComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableComponent_td_25_ng_container_1_Template, 3, 2, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", element_r59.school_instrument_level);
} }
function TableComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Month ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r67.month, " ");
} }
function TableComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Number Of Minutes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableComponent_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r68.number_of_minutes, " ");
} }
function TableComponent_th_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " School ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableComponent_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r69.school_abbreviation, " ");
} }
function TableComponent_th_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Year ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableComponent_td_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r70.year, " ");
} }
function TableComponent_th_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Assignment Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableComponent_td_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r71.name, " ");
} }
function TableComponent_th_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Due Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableComponent_td_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r72.due_datetime, " ");
} }
function TableComponent_th_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Assignment Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableComponent_td_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r73 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r73.assignment_name, " ");
} }
function TableComponent_th_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Due Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableComponent_td_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r74 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r74.due_datetime.toDate(), "EEEE, MMMM d, y, h:mm:ss a"), " ");
} }
function TableComponent_th_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Submission Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableComponent_td_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r75 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r75.submission_status, " ");
} }
function TableComponent_th_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Instructor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableComponent_td_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r76 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r76.instructor.first_name + " " + element_r76.instructor.last_name), " ");
} }
function TableComponent_th_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " School ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableComponent_td_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r77 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r77.school, " ");
} }
function TableComponent_th_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " School_Instrument_Level ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableComponent_td_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r78 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r78.school_instrument_level, " ");
} }
function TableComponent_th_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Student's Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableComponent_td_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r79 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r79.student_name, " ");
} }
function TableComponent_th_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Feedback Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableComponent_td_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r80 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r80.feedback_status, " ");
} }
function TableComponent_th_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableComponent_td_70_ng_container_1_app_dialog_box_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-dialog-box", 49);
} if (rf & 2) {
    const element_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("actionType", ctx_r90.actionType)("docid", element_r81.docId)("username", element_r81.username);
} }
function TableComponent_td_70_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableComponent_td_70_ng_container_1_app_dialog_box_1_Template, 1, 3, "app-dialog-box", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r82.actionType == "accountDelete");
} }
function TableComponent_td_70_app_dialog_box_3_Template(rf, ctx) { if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-dialog-box", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableComponent_td_70_app_dialog_box_3_Template_app_dialog_box_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r94); const element_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r92.test(element_r81); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("actionType", ctx_r83.actionType)("docid", element_r81.docId)("username", element_r81.username);
} }
function TableComponent_td_70_app_dialog_box_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-dialog-box", 51);
} if (rf & 2) {
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("actionType", ctx_r84.actionType);
} }
function TableComponent_td_70_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/instructor/assignment/edit/assignment/", element_r81.docId, "");
} }
function TableComponent_td_70_app_dialog_box_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-dialog-box", 53);
} if (rf & 2) {
    const element_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("actionType", ctx_r86.actionType)("docid", element_r81.docId)("assignmentName", element_r81.name);
} }
function TableComponent_td_70_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableComponent_td_70_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100); const element_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r98.onSubmitClick(element_r81.docId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r81.submission_status == "Pending Submission" ? "Submit" : "Resubmit", " ");
} }
function TableComponent_td_70_ng_container_8_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableComponent_td_70_ng_container_8_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r106); const element_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r104.onSubmitClick(element_r81.docId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r81.submission_status == "Pending Submission" ? "Submit" : "Resubmit", " ");
} }
function TableComponent_td_70_ng_container_8_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableComponent_td_70_ng_container_8_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r110); const element_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r108.onFeedbackClick(element_r81.assignmentSubmission.docId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " View Feedback ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableComponent_td_70_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableComponent_td_70_ng_container_8_button_1_Template, 2, 1, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableComponent_td_70_ng_container_8_button_2_Template, 2, 0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const element_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !element_r81.isOverDueDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (element_r81.assignmentSubmission == null ? null : element_r81.assignmentSubmission.feedback_datetime) != null);
} }
function TableComponent_td_70_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableComponent_td_70_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r114); const element_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r112.onMarkClick(element_r81.docId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r81.feedback_datetime == null ? "Mark" : "Re-mark", " ");
} }
function TableComponent_td_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableComponent_td_70_ng_container_1_Template, 2, 1, "ng-container", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableComponent_td_70_app_dialog_box_3_Template, 1, 3, "app-dialog-box", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TableComponent_td_70_app_dialog_box_4_Template, 1, 1, "app-dialog-box", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TableComponent_td_70_button_5_Template, 2, 1, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TableComponent_td_70_app_dialog_box_6_Template, 1, 3, "app-dialog-box", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TableComponent_td_70_button_7_Template, 2, 1, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TableComponent_td_70_ng_container_8_Template, 3, 2, "ng-container", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TableComponent_td_70_button_9_Template, 2, 1, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r81 = ctx.$implicit;
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r42.accountUsername != element_r81.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r42.actionType == "accountEdit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r42.actionType == "wage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r42.actionType == "instructorAssignmentEdit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r42.actionType == "instructorAssignmentEdit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r42.actionType == "assignmentSubmit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r42.actionType == "assignmentView");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r42.actionType == "assignmentMark");
} }
function TableComponent_tr_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 55);
} }
function TableComponent_tr_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 56);
} }
function TableComponent_mat_progress_spinner_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 57);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 40);
} }
function TableComponent_div_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No search results");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [5, 10, 25, 100]; };
class TableComponent {
    constructor(router, crudService) {
        this.router = router;
        this.crudService = crudService;
        this.contenteditable = false;
        this.outputData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.triggerUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.updateArray = [];
    }
    ngOnChanges() {
        this.populateTable();
    }
    ngOnInit() {
        this.populateTable();
    }
    populateTable() {
        // console.log(this.dataSource);
        this.matTableDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.dataSource);
        this.matTableDataSource.paginator = this.paginator;
        this.matTableDataSource.sort = this.sort;
        // console.log(this.matTableDataSource);
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.matTableDataSource.filter = filterValue.trim().toLowerCase();
        if (this.matTableDataSource.paginator) {
            this.matTableDataSource.paginator.firstPage();
        }
    }
    deleteDocId(data) {
        this.deleteDataDocId = data;
        this.sentToParent();
    }
    editDocId(data) {
        this.editDataDocId = data;
        this.sentToParent();
    }
    // Method: sent data to the parent
    sentToParent() {
        if (this.deleteDataDocId != null) {
            this.outputData.emit(this.deleteDataDocId);
        }
        if (this.editDataDocId != null) {
            this.outputData.emit(this.editDataDocId);
        }
    }
    // Modal //
    onOpen(event) {
        console.log(event);
    }
    onSubmitClick(assignmentDocId) {
        this.router.navigate(['student/assignment/submit'], { queryParams: { assignmentDocId } });
    }
    onFeedbackClick(assignmentSubmissionDocId) {
        this.router.navigate(['student/assignment/feedback'], { queryParams: { assignmentSubmissionDocId } });
    }
    onMarkClick(assignmentSubmissionDocId) {
        this.router.navigate(['instructor/assignment/mark'], { queryParams: { assignmentSubmissionDocId } });
    }
    // editTable($event) {
    //   if(this.contenteditable == true) {
    //     this.contenteditable = false;
    //   } else {
    //     this.contenteditable = true;
    //   }
    // }
    // sendToTable($event) {
    //   console.log("sentToTable activated");
    //   this.updateArray.push(this.username);
    //   this.updateArray.push(this.first_name);
    //   this.updateArray.push(this.last_name);
    //   this.updateArray.push(this.role);
    //   this.triggerUpdate.emit(this.updateArray);
    //   this.updateArray = [];
    // }
    test(element) {
        console.log(element);
        // console.log(this.dataSource);
        this.router.navigate(['/admin/account/edit/form'], { queryParams: element });
    }
}
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_crud_service__WEBPACK_IMPORTED_MODULE_5__["CrudService"])); };
TableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableComponent, selectors: [["app-table"]], viewQuery: function TableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, inputs: { dataSource: "dataSource", displayedColumns: "displayedColumns", actionType: "actionType", accountUsername: "accountUsername", username: "username", first_name: "first_name", last_name: "last_name", role: "role" }, outputs: { outputData: "outputData", triggerUpdate: "triggerUpdate" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 77, vars: 7, consts: [[1, "table-wrapper"], ["appearance", "standard"], ["matInput", "", "placeholder", " Search by e.g school, name ", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8"], ["mat-table", "", "striped", "true", "matSort", "", 3, "dataSource"], ["matColumnDef", "username"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "first_name"], ["matColumnDef", "last_name"], ["matColumnDef", "role"], ["matColumnDef", "school"], ["matColumnDef", "school_instrument_level"], ["matColumnDef", "month"], ["matColumnDef", "number_of_minutes"], ["matColumnDef", "school_abbreviation"], ["matColumnDef", "year"], ["matColumnDef", "name"], ["matColumnDef", "due_datetime"], ["matColumnDef", "assignment_name"], ["matColumnDef", "assignment_due_datetime"], ["matColumnDef", "assignment_submission_status"], ["matColumnDef", "assignment_instructor"], ["matColumnDef", "assignment_school"], ["matColumnDef", "assignment_school_instrument_level"], ["matColumnDef", "assignment_student_name"], ["matColumnDef", "assignment_feedback_status"], ["matColumnDef", "action"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "spinner-container"], ["class", "mt-2 mb-2", "mode", "indeterminate", 3, "diameter", 4, "ngIf"], ["class", "no-results-message", 4, "ngIf"], ["aria-label", "Select page of users", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "contentEditable", 4, "ngIf"], [3, "contentEditable"], ["mat-header-cell", ""], [3, "actionType", "docid", "username", "click", 4, "ngIf"], [3, "actionType", 4, "ngIf"], ["type", "button", "mdbBtn", "", "color", "info", "mdbWavesEffect", "", 3, "routerLink", 4, "ngIf"], [3, "actionType", "docid", "assignmentName", 4, "ngIf"], ["type", "button", "mdbBtn", "", "color", "info", "rounded", "true", "mdbWavesEffect", "", 3, "click", 4, "ngIf"], [3, "actionType", "docid", "username", 4, "ngIf"], [3, "actionType", "docid", "username"], [3, "actionType", "docid", "username", "click"], [3, "actionType"], ["type", "button", "mdbBtn", "", "color", "info", "mdbWavesEffect", "", 3, "routerLink"], [3, "actionType", "docid", "assignmentName"], ["type", "button", "mdbBtn", "", "color", "info", "rounded", "true", "mdbWavesEffect", "", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], ["mode", "indeterminate", 1, "mt-2", "mb-2", 3, "diameter"], [1, "no-results-message"]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function TableComponent_Template_input_keyup_4_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TableComponent_th_9_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TableComponent_td_10_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TableComponent_th_12_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TableComponent_td_13_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TableComponent_th_15_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TableComponent_td_16_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TableComponent_th_18_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TableComponent_td_19_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, TableComponent_th_21_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TableComponent_td_22_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](23, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, TableComponent_th_24_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, TableComponent_td_25_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](26, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, TableComponent_th_27_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, TableComponent_td_28_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](29, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, TableComponent_th_30_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, TableComponent_td_31_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](32, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, TableComponent_th_33_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, TableComponent_td_34_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](35, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, TableComponent_th_36_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, TableComponent_td_37_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](38, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, TableComponent_th_39_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, TableComponent_td_40_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](41, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, TableComponent_th_42_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, TableComponent_td_43_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](44, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, TableComponent_th_45_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, TableComponent_td_46_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](47, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, TableComponent_th_48_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, TableComponent_td_49_Template, 3, 4, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](50, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, TableComponent_th_51_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, TableComponent_td_52_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](53, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, TableComponent_th_54_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, TableComponent_td_55_Template, 3, 3, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](56, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, TableComponent_th_57_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, TableComponent_td_58_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](59, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, TableComponent_th_60_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, TableComponent_td_61_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](62, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, TableComponent_th_63_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, TableComponent_td_64_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](65, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, TableComponent_th_66_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, TableComponent_td_67_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](68, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, TableComponent_th_69_Template, 2, 0, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, TableComponent_td_70_Template, 10, 8, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, TableComponent_tr_71_Template, 1, 0, "tr", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, TableComponent_tr_72_Template, 1, 0, "tr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, TableComponent_mat_progress_spinner_74_Template, 1, 1, "mat-progress-spinner", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, TableComponent_div_75_Template, 2, 0, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "mat-paginator", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.matTableDataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataSource && ctx.dataSource.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
    } }, styles: [".table-wrapper[_ngcontent-%COMP%] {\n  \n}\n.table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 20px auto;\n}\n.table-wrapper[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  padding-left: 10%;\n  font-size: 16px;\n  width: 80%;\n}\n.table-wrapper[_ngcontent-%COMP%]   .spinner-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.table-wrapper[_ngcontent-%COMP%]   .no-results-message[_ngcontent-%COMP%] {\n  color: #898989 !important;\n  margin: 20px 15px 20px 15px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUF3QkU7Ozs7Ozs7O0dBQUE7QUFkRjtBQVRFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FBV0o7QUFSRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFVSjtBQVJFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFVSjtBQU5FO0VBQ0UseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBUUoiLCJmaWxlIjoidGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtd3JhcHBlciB7XHJcbiAgdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICB9XHJcblxyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG4gIC5zcGlubmVyLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgIC8vIGJveC1zaGFkb3c6MCA1cHggNXB4IC0zcHggcmdiYSgwLDAsMCwuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwwLDAsLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLDAsMCwuMTIpXHJcbiAgfVxyXG4gIC5uby1yZXN1bHRzLW1lc3NhZ2Uge1xyXG4gICAgY29sb3I6ICM4OTg5ODkhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAyMHB4IDE1cHggMjBweCAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAubWF0LXJvdzpudGgtY2hpbGQoZXZlbil7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6I0E5QTlBOTtcclxuICB9XHJcblxyXG4gIC5tYXQtcm93Om50aC1jaGlsZChvZGQpe1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNEQ0RDREM7XHJcbiAgfVxyXG4gICovXHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "YzWa":
/*!****************************************!*\
  !*** ./src/app/core/models/account.ts ***!
  \****************************************/
/*! exports provided: Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
var Role;
(function (Role) {
    Role["admin"] = "admin";
    Role["student"] = "student";
    Role["instructor"] = "instructor";
    Role["invalid"] = "";
    // freelancer = 'freelancer'
})(Role || (Role = {}));


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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! angular-bootstrap-md */ "dbUT");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./shared/components/header/header.component */ "aZ8m");
/* harmony import */ var _shared_components_cards_cards_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./shared/components/cards/cards.component */ "kkAW");
/* harmony import */ var _ui_home_update_password_update_password_update_password_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./ui/home/update_password/update-password/update-password.component */ "QuZi");
/* harmony import */ var _ui_home_login_login_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./ui/home/login/login.component */ "zW2w");
/* harmony import */ var _ui_admin_account_create_account_create_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./ui/admin/account-create/account-create.component */ "hg8a");
/* harmony import */ var _ui_admin_account_edit_account_edit_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./ui/admin/account-edit/account-edit.component */ "RAkc");
/* harmony import */ var _ui_admin_account_delete_account_delete_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./ui/admin/account-delete/account-delete.component */ "2BFw");
/* harmony import */ var _ui_admin_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./ui/admin/admin-home/admin-home.component */ "dUrK");
/* harmony import */ var _ui_admin_freelance_wage_freelance_wage_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./ui/admin/freelance-wage/freelance-wage.component */ "5l12");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var ngx_csv_parser__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ngx-csv-parser */ "U7/n");
/* harmony import */ var _ui_instructor_instructor_home_instructor_home_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./ui/instructor/instructor-home/instructor-home.component */ "OdCY");
/* harmony import */ var _ui_instructor_assignment_create_assignment_create_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./ui/instructor/assignment-create/assignment-create.component */ "uXIz");
/* harmony import */ var _ui_instructor_assignment_edit_assignment_edit_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./ui/instructor/assignment-edit/assignment-edit.component */ "WdyK");
/* harmony import */ var _ui_instructor_assignment_mark_assignment_mark_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./ui/instructor/assignment-mark/assignment-mark.component */ "z5A7");
/* harmony import */ var _ui_student_student_home_student_home_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./ui/student/student-home/student-home.component */ "/WYx");
/* harmony import */ var _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./shared/components/table/table.component */ "Xv+k");
/* harmony import */ var _shared_components_input_dropdown_select_input_dropdown_select_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./shared/components/input-dropdown-select/input-dropdown-select.component */ "x/FY");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _shared_components_input_select_input_select_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./shared/components/input-select/input-select.component */ "S2nj");
/* harmony import */ var _ui_instructor_assignment_mark_individual_assignment_mark_individual_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./ui/instructor/assignment-mark-individual/assignment-mark-individual.component */ "qlqg");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ngx-extended-pdf-viewer */ "E1wN");
/* harmony import */ var _shared_components_videojs_record_videojs_record_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./shared/components/videojs-record/videojs-record.component */ "UgFz");
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ngx-dropzone */ "kvL/");
/* harmony import */ var _ui_student_assignment_view_assignment_view_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./ui/student/assignment-view/assignment-view.component */ "aOO9");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ui_student_assignment_submit_individual_assignment_submit_individual_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./ui/student/assignment-submit-individual/assignment-submit-individual.component */ "XZGf");
/* harmony import */ var _ui_student_assignment_feedback_individual_assignment_feedback_individual_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./ui/student/assignment-feedback-individual/assignment-feedback-individual.component */ "syhF");
/* harmony import */ var _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! @videogular/ngx-videogular/core */ "4w57");
/* harmony import */ var _videogular_ngx_videogular_overlay_play__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! @videogular/ngx-videogular/overlay-play */ "cqME");
/* harmony import */ var _videogular_ngx_videogular_buffering__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! @videogular/ngx-videogular/buffering */ "VKRg");
/* harmony import */ var _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! @videogular/ngx-videogular/controls */ "v2j/");
/* harmony import */ var _shared_components_dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./shared/components/dialog-box/dialog-box.component */ "PXIg");
/* harmony import */ var _shared_components_dropzone_dropzone_component__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./shared/components/dropzone/dropzone.component */ "lqgp");
/* harmony import */ var _ui_instructor_assignment_edit_individual_assignment_edit_individual_component__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./ui/instructor/assignment-edit-individual/assignment-edit-individual.component */ "JagH");
/* harmony import */ var _shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./shared/components/confirm-modal/confirm-modal.component */ "d2bA");
/* harmony import */ var _ui_admin_account_edit_form_account_edit_form_component__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./ui/admin/account-edit-form/account-edit-form.component */ "IruG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! @angular/router */ "tyNb");





// Firebase, Firestore




// Angular Material Components






























// MDB / NGD Bootstrap


// Shared Components




// Admin's Components





// Form modules











































// import {VideoPlayerComponent} from './shared/components/video-player/video-player.component';
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_80__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_80__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            ngx_dropzone__WEBPACK_IMPORTED_MODULE_66__["NgxDropzoneModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_50__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_50__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_60__["MatNativeDateModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_17__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__["MatSlideToggleModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__["MatToolbarModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__["MatStepperModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__["MatTabsModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__["MatExpansionModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_28__["MatButtonToggleModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__["MatChipsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__["MatIconModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_32__["MatProgressBarModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__["MatDialogModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__["MatTooltipModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__["MatSnackBarModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_38__["MatPaginatorModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_50__["FormsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].firebase, 'Synchrony'),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorageModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["MDBBootstrapModule"].forRoot(),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_40__["NgbModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_51__["ToastrModule"].forRoot({
                timeOut: 3500,
                positionClass: 'toast-top-center',
                preventDuplicates: true,
            }),
            ngx_csv_parser__WEBPACK_IMPORTED_MODULE_52__["NgxCsvParserModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_63__["FlexLayoutModule"],
            ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_64__["NgxExtendedPdfViewerModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_68__["TranslateModule"].forRoot(),
            _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_71__["VgCoreModule"],
            _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_74__["VgControlsModule"],
            _videogular_ngx_videogular_overlay_play__WEBPACK_IMPORTED_MODULE_72__["VgOverlayPlayModule"],
            _videogular_ngx_videogular_buffering__WEBPACK_IMPORTED_MODULE_73__["VgBufferingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_80__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_41__["HeaderComponent"],
        _ui_admin_account_create_account_create_component__WEBPACK_IMPORTED_MODULE_45__["AccountCreateComponent"],
        _shared_components_cards_cards_component__WEBPACK_IMPORTED_MODULE_42__["CardsComponent"],
        _ui_home_login_login_component__WEBPACK_IMPORTED_MODULE_44__["LoginComponent"],
        _ui_admin_account_delete_account_delete_component__WEBPACK_IMPORTED_MODULE_47__["AccountDeleteComponent"],
        _ui_home_update_password_update_password_update_password_component__WEBPACK_IMPORTED_MODULE_43__["UpdatePasswordComponent"],
        _ui_admin_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_48__["AdminHomeComponent"],
        _ui_admin_freelance_wage_freelance_wage_component__WEBPACK_IMPORTED_MODULE_49__["FreelanceWageComponent"],
        _ui_instructor_instructor_home_instructor_home_component__WEBPACK_IMPORTED_MODULE_53__["InstructorHomeComponent"],
        _ui_instructor_assignment_create_assignment_create_component__WEBPACK_IMPORTED_MODULE_54__["AssignmentCreateComponent"],
        _ui_instructor_assignment_edit_assignment_edit_component__WEBPACK_IMPORTED_MODULE_55__["AssignmentEditComponent"],
        _ui_instructor_assignment_mark_assignment_mark_component__WEBPACK_IMPORTED_MODULE_56__["AssignmentMarkComponent"],
        _ui_instructor_assignment_mark_individual_assignment_mark_individual_component__WEBPACK_IMPORTED_MODULE_62__["AssignmentMarkIndividualComponent"],
        _ui_student_student_home_student_home_component__WEBPACK_IMPORTED_MODULE_57__["StudentHomeComponent"],
        _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_58__["TableComponent"],
        _shared_components_input_dropdown_select_input_dropdown_select_component__WEBPACK_IMPORTED_MODULE_59__["InputDropdownSelectComponent"],
        _ui_admin_account_edit_account_edit_component__WEBPACK_IMPORTED_MODULE_46__["AccountEditComponent"],
        _shared_components_input_select_input_select_component__WEBPACK_IMPORTED_MODULE_61__["InputSelectComponent"],
        _shared_components_videojs_record_videojs_record_component__WEBPACK_IMPORTED_MODULE_65__["VideojsRecordComponent"],
        _ui_student_assignment_view_assignment_view_component__WEBPACK_IMPORTED_MODULE_67__["AssignmentViewComponent"],
        _ui_student_assignment_submit_individual_assignment_submit_individual_component__WEBPACK_IMPORTED_MODULE_69__["AssignmentSubmitIndividualComponent"],
        _ui_student_assignment_feedback_individual_assignment_feedback_individual_component__WEBPACK_IMPORTED_MODULE_70__["AssignmentFeedbackIndividualComponent"],
        _shared_components_dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_75__["DialogBoxComponent"],
        _shared_components_dropzone_dropzone_component__WEBPACK_IMPORTED_MODULE_76__["DropzoneComponent"],
        _ui_instructor_assignment_edit_individual_assignment_edit_individual_component__WEBPACK_IMPORTED_MODULE_77__["AssignmentEditIndividualComponent"],
        _shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_78__["ConfirmModalComponent"],
        _ui_admin_account_edit_form_account_edit_form_component__WEBPACK_IMPORTED_MODULE_79__["AccountEditFormComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        ngx_dropzone__WEBPACK_IMPORTED_MODULE_66__["NgxDropzoneModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_50__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_50__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_60__["MatNativeDateModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_17__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__["MatSlideToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__["MatToolbarModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__["MatStepperModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__["MatTabsModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__["MatExpansionModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_28__["MatButtonToggleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__["MatChipsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_32__["MatProgressBarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__["MatDialogModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__["MatTooltipModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__["MatSnackBarModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_38__["MatPaginatorModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_50__["FormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorageModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["MDBRootModule"], // MDBootstrap
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_40__["NgbModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_51__["ToastrModule"], ngx_csv_parser__WEBPACK_IMPORTED_MODULE_52__["NgxCsvParserModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_63__["FlexLayoutModule"],
        ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_64__["NgxExtendedPdfViewerModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_68__["TranslateModule"], _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_71__["VgCoreModule"],
        _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_74__["VgControlsModule"],
        _videogular_ngx_videogular_overlay_play__WEBPACK_IMPORTED_MODULE_72__["VgOverlayPlayModule"],
        _videogular_ngx_videogular_buffering__WEBPACK_IMPORTED_MODULE_73__["VgBufferingModule"]] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_80__["ɵɵsetComponentScope"](_shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_58__["TableComponent"], [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_81__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_81__["NgIf"], _shared_components_dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_75__["DialogBoxComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["MdbBtnDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["WavesDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_82__["RouterLink"], _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatRow"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinner"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_38__["MatPaginator"]], [_angular_common__WEBPACK_IMPORTED_MODULE_81__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_81__["TitleCasePipe"]]);


/***/ }),

/***/ "aOO9":
/*!*************************************************************************!*\
  !*** ./src/app/ui/student/assignment-view/assignment-view.component.ts ***!
  \*************************************************************************/
/*! exports provided: AssignmentViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentViewComponent", function() { return AssignmentViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_services_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/crud.service */ "+/AT");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/header/header.component */ "aZ8m");
/* harmony import */ var _shared_components_input_dropdown_select_input_dropdown_select_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/input-dropdown-select/input-dropdown-select.component */ "x/FY");
/* harmony import */ var _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/table/table.component */ "Xv+k");










class AssignmentViewComponent {
    constructor(activatedRoute, crudservice, translateService) {
        this.activatedRoute = activatedRoute;
        this.crudservice = crudservice;
        this.translateService = translateService;
        this.displayedColumns = ['assignment_name', 'assignment_due_datetime', 'assignment_submission_status', 'assignment_instructor', 'action'];
        this.actionType = 'assignmentView';
        this.completionStatusOptions = ['Ongoing', 'Completed'];
        this.submissionStatusOptions = ['Pending Submission', 'Submitted'];
        this.selectedCompletionStatusOptions = [];
        this.selectedSubmissionStatusOptions = [];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loggedInAccount = JSON.parse(sessionStorage.getItem('account'));
            // console.log(loggedInAccount);
            this.assignments = yield this.crudservice.read('assignments', 'school_instrument_level', 'array-contains-any', loggedInAccount.school_instrument_level).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).toPromise();
            this.translateService.use('en');
            const datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"](this.translateService.currentLang);
            for (const assignment of this.assignments) {
                assignment.assignment_name = assignment.name;
                assignment.instructor = yield this.crudservice.readByDocId('accounts', assignment.instructor_account_doc_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).toPromise();
                assignment.submission_status = 'Pending Submission';
                const assignmentSubmission = yield this.crudservice.read('assignment_submissions', 'student_doc_id', '==', loggedInAccount.docId, 'assignment_doc_id', '==', assignment.docId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).toPromise();
                // console.log(assignmentSubmission);
                assignment.isOverDueDate = new Date() > assignment.due_datetime.toDate();
                if (assignmentSubmission.length > 0) {
                    assignment.submission_status = 'Last submitted on ' + datePipe.transform(assignmentSubmission[0].submitted_datetime.toDate(), 'EEEE, MMMM d, y, h:mm:ss a');
                    // TODO: Get the latest assignment submission
                    assignment.assignmentSubmission = assignmentSubmission[0];
                }
                else {
                    assignment.submission_status = assignment.isOverDueDate ? 'Missing Submission' : 'Pending Submission';
                }
            }
            this.dataSource = this.assignments;
        });
    }
    filterData($event, type) {
        // console.log($event.value);
        switch (type) {
            case 'Completion Status':
                this.selectedCompletionStatusOptions = $event.value;
                break;
            case 'Submission Status':
                this.selectedSubmissionStatusOptions = $event.value;
                break;
        }
        const filteredAssignments = [];
        for (const assignment of this.assignments) {
            if ((this.selectedCompletionStatusOptions.length === 0 ||
                (this.selectedCompletionStatusOptions.includes('Ongoing') && !assignment.isOverDueDate) ||
                (this.selectedCompletionStatusOptions.includes('Completed') && assignment.isOverDueDate)) &&
                (this.selectedSubmissionStatusOptions.length === 0 ||
                    (this.selectedSubmissionStatusOptions.includes('Pending Submission') && assignment.submission_status === 'Pending Submission') ||
                    (this.selectedSubmissionStatusOptions.includes('Submitted') && assignment.submission_status !== 'Pending Submission'))) {
                filteredAssignments.push(assignment);
            }
        }
        this.dataSource = filteredAssignments;
        // const filteredAssignmentSubmissions: Array<AssignmentSubmission> = [];
        // for (const assignmentSubmission of this.assignmentSubmissions) {
        //   for (const schoolInstrumentLevel of assignmentSubmission.school_instrument_level) {
        //     const schoolInstrumentLevelArr = schoolInstrumentLevel.split('_');
        //     const school = schoolInstrumentLevelArr[0];
        //     const instrument = schoolInstrumentLevelArr[1];
        //     const level = schoolInstrumentLevelArr[2];
        //     if (
        // (this.selectedSchoolOptions.length === 0 || this.selectedSchoolOptions.includes(school)) &&
        // (this.selectedInstrumentOptions.length === 0 || this.selectedInstrumentOptions.includes(instrument)) &&
        // (this.selectedLevelOptions.length === 0 ||this.selectedLevelOptions.includes(level))
        //     ) {
        //       filteredAssignmentSubmissions.push(assignmentSubmission);
        //     }
        //   }
        //   this.dataSource = filteredAssignmentSubmissions;
    }
}
AssignmentViewComponent.ɵfac = function AssignmentViewComponent_Factory(t) { return new (t || AssignmentViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_crud_service__WEBPACK_IMPORTED_MODULE_5__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"])); };
AssignmentViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AssignmentViewComponent, selectors: [["app-assignment-view"]], decls: 7, vars: 7, consts: [[1, "assignment-view-wrapper", "wrapper-padding", "max-width-section"], [1, "mb-3"], [3, "inputDataList", "name", "outputData"], [3, "dataSource", "displayedColumns", "actionType"]], template: function AssignmentViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "My Assignments");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "app-input-dropdown-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("outputData", function AssignmentViewComponent_Template_app_input_dropdown_select_outputData_4_listener($event) { return ctx.filterData($event, "Completion Status"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "app-input-dropdown-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("outputData", function AssignmentViewComponent_Template_app_input_dropdown_select_outputData_5_listener($event) { return ctx.filterData($event, "Submission Status"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "app-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("inputDataList", ctx.completionStatusOptions)("name", "Completion Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("inputDataList", ctx.submissionStatusOptions)("name", "Submission Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns)("actionType", ctx.actionType);
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _shared_components_input_dropdown_select_input_dropdown_select_component__WEBPACK_IMPORTED_MODULE_8__["InputDropdownSelectComponent"], _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_9__["TableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc3NpZ25tZW50LXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "aZ8m":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "dbUT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");





function HeaderComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "active": a0 }; };
function HeaderComponent_ul_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Account & Grouping Creation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Edit Account & Grouping ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Delete Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Calculate Wages ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r3.url == "/admin/account/create"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r3.url == "/admin/account/edit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r3.url == "/admin/account/delete"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx_r3.url == "/admin/freelance"));
} }
function HeaderComponent_ul_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " New Assignment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Edit Assignment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Mark Assignment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r4.url == "/instructor/assignment/create"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r4.url == "/instructor/assignment/edit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx_r4.url == "/instructor/assignment/mark"));
} }
function HeaderComponent_ul_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " My Assignments ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r5.url == "/student/assignment/view"));
} }
function HeaderComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Log out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.validate_session();
        this.url = this.router.url;
    }
    validate_session() {
        if (sessionStorage.getItem('account') != null) {
            this.accountDetail = JSON.parse(sessionStorage.getItem('account'));
            this.userRole = this.accountDetail.role;
            // console.log(this.accountDetail);
        }
        else {
            this.router.navigate(['/login']);
        }
        /* // === to be deleted (KIV) === //
        if(sessionStorage.getItem('role') != undefined || sessionStorage.getItem('role') != null){
            this.userRole = sessionStorage.getItem('role')
            console.log(this.userRole)
        } else {
            this.router.navigate(['/login'])
        }
        */
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 16, vars: 6, consts: [["SideClass", "navbar navbar-expand-lg navbar-dark indigo"], ["class", "navbar-brand", 4, "ngIf"], ["class", "navbar-nav mr-auto", 4, "ngIf"], [1, "navbar-nav", "ml-auto", "nav-flex-icons"], ["dropdown", "", 1, "nav-item", "dropdown"], ["dropdownToggle", "", "mdbWavesEffect", "", "type", "button", "mdbWavesEffect", "", 1, "nav-link", "dropdown-toggle", "waves-light"], ["fas", "", "icon", "user"], [1, "caret"], ["class", "dropdown-menu dropdown-menu-right dropdown dropdown-primary", "role", "menu", 4, "dropdownMenu"], [1, "navbar-brand"], ["src", "../../../../../assets/images/Logo.png", "routerLink", "/admin/home", "height", "40", "alt", ""], ["src", "../../../../../assets/images/Logo.png", "routerLink", "/instructor/home", "height", "40", "alt", ""], ["src", "../../../../../assets/images/Logo.png", "routerLink", "/student/assignment/view", "height", "40", "alt", ""], [1, "navbar-nav", "mr-auto"], [1, "nav-item", 3, "ngClass"], ["routerLink", "/admin/account/create", "mdbWavesEffect", "", 1, "nav-link", "waves-light"], ["routerLink", "/admin/account/edit", "mdbWavesEffect", "", 1, "nav-link", "waves-light"], ["routerLink", "/admin/account/delete", "mdbWavesEffect", "", 1, "nav-link", "waves-light"], ["routerLink", "/admin/freelance", "mdbWavesEffect", "", 1, "nav-link", "waves-light"], [1, "nav-item", "active", 3, "ngClass"], ["routerLink", "/instructor/assignment/create", "mdbWavesEffect", "", 1, "nav-link", "waves-light"], ["routerLink", "/instructor/assignment/edit", "mdbWavesEffect", "", 1, "nav-link", "waves-light"], ["routerLink", "/instructor/assignment/mark", "mdbWavesEffect", "", 1, "nav-link", "waves-light"], ["routerLink", "/student/assignment/view", "mdbWavesEffect", "", 1, "nav-link", "waves-light"], ["role", "menu", 1, "dropdown-menu", "dropdown-menu-right", "dropdown", "dropdown-primary"], ["mdbWavesEffect", "", "routerLink", "/login", 1, "dropdown-item", "waves-light"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-navbar-brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_a_2_Template, 2, 0, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_a_3_Template, 2, 0, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_a_4_Template, 2, 0, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_ul_6_Template, 13, 12, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_ul_7_Template, 10, 9, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HeaderComponent_ul_8_Template, 4, 3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mdb-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HeaderComponent_div_15_Template, 3, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userRole == "admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userRole == "instructor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userRole == "student");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userRole == "admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userRole == "instructor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userRole == "student");
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["LogoComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["LinksComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["BsDropdownDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["BsDropdownToggleDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["WavesDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["FasDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["BsDropdownMenuDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["DefaultClassDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "cxbk":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    firebase: {
        apiKey: "AIzaSyA_bzSe5zt66gNGTqOGjXNhtf7IIfgjTUE",
        authDomain: "synchrony-581ed.firebaseapp.com",
        projectId: "synchrony-581ed",
        storageBucket: "synchrony-581ed.appspot.com",
        messagingSenderId: "457246691317",
        appId: "1:457246691317:web:ad586375c8b8ee8d101abc",
        measurementId: "G-YGYD6JY9D2"
    }
};


/***/ }),

/***/ "d2bA":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/confirm-modal/confirm-modal.component.ts ***!
  \****************************************************************************/
/*! exports provided: ConfirmModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmModalComponent", function() { return ConfirmModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _core_services_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/crud.service */ "+/AT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");












const _c0 = ["confirmModal"];
function ConfirmModalComponent_ng_template_1_div_8_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Score cannot be empty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ConfirmModalComponent_ng_template_1_div_8_small_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" Previous Score: ", ctx_r7.assignmentSubmission.grade, " \u00A0 Previous Feedback: ", ctx_r7.assignmentSubmission.feedback, " ");
} }
function ConfirmModalComponent_ng_template_1_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Please input score (0 to 100)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ConfirmModalComponent_ng_template_1_div_8_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.grade = $event; })("change", function ConfirmModalComponent_ng_template_1_div_8_Template_input_change_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); ctx_r10.grade < 0 ? ctx_r10.grade = 0 : ctx_r10.grade; return ctx_r10.grade > 100 ? ctx_r10.grade = 100 : ctx_r10.grade; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ConfirmModalComponent_ng_template_1_div_8_mat_error_7_Template, 2, 0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Feedback");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "textarea", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ConfirmModalComponent_ng_template_1_div_8_Template_textarea_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r11.feedback = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ConfirmModalComponent_ng_template_1_div_8_small_11_Template, 2, 2, "small", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.grade);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.isGradeError && !ctx_r3.grade);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.feedback);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.assignmentSubmission && ctx_r3.assignmentSubmission.feedback);
} }
function ConfirmModalComponent_ng_template_1_div_9_ng_container_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Previously submitted instructor's feedback information");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Feedback Recording: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Score: ", ctx_r14.assignmentSubmission.grade, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Feedback: ", ctx_r14.assignmentSubmission.feedback == "" ? "No Feedback" : ctx_r14.assignmentSubmission.feedback, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r14.assignmentSubmission == null ? null : ctx_r14.assignmentSubmission.instructor_feedback_attachment, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r14.assignmentSubmission == null ? null : ctx_r14.assignmentSubmission.instructor_feedback_attachment_name, " ");
} }
function ConfirmModalComponent_ng_template_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Recording Steps ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " 1. Select the desired recording option. (Screen recording to record computer screen / Camera recording to record camera) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " 2. Click on the record button when you are ready to being recording ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " 3. Enable screen sharing/camera permissions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " 4. The recording will begin. Pause when necessary. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " 5. After recording, press stop and click submit feedback to send it to the respective student");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Student attachments ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Scoresheet pdf: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Video recording : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 16, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ConfirmModalComponent_ng_template_1_div_9_ng_container_27_Template, 12, 4, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r4.assignmentSubmission == null ? null : ctx_r4.assignmentSubmission.student_attachment_scoresheet, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.assignmentSubmission == null ? null : ctx_r4.assignmentSubmission.student_attachment_scoresheet_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r4.assignmentSubmission == null ? null : ctx_r4.assignmentSubmission.student_attachment_recording, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.assignmentSubmission == null ? null : ctx_r4.assignmentSubmission.student_attachment_recording_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.assignmentSubmission && ctx_r4.assignmentSubmission.feedback_datetime != null);
} }
function ConfirmModalComponent_ng_template_1_div_11_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmModalComponent_ng_template_1_div_11_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const button_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const modal_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; return modal_r2.close(button_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ConfirmModalComponent_ng_template_1_div_11_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmModalComponent_ng_template_1_div_11_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const button_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const modal_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; return modal_r2.close(button_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Discard Changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ConfirmModalComponent_ng_template_1_div_11_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmModalComponent_ng_template_1_div_11_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const button_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const modal_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; return modal_r2.close(button_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ConfirmModalComponent_ng_template_1_div_11_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmModalComponent_ng_template_1_div_11_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const button_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const modal_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; return modal_r2.close(button_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r19.grade && ctx_r19.grade !== 0);
} }
function ConfirmModalComponent_ng_template_1_div_11_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmModalComponent_ng_template_1_div_11_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const button_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const modal_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; return modal_r2.close(button_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ConfirmModalComponent_ng_template_1_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ConfirmModalComponent_ng_template_1_div_11_button_1_Template, 2, 0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ConfirmModalComponent_ng_template_1_div_11_button_2_Template, 2, 0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ConfirmModalComponent_ng_template_1_div_11_button_3_Template, 2, 0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ConfirmModalComponent_ng_template_1_div_11_button_4_Template, 2, 1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ConfirmModalComponent_ng_template_1_div_11_button_5_Template, 2, 0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const button_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", button_r15 == "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", button_r15 == "discard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", button_r15 == "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", button_r15 == "submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", button_r15 == "ok");
} }
function ConfirmModalComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmModalComponent_ng_template_1_Template_button_click_3_listener() { const modal_r2 = ctx.$implicit; return modal_r2.dismiss("cross"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ConfirmModalComponent_ng_template_1_div_8_Template, 12, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ConfirmModalComponent_ng_template_1_div_9_Template, 28, 5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ConfirmModalComponent_ng_template_1_div_11_Template, 6, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.title == "Submit Feedback");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.title == "Recording Instructions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.buttons);
} }
class ConfirmModalComponent {
    constructor(modalService, 
    // private assignmentService: AssignmentService,
    // private accountService: AccountService,
    toastrService, crudService) {
        this.modalService = modalService;
        this.toastrService = toastrService;
        this.crudService = crudService;
        this.title = 'Confirm Modal';
        this.description = '';
        this.feedback = '';
        this.buttons = [];
        this.isGradeError = false;
        this.feedbackEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.responseEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    open(title, description, buttons, assignment = null, assignmentSubmission = null, account = null, assignmentDocId = '') {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.title = title;
            this.description = description;
            this.buttons = buttons;
            this.assignmentSubmission = assignmentSubmission;
            if (assignmentDocId !== '') {
                assignment = yield this.crudService.readByDocId('assignments', assignmentDocId)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                    .toPromise();
                // assignment = await this.assignmentService.getAssignment(assignmentDocId)
                //   .pipe(first())
                //   .toPromise();
            }
            this.modalService.open(this.confirmModal, { ariaLabelledBy: 'modal-basic-title' }).result.then((response) => {
                if (response === 'delete') {
                    // if (assignment) {
                    //   this.assignmentService.deleteAssignment(assignment.docId).then(r => {
                    //     this.toastrService.success('Deleted assignment successfully!', '', {positionClass: 'toast-top-center'});
                    //     console.log(r);
                    //   });
                    // }
                    // if (account) {
                    //   this.accountService.deleteAccount(account.docId).then(r => {
                    //     this.toastrService.success('Deleted account successfully!', '', {positionClass: 'toast-top-center'});
                    //     console.log(r);
                    //   });
                    // }
                }
                if (response === 'submit') {
                    if (!this.grade && this.grade !== 0) {
                        this.isGradeError = true;
                    }
                    else {
                        this.isGradeError = false;
                        this.feedbackEmit.emit([this.feedback, this.grade]);
                    }
                }
                this.responseEmit.emit(response);
            }, (reason) => {
                this.responseEmit.emit('close');
            });
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    ngOnInit() {
    }
}
ConfirmModalComponent.ɵfac = function ConfirmModalComponent_Factory(t) { return new (t || ConfirmModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_crud_service__WEBPACK_IMPORTED_MODULE_5__["CrudService"])); };
ConfirmModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ConfirmModalComponent, selectors: [["app-confirm-modal"]], viewQuery: function ConfirmModalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.confirmModal = _t.first);
    } }, outputs: { feedbackEmit: "feedbackEmit", responseEmit: "responseEmit" }, decls: 3, vars: 0, consts: [[1, "confirm-modal-wrapper"], ["confirmModal", ""], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [4, "ngIf"], [1, "modal-footer"], [4, "ngFor", "ngForOf"], ["appearance", "fill", 1, "example-full-width"], ["matInput", "", "placeholder", "", "value", "", "type", "number", "min", "0", "max", "100", 3, "ngModel", "ngModelChange", "change"], ["placeholder", "Enter your feedback here (Optional)", 1, "modal-content", "form-control", "mt-3", 3, "ngModel", "ngModelChange"], ["class", "form-text text-muted", 4, "ngIf"], [1, "form-text", "text-muted"], [1, "form-text"], ["target", "_blank", 3, "href"], ["scoresheet", ""], ["videoPlayer", ""], ["type", "button", "class", "btn btn-danger", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-success", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["type", "button", 1, "btn", "btn-success", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function ConfirmModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ConfirmModalComponent_ng_template_1_Template, 12, 5, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "dUrK":
/*!*************************************************************!*\
  !*** ./src/app/ui/admin/admin-home/admin-home.component.ts ***!
  \*************************************************************/
/*! exports provided: AdminHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHomeComponent", function() { return AdminHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/header/header.component */ "aZ8m");
/* harmony import */ var _shared_components_cards_cards_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/cards/cards.component */ "kkAW");



class AdminHomeComponent {
    constructor() {
        this.createTitle = "Account Create";
        this.editTitle = "Account Edit";
        this.deleteTitle = "Account Delete";
        this.freelanceTitle = "Freelance";
        this.createDescription = "Create new user accounts by uploading .csv files.";
        this.editDescription = "Edit existing account details such as name, school, and group.";
        this.deleteDescription = "Delete existing user accounts to remove user access to this application.";
        this.freelanceDescription = "Access the number of hours worked for freelance instuctors.";
        this.createLink = "admin/account/create";
        this.editLink = "admin/account/edit";
        this.deleteLink = "admin/account/delete";
        this.freelanceLink = "admin/freelance";
    }
    ngOnInit() {
    }
}
AdminHomeComponent.ɵfac = function AdminHomeComponent_Factory(t) { return new (t || AdminHomeComponent)(); };
AdminHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminHomeComponent, selectors: [["app-admin-home"]], decls: 12, vars: 12, consts: [[1, "container"], [1, "row"], [1, "col"], [3, "title", "description", "href"]], template: function AdminHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-cards", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-cards", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-cards", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-cards", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.createTitle)("description", ctx.createDescription)("href", ctx.createLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.editTitle)("description", ctx.editDescription)("href", ctx.editLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.deleteTitle)("description", ctx.deleteDescription)("href", ctx.deleteLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.freelanceTitle)("description", ctx.freelanceDescription)("href", ctx.freelanceLink);
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _shared_components_cards_cards_component__WEBPACK_IMPORTED_MODULE_2__["CardsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1ob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "hg8a":
/*!*********************************************************************!*\
  !*** ./src/app/ui/admin/account-create/account-create.component.ts ***!
  \*********************************************************************/
/*! exports provided: AccountCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountCreateComponent", function() { return AccountCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _app_core_models_account__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app/core/models/account */ "YzWa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var ngx_csv_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-csv-parser */ "U7/n");
/* harmony import */ var _core_services_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/crud.service */ "+/AT");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/header/header.component */ "aZ8m");
/* harmony import */ var _shared_components_dropzone_dropzone_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/dropzone/dropzone.component */ "lqgp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");












const _c0 = ["file"];
const _c1 = ["fileImportInput"];
function AccountCreateComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Uploading in process: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "mat-progress-bar", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AccountCreateComponent_ng_container_15_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AccountCreateComponent_ng_container_15_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", i_r5 + 1, ". ", error_r4, "");
} }
function AccountCreateComponent_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-error", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AccountCreateComponent_ng_container_15_span_3_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " encountered (No accounts were added to database): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, AccountCreateComponent_ng_container_15_div_5_Template, 3, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.errors.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.errors);
} }
class AccountCreateComponent {
    constructor(toastrService, ngxCsvParser, crudService) {
        this.toastrService = toastrService;
        this.ngxCsvParser = ngxCsvParser;
        this.crudService = crudService;
        this.csvRecords = [];
        this.errors = [];
        this.isUploading = false;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const singleAccount = yield this.crudService.readByDocId('accounts', '7hQyZTken7p6eSAR8MQB')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
                .toPromise();
            // console.log(singleAccount);
            const allAccounts = yield this.crudService.read('accounts').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).toPromise();
            // console.log(allAccounts.sort((a, b) => a.username.localeCompare(b.username)));
            const testAccounts = yield this.crudService.read('accounts', 'role', '==', 'student', 'school', '!=', 'NUS').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).toPromise();
            // console.log(testAccounts);
            const testAccounts2 = yield this.crudService.read('accounts', 'role', '==', 'student', 'school', '!=', 'NUS', 'first_name', '==', 'Carecci').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).toPromise();
            // console.log(testAccounts2);
            const deleteAccount = yield this.crudService.read('accounts', 'username', '==', 'student4').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).toPromise();
            if (deleteAccount.length > 0) {
                yield this.crudService.delete('accounts', deleteAccount[0].docId);
            }
        });
    }
    onCloseModal(response) {
        // console.log(response);
    }
    uploadFile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.accountFile) {
                this.errors = [];
                // column is not found at all
                let missingColumns = ['username', 'role', 'school', 'school_instrument_level', 'first_name', 'last_name', 'password'];
                this.isUploading = true;
                // Parse the file you want to select for the operation along with the configuration
                yield this.ngxCsvParser.parse(this.accountFile, { header: true, delimiter: ',' })
                    .pipe().subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    // console.log('Result', result);
                    this.csvRecords = result;
                    if (this.csvRecords.length < 2) {
                        this.errors.push('Less than 2 rows of data (1 row for column header and 1 row for the actual account data)');
                    }
                    else {
                        for (const [key, value] of Object.entries(this.csvRecords[0])) {
                            missingColumns = missingColumns.filter(val => val !== key);
                        }
                        if (missingColumns.length > 0) {
                            this.errors.push('Missing columns headers: ' + Array.from(missingColumns).join(', '));
                        }
                    }
                    if (this.errors.length === 0) {
                        let i = 2;
                        for (const csvRecord of this.csvRecords) {
                            const accounts = yield this.crudService.read('accounts', 'username', '==', csvRecord.username).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).toPromise();
                            // console.log(accounts);
                            const account = {
                                username: csvRecord.username,
                                role: csvRecord.role.toLowerCase(),
                                school: csvRecord.school.split(','),
                                school_instrument_level: csvRecord.school_instrument_level.split(','),
                                first_name: csvRecord.first_name,
                                last_name: csvRecord.last_name,
                                password: csvRecord.password,
                                first_login: true,
                                is_delete: false
                            };
                            // console.log(account);
                            // value in the column is empty even though it is required
                            const emptyColumns = [];
                            for (const [key, value] of Object.entries(account)) {
                                if (value === '' ||
                                    ((key === 'school' || key === 'school_instrument_level')
                                        && account.role !== 'admin' && value.length === 1 && value[0] === '')) {
                                    emptyColumns.push(key);
                                }
                            }
                            // console.log(emptyColumns);
                            if (emptyColumns.length > 0) {
                                this.errors.push('Row ' + i + ' has missing values for the following columns: ' + Array.from(emptyColumns).join(', '));
                            }
                            if (account.role !== _app_core_models_account__WEBPACK_IMPORTED_MODULE_2__["Role"].invalid && !['admin', 'instructor', 'student'].includes(account.role)) {
                                this.errors.push('Row ' + i + ' has illegal values for role column (Only admin, instructor or student is accepted)');
                            }
                            if (account.password.length > 0 && account.password.length < 5) {
                                this.errors.push('Row ' + i + ' does not meet the minimum length requirement for password (5)');
                            }
                            // Stop the creation/updating of ALL accounts as long as there is a problem with 1 of the account
                            if (this.errors.length === 0) {
                                if (accounts.length === 0) {
                                    // console.log(account);
                                    yield this.crudService.create('accounts', account); // .then(r => {const ownerDocId = r; } );
                                }
                                else {
                                    yield this.crudService.update('accounts', accounts[0].docId, account);
                                }
                            }
                            i++;
                        }
                        if (this.errors.length === 0) {
                            this.toastrService.success('Uploaded data to database successfully!', '', { positionClass: 'toast-top-center' });
                        }
                        else {
                            this.toastrService.error('Errors encountered uploading the file!', '', { positionClass: 'toast-top-center' });
                        }
                    }
                    else {
                        this.toastrService.error('Errors encountered uploading the file!', '', { positionClass: 'toast-top-center' });
                    }
                    this.isUploading = false;
                }), (error) => {
                    // console.log('Error', error);
                    this.isUploading = false;
                    this.toastrService.error('Incorrect file format!', '', { positionClass: 'toast-top-center' });
                });
            }
            else {
                this.toastrService.error('Please upload a file!', '', { positionClass: 'toast-top-center' });
            }
        });
    }
}
AccountCreateComponent.ɵfac = function AccountCreateComponent_Factory(t) { return new (t || AccountCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_csv_parser__WEBPACK_IMPORTED_MODULE_5__["NgxCsvParser"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_crud_service__WEBPACK_IMPORTED_MODULE_6__["CrudService"])); };
AccountCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AccountCreateComponent, selectors: [["app-account-create"]], viewQuery: function AccountCreateComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.file = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.fileImportInput = _t.first);
    } }, decls: 16, vars: 7, consts: [[1, "account-create-wrapper", "wrapper-padding"], [1, "mb-3"], [1, "mb-2"], [1, "mt-2", "form-text", "text-muted"], [3, "href"], [3, "label", "acceptedFileTypes", "acceptMultipleFiles", "fileEmit"], [1, "mt-3", "mb-3"], [1, "btn", "btn-info", 3, "click"], [4, "ngIf"], ["id", "progress-bar", "mode", "indeterminate", 1, "mt-3", "mb-3"], [4, "ngFor", "ngForOf"]], template: function AccountCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Account & Grouping Creation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Please upload a file with account data in accordance to the format provided in the sample .csv file below. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Sample file:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "app-dropzone", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("fileEmit", function AccountCreateComponent_Template_app_dropzone_fileEmit_10_listener($event) { return ctx.accountFile = $event[0]; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AccountCreateComponent_Template_button_click_12_listener() { return ctx.uploadFile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, AccountCreateComponent_div_14_Template, 3, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, AccountCreateComponent_ng_container_15_Template, 6, 2, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", "../../../assets/csv/accounts_sample.csv", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", "accounts_sample.csv", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", "Please drag and drop your attachment files for this assignment here.\n  (Accepted format: .pdf)")("acceptedFileTypes", ".csv")("acceptMultipleFiles", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isUploading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.errors.length > 0 && !ctx.isUploading);
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _shared_components_dropzone_dropzone_component__WEBPACK_IMPORTED_MODULE_8__["DropzoneComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBar"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LWNyZWF0ZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "kkAW":
/*!************************************************************!*\
  !*** ./src/app/shared/components/cards/cards.component.ts ***!
  \************************************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CardsComponent {
    constructor() { }
    ngOnInit() {
    }
}
CardsComponent.ɵfac = function CardsComponent_Factory(t) { return new (t || CardsComponent)(); };
CardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardsComponent, selectors: [["app-cards"]], inputs: { title: "title", description: "description", imgsrc: "imgsrc", href: "href" }, decls: 8, vars: 4, consts: [[1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "btn", "btn-primary", "stretched-link", 3, "href"]], template: function CardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "lqgp":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/dropzone/dropzone.component.ts ***!
  \******************************************************************/
/*! exports provided: DropzoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropzoneComponent", function() { return DropzoneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-dropzone */ "kvL/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function DropzoneComponent_ngx_dropzone_preview_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-dropzone-preview", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function DropzoneComponent_ngx_dropzone_preview_4_Template_ngx_dropzone_preview_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const f_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onRemove(f_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngx-dropzone-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("removable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", f_r1.name, " (", f_r1.type, ")");
} }
class DropzoneComponent {
    constructor() {
        this.files = [];
        this.fileEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onChange(event) {
        if (!this.acceptMultipleFiles) {
            this.files = [];
        }
        this.files.push(...event.addedFiles);
        this.fileEmit.emit(this.files);
    }
    onRemove(event) {
        this.files.splice(this.files.indexOf(event), 1);
    }
}
DropzoneComponent.ɵfac = function DropzoneComponent_Factory(t) { return new (t || DropzoneComponent)(); };
DropzoneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DropzoneComponent, selectors: [["app-dropzone"]], inputs: { acceptMultipleFiles: "acceptMultipleFiles", label: "label", acceptedFileTypes: "acceptedFileTypes" }, outputs: { fileEmit: "fileEmit" }, decls: 5, vars: 4, consts: [[1, "dropzone-wrapper"], [3, "multiple", "accept", "change"], [3, "removable", "removed", 4, "ngFor", "ngForOf"], [3, "removable", "removed"]], template: function DropzoneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngx-dropzone", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DropzoneComponent_Template_ngx_dropzone_change_1_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ngx-dropzone-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DropzoneComponent_ngx_dropzone_preview_4_Template, 3, 3, "ngx-dropzone-preview", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", ctx.acceptMultipleFiles)("accept", ctx.acceptedFileTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.label, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.files);
    } }, directives: [ngx_dropzone__WEBPACK_IMPORTED_MODULE_1__["NgxDropzoneComponent"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_1__["ɵb"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_1__["NgxDropzonePreviewComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcm9wem9uZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "qlqg":
/*!**************************************************************************************************!*\
  !*** ./src/app/ui/instructor/assignment-mark-individual/assignment-mark-individual.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: AssignmentMarkIndividualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentMarkIndividualComponent", function() { return AssignmentMarkIndividualComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_components_videojs_record_videojs_record_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/videojs-record/videojs-record.component */ "UgFz");
/* harmony import */ var ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-extended-pdf-viewer */ "E1wN");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "JZFu");
/* harmony import */ var _shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/confirm-modal/confirm-modal.component */ "d2bA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _core_services_crud_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/services/crud.service */ "+/AT");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-bootstrap-md */ "dbUT");





var Timestamp = firebase__WEBPACK_IMPORTED_MODULE_4__["default"].firestore.Timestamp;
















const _c0 = ["scoresheet"];
const _c1 = ["feedbackAttachment"];
const _c2 = ["videoInput"];
const _c3 = ["cameraVideojs"];
const _c4 = ["screenVideojs"];
function AssignmentMarkIndividualComponent_h1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h1", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("Mark ", ctx_r0.assignment.name, " for ", ctx_r0.student.last_name + " " + ctx_r0.student.first_name, "");
} }
function AssignmentMarkIndividualComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "embed", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass.lt-md", "reduced-height")("src", ctx_r1.pdfUrl, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeResourceUrl"]);
} }
function AssignmentMarkIndividualComponent_app_videojs_record_9_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-videojs-record", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("startedRecordingEmit", function AssignmentMarkIndividualComponent_app_videojs_record_9_Template_app_videojs_record_startedRecordingEmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r12.isRecording = true; })("recordingEmit", function AssignmentMarkIndividualComponent_app_videojs_record_9_Template_app_videojs_record_recordingEmit_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r14.updateFeedbackAttachment($event); })("feedbackEmit", function AssignmentMarkIndividualComponent_app_videojs_record_9_Template_app_videojs_record_feedbackEmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r15.submitFeedback(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("selectedRecordingOption", "Camera Recording");
} }
function AssignmentMarkIndividualComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Select a recording option ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-select", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("valueChange", function AssignmentMarkIndividualComponent_div_10_Template_mat_select_valueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r16.selectedRecordingOption = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Screen Recording");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Camera Recording");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r3.selectedRecordingOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", "Screen Recording");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", "Camera Recording");
} }
function AssignmentMarkIndividualComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AssignmentMarkIndividualComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r18.startRecording(ctx_r18.isRecorded); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r4.isRecorded ? "Record again" : "Record", " ");
} }
function AssignmentMarkIndividualComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AssignmentMarkIndividualComponent_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r20.pauseRecording(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Pause");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AssignmentMarkIndividualComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AssignmentMarkIndividualComponent_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r22.resumeRecording(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Resume");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AssignmentMarkIndividualComponent_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AssignmentMarkIndividualComponent_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r24.stopRecording(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Stop");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AssignmentMarkIndividualComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AssignmentMarkIndividualComponent_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r26.submitFeedback(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Submit Feedback");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AssignmentMarkIndividualComponent_app_videojs_record_19_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-videojs-record", 32, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("startedRecordingEmit", function AssignmentMarkIndividualComponent_app_videojs_record_19_Template_app_videojs_record_startedRecordingEmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r29.isRecording = true; })("recordingEmit", function AssignmentMarkIndividualComponent_app_videojs_record_19_Template_app_videojs_record_recordingEmit_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r31.updateFeedbackAttachment($event); })("feedbackEmit", function AssignmentMarkIndividualComponent_app_videojs_record_19_Template_app_videojs_record_feedbackEmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r32.submitFeedback(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("selectedRecordingOption", "Screen Recording");
} }
const _c5 = function (a0) { return { "invisible": a0 }; };
function AssignmentMarkIndividualComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Click ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "a", null, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "\u00A0here\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " to download the recording ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](1, _c5, !ctx_r10.isRecorded));
} }
// import {VideoPlayerComponent} from '../../../shared/components/video-player/video-player.component';
class AssignmentMarkIndividualComponent {
    constructor(router, toastrService, 
    // private httpClient: HttpClient,
    afStorage, crudService, domSanitizer) {
        this.router = router;
        this.toastrService = toastrService;
        this.afStorage = afStorage;
        this.crudService = crudService;
        this.domSanitizer = domSanitizer;
        this.contentEditable = true;
        this.selectedRecordingOption = 'Screen Recording';
        this.isRecording = false;
        this.isPaused = false;
        this.isRecorded = false;
        this.recordedOption = '';
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.assignmentSubmission = yield this.crudService.readByDocId('assignment_submissions', this.assignmentSubmissionDocId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).toPromise();
            this.assignment = yield this.crudService.readByDocId('assignments', this.assignmentSubmission.assignment_doc_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).toPromise();
            this.pdfUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.assignmentSubmission.student_attachment_scoresheet);
            this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.assignmentSubmission.student_attachment_recording);
            // console.log(this.pdfUrl);
            // console.log(this.videoUrl);
            // this.pdfUrl = this.domSanitizer.sanitize(SecurityContext.RESOURCE_URL,
            //   this.domSanitizer.bypassSecurityTrustResourceUrl(this.assignmentSubmission.student_attachment_scoresheet));
            // console.log(this.pdfUrl);
            this.student = yield this.crudService.readByDocId('accounts', this.assignmentSubmission.student_doc_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).toPromise();
            // this.assignmentSubmission = await this.assignmentSubmissionService.getAssignmentSubmission(this.assignmentSubmissionDocId)
            //   .pipe(first())
            //   .toPromise();
            // this.assignment = await this.assignmentService.getAssignment(this.assignmentSubmission.assignmentDocId)
            //   .pipe(first())
            //   .toPromise();
            // this.student = await this.studentService.getStudent(this.assignmentSubmission.studentDocId)
            //   .pipe(first())
            //   .toPromise();
            // this.scoresheet.nativeElement.click();
            // tslint:disable-next-line:max-line-length
            // this.httpClient.get('https://firebasestorage.googleapis.com/v0/b/synchrony-8287c.appspot.com/o/assignment_submissions%2FExercises%20for%20Binary%20Trees%20(Answer%20Key).pdf', {responseType: 'blob', headers: {Accept: 'application/pdf'}})
            //   .subscribe(blob => {
            //     saveAs(blob, 'download.pdf');
            //   });
            // this.srcObj = { url: 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf',
            //   withCredentials: true
            // };
            // tslint:disable-next-line:max-line-length
            // this.pdfUrl = 'https://firebasestorage.googleapis.com/v0/b/synchrony-8287c.appspot.com/o/assignment_submissions%2FExercises%20for%20Binary%20Trees%20(Answer%20Key).pdf?alt=media&token=6baeba04-90b0-45e6-8bbb-2e6b90c54abf';
            // tslint:disable-next-line:max-line-length
            // this.pdfUrl = 'https://firebasestorage.googleapis.com/v0/b/synchrony-8287c.appspot.com/o/assignment_submissions%2FExercises%20for%20Binary%20Trees%20(Answer%20Key).pdf?alt=media&token=e074eec1-85f5-4898-b057-734cfb405a2d';
            // this.pdfUrl = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
            // this.pdfUrl = 'gs://synchrony-8287c.appspot.com/assignment_submissions/Exercises for Binary Trees (Answer Key).pdf';
            // console.log(this.pdfUrl);
            // this.downloadFile();
        });
    }
    // public downloadFile(): void {
    //   // let url = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
    //   let url = 'https://firebasestorage.googleapis.com/v0/b/synchrony-8287c.appspot.com/
    //   o/assignment_submissions%2FExercises%20for%20Binary%20Trees%20(Answer%20Key).pdf?';
    //   const xhr = new XMLHttpRequest();
    //   xhr.responseType = 'blob';
    //   xhr.onload = (event) => {
    //     /* Create a new Blob object using the response
    //     *  data of the onload object.
    //     */
    //     const blob = new Blob([xhr.response], { type: 'image/jpg' });
    //     const a: any = document.createElement('a');
    //     a.style = 'display: none';
    //     document.body.appendChild(a);
    //     url = window.URL.createObjectURL(blob);
    //     a.href = url;
    //     a.download = 'aaa.pdf';
    //     a.click();
    //     window.URL.revokeObjectURL(url);
    //   };
    //   xhr.open('GET', url);
    //   xhr.send();
    // }
    onCloseModal(response) {
        // console.log(response);
        if (response === 'discard') {
            this.isRecording = true;
            this.isRecorded = false;
        }
    }
    onFeedback(input) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const filename = this.assignment.name + ' - ' + this.student.last_name + ' ' + this.student.first_name + '\'s Feedback.mp4';
            const path = 'feedbacks/' + filename;
            this.assignmentSubmission.instructor_feedback_attachment_name = filename;
            const task = this.afStorage.upload(path, this.recordedVideo);
            yield task.then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield result.ref.getDownloadURL().then((downloadUrl) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    // console.log(downloadUrl);
                    this.assignmentSubmission.instructor_feedback_attachment = downloadUrl;
                    this.assignmentSubmission.feedback = input[0];
                    this.assignmentSubmission.grade = input[1];
                    this.assignmentSubmission.feedback_datetime = Timestamp.fromDate(new Date());
                    yield this.crudService.update('assignment_submissions', this.assignmentSubmission.docId, this.assignmentSubmission);
                    // this.assignmentSubmissionService.updateAssignmentSubmission(this.assignmentSubmission.docId, this.assignmentSubmission)
                    //   .then(r => console.log(r));
                    this.toastrService.success('Added feedback successfully!', '', { positionClass: 'toast-top-center' });
                    this.router.navigate(['instructor/assignment/mark']);
                    // console.log(this.assignmentSubmission);
                }));
            }));
        });
    }
    onRecordClick() {
        if (this.isRecorded) {
            this.confirmModalComponent.open('Mark Assignment', 'Are you sure you want to record again? This will delete your previous recording.', ['close', 'discard'], null, this.assignmentSubmission);
        }
        else {
            this.videojsRecordComponent.startRecording();
            this.isRecording = true;
        }
    }
    startRecording(isRecorded) {
        // this.isRecording = true;
        // If the user is re-recording and did not change the recording option, no nee to ask for sharing permissions again
        if (isRecorded && this.selectedRecordingOption === this.recordedOption) {
            this.selectedRecordingOption === 'Camera Recording' ?
                this.cameraVideojs.startRerecording() : this.screenVideojs.startRerecording();
        }
        else {
            this.selectedRecordingOption === 'Camera Recording' ?
                this.cameraVideojs.startRecording() : this.screenVideojs.startRecording();
        }
        // this.player.record().start();
    }
    pauseRecording() {
        this.isPaused = true;
        this.selectedRecordingOption === 'Camera Recording' ?
            this.cameraVideojs.pauseRecording() : this.screenVideojs.pauseRecording();
        // this.player.record().pause();
    }
    resumeRecording() {
        this.isPaused = false;
        this.selectedRecordingOption === 'Camera Recording' ?
            this.cameraVideojs.resumeRecording() : this.screenVideojs.resumeRecording();
        // this.player.record().resume();
    }
    stopRecording() {
        this.isPaused = false;
        this.isRecording = false;
        this.isRecorded = true;
        this.selectedRecordingOption === 'Camera Recording' ?
            this.cameraVideojs.stopRecording() : this.screenVideojs.stopRecording();
        // this.player.record().stop();
    }
    submitFeedback() {
        this.confirmModalComponent.open('Submit Feedback', '', ['close', 'submit'], null, this.assignmentSubmission);
    }
    updateFeedbackAttachment($event) {
        this.recordedVideo = $event;
        this.isRecording = false;
        this.isRecorded = true;
        this.recordedOption = this.selectedRecordingOption;
        this.feedbackAttachment.nativeElement.href = URL.createObjectURL($event);
        this.feedbackAttachment.nativeElement.download = 'feedback.mp4';
    }
    onInstructionsClick() {
        this.confirmModalComponent.open('Recording Instructions', '', ['ok'], null, this.assignmentSubmission);
    }
    onGoBackClick() {
        this.router.navigate(['instructor/assignment/mark']);
    }
}
AssignmentMarkIndividualComponent.ɵfac = function AssignmentMarkIndividualComponent_Factory(t) { return new (t || AssignmentMarkIndividualComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_crud_service__WEBPACK_IMPORTED_MODULE_10__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"])); };
AssignmentMarkIndividualComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: AssignmentMarkIndividualComponent, selectors: [["app-assignment-mark-individual"]], viewQuery: function AssignmentMarkIndividualComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmModalComponent"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_shared_components_videojs_record_videojs_record_component__WEBPACK_IMPORTED_MODULE_2__["VideojsRecordComponent"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_3__["NgxExtendedPdfViewerComponent"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c4, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.confirmModalComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.scoresheet = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.feedbackAttachment = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.videojsRecordComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.videoInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.ngxExtendedPdfViewerComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.cameraVideojs = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.screenVideojs = _t.first);
    } }, inputs: { assignmentSubmissionDocId: "assignmentSubmissionDocId" }, decls: 22, vars: 13, consts: [[1, "assignment-mark-individual-wrapper"], ["class", "mb-1", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center", "fxLayoutGap", "16px", 1, "mb-3"], [1, "btn", "btn-info", 3, "click"], ["fxLayout", "row wrap", "fxLayoutGap", "32px grid", "fxLayoutAlign", "space-between", 1, "mb-2", "min-height"], [4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "center center", "fxFlex", "50", "fxFlex.lt-md", "100", 1, "h-95"], ["controls", "", 3, "ngClass", "src"], ["class", "h-100", 3, "selectedRecordingOption", "startedRecordingEmit", "recordingEmit", "feedbackEmit", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center", "class", "w-100", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center", 1, "w-100", "mb-2"], ["type", "button", "mdbBtn", "", "color", "success", 3, "click", 4, "ngIf"], ["type", "button", "mdbBtn", "", "color", "warning", 3, "click", 4, "ngIf"], ["type", "button", "mdbBtn", "", "color", "danger", 3, "click", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center"], ["type", "button", "mdbBtn", "", "color", "info", "rounded", "true", "mdbWavesEffect", "", 3, "click", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center", 1, "form-text", "mb-3"], ["class", "mb-3", 3, "selectedRecordingOption", "startedRecordingEmit", "recordingEmit", "feedbackEmit", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center", "class", "form-text mb-3", 3, "ngClass", 4, "ngIf"], [3, "responseEmit", "feedbackEmit"], [1, "mb-1"], ["fxLayout", "column", "fxFlex", "50", "fxFlex.lt-md", "100", 1, "h-100", 3, "ngClass.lt-md", "src"], [1, "h-100", 3, "selectedRecordingOption", "startedRecordingEmit", "recordingEmit", "feedbackEmit"], ["cameraVideojs", ""], ["fxLayout", "row", "fxLayoutAlign", "center", 1, "w-100"], ["appearance", "fill"], ["placeholder", "Recording option", 3, "value", "valueChange"], [3, "value"], ["type", "button", "mdbBtn", "", "color", "success", 3, "click"], ["type", "button", "mdbBtn", "", "color", "warning", 3, "click"], ["type", "button", "mdbBtn", "", "color", "danger", 3, "click"], ["type", "button", "mdbBtn", "", "color", "info", "rounded", "true", "mdbWavesEffect", "", 3, "click"], [1, "mb-3", 3, "selectedRecordingOption", "startedRecordingEmit", "recordingEmit", "feedbackEmit"], ["screenVideojs", ""], ["fxLayout", "row", "fxLayoutAlign", "center", 1, "form-text", "mb-3", 3, "ngClass"], ["feedbackAttachment", ""]], template: function AssignmentMarkIndividualComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AssignmentMarkIndividualComponent_h1_1_Template, 2, 2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AssignmentMarkIndividualComponent_Template_button_click_3_listener() { return ctx.onInstructionsClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "View Instructions");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, AssignmentMarkIndividualComponent_ng_container_6_Template, 2, 2, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "video", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, AssignmentMarkIndividualComponent_app_videojs_record_9_Template, 2, 1, "app-videojs-record", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, AssignmentMarkIndividualComponent_div_10_Template, 9, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, AssignmentMarkIndividualComponent_button_12_Template, 2, 1, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, AssignmentMarkIndividualComponent_button_13_Template, 2, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, AssignmentMarkIndividualComponent_button_14_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, AssignmentMarkIndividualComponent_button_15_Template, 2, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, AssignmentMarkIndividualComponent_button_17_Template, 2, 0, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, AssignmentMarkIndividualComponent_app_videojs_record_19_Template, 2, 1, "app-videojs-record", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, AssignmentMarkIndividualComponent_div_20_Template, 6, 3, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "app-confirm-modal", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("responseEmit", function AssignmentMarkIndividualComponent_Template_app_confirm_modal_responseEmit_21_listener($event) { return ctx.onCloseModal($event); })("feedbackEmit", function AssignmentMarkIndividualComponent_Template_app_confirm_modal_feedbackEmit_21_listener($event) { return ctx.onFeedback($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.assignment && ctx.student);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.pdfUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.selectedRecordingOption == "Camera Recording" ? "video-camera" : "video-screen")("src", ctx.videoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.selectedRecordingOption == "Camera Recording");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isRecording);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isRecording);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isRecording && !ctx.isPaused);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isRecording && ctx.isPaused);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isRecording && !ctx.isPaused);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isRecording && ctx.isRecorded);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.selectedRecordingOption == "Screen Recording");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isRecording);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultFlexDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], _shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmModalComponent"], _shared_components_videojs_record_videojs_record_component__WEBPACK_IMPORTED_MODULE_2__["VideojsRecordComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_18__["MdbBtnDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_18__["WavesDirective"]], styles: [".assignment-mark-individual-wrapper[_ngcontent-%COMP%]   .min-height[_ngcontent-%COMP%] {\n  height: 80vh;\n}\n.assignment-mark-individual-wrapper[_ngcontent-%COMP%]   .reduced-height[_ngcontent-%COMP%] {\n  height: 50vh;\n}\n.assignment-mark-individual-wrapper[_ngcontent-%COMP%]   .video-camera[_ngcontent-%COMP%] {\n  width: 410px;\n  height: auto;\n}\n.assignment-mark-individual-wrapper[_ngcontent-%COMP%]   .video-screen[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzaWdubWVudC1tYXJrLWluZGl2aWR1YWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxZQUFBO0FBRko7QUFJRTtFQUNFLFlBQUE7QUFGSjtBQUlFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFGSjtBQUlFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFGSiIsImZpbGUiOiJhc3NpZ25tZW50LW1hcmstaW5kaXZpZHVhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXNcIjtcclxuXHJcbi5hc3NpZ25tZW50LW1hcmstaW5kaXZpZHVhbC13cmFwcGVyIHtcclxuICAubWluLWhlaWdodCB7XHJcbiAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgfVxyXG4gIC5yZWR1Y2VkLWhlaWdodCB7XHJcbiAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgfVxyXG4gIC52aWRlby1jYW1lcmEge1xyXG4gICAgd2lkdGg6IDQxMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICAudmlkZW8tc2NyZWVuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "syhF":
/*!*******************************************************************************************************!*\
  !*** ./src/app/ui/student/assignment-feedback-individual/assignment-feedback-individual.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: AssignmentFeedbackIndividualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentFeedbackIndividualComponent", function() { return AssignmentFeedbackIndividualComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_services_crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/crud.service */ "+/AT");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/header/header.component */ "aZ8m");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");









function AssignmentFeedbackIndividualComponent_h1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r0.assignment.name, "'s Feedback");
} }
function AssignmentFeedbackIndividualComponent_div_7_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Music Score Sheet: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r4.assignmentSubmission.student_attachment_scoresheet, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.assignmentSubmission.student_attachment_scoresheet_name, "");
} }
function AssignmentFeedbackIndividualComponent_div_7_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Recording: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r5.assignmentSubmission.student_attachment_recording, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r5.assignmentSubmission.student_attachment_recording_name, "");
} }
function AssignmentFeedbackIndividualComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "My Submission");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AssignmentFeedbackIndividualComponent_div_7_div_4_Template, 4, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AssignmentFeedbackIndividualComponent_div_7_div_5_Template, 4, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.assignmentSubmission.student_attachment_recording);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.assignmentSubmission.student_attachment_recording);
} }
function AssignmentFeedbackIndividualComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r2.assignmentSubmission.feedback));
} }
function AssignmentFeedbackIndividualComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Click to download: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r3.assignmentSubmission.instructor_feedback_attachment, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.assignmentSubmission.instructor_feedback_attachment_name);
} }
// import {AssignmentSubmission} from '../../../core/models/assignment-submission';
// import {AssignmentSubmissionService} from '../../../core/services/assignment-submission.service';
// import {ActivatedRoute, Router} from '@angular/router';
// import {Assignment} from '../../../core/models/assignment';
// import {AssignmentService} from '../../../core/services/assignment.service';
class AssignmentFeedbackIndividualComponent {
    constructor(
    // private assignmentSubmissionService: AssignmentSubmissionService,
    // private assignmentService: AssignmentService,
    activatedRoute, router, crudService, domSanitizer) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.crudService = crudService;
        this.domSanitizer = domSanitizer;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.activatedRoute.queryParams.subscribe((params) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.assignmentSubmissionDocId = params.assignmentSubmissionDocId;
                this.assignmentSubmission = yield this.crudService.readByDocId('assignment_submissions', this.assignmentSubmissionDocId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).toPromise();
                this.assignment = yield this.crudService.readByDocId('assignments', this.assignmentSubmission.assignment_doc_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).toPromise();
                this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.assignmentSubmission.instructor_feedback_attachment);
                // console.log(this.videoUrl);
                // this.assignmentSubmission = await this.assignmentSubmissionService.getAssignmentSubmission(this.assignmentSubmissionDocId)
                //   .pipe(first())
                //   .toPromise();
                // this.assignment = await this.assignmentService.getAssignment(this.assignmentSubmission.assignmentDocId)
                //   .pipe(first())
                //   .toPromise();
                // console.log(this.assignmentSubmission);
            }));
        });
    }
    onGoBackClick() {
        this.router.navigate(['student/assignment/view']);
    }
}
AssignmentFeedbackIndividualComponent.ɵfac = function AssignmentFeedbackIndividualComponent_Factory(t) { return new (t || AssignmentFeedbackIndividualComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"])); };
AssignmentFeedbackIndividualComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AssignmentFeedbackIndividualComponent, selectors: [["app-assignment-feedback-individual"]], decls: 26, vars: 6, consts: [[1, "assignment-feedback-individual-wrapper", "wrapper-padding", "max-width-section"], ["class", "mb-3", 4, "ngIf"], [1, "container"], [1, "row"], [1, "col"], ["class", "form-text mb-3", 4, "ngIf"], [1, "mb-3"], ["controls", "", 1, "instructor-feedback-video", 3, "src"], [1, "go-back-section", 3, "click"], [1, "mr-1"], [1, "go-back-text"], [1, "form-text", "mb-3"], ["target", "_blank", 3, "href"], [3, "href"]], template: function AssignmentFeedbackIndividualComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AssignmentFeedbackIndividualComponent_h1_2_Template, 2, 1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AssignmentFeedbackIndividualComponent_div_7_Template, 6, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Instructor's feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, AssignmentFeedbackIndividualComponent_p_12_Template, 3, 3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Attachments");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "video", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, AssignmentFeedbackIndividualComponent_div_20_Template, 4, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AssignmentFeedbackIndividualComponent_Template_div_click_21_listener() { return ctx.onGoBackClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.assignment);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.assignmentSubmission && (ctx.assignmentSubmission.student_attachment_scoresheet || ctx.assignmentSubmission.student_attachment_recording));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.assignmentSubmission);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Score: ", ctx.assignmentSubmission.grade, "/100");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.videoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.assignmentSubmission && ctx.assignmentSubmission.instructor_feedback_attachment);
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["TitleCasePipe"]], styles: [".assignment-feedback-individual-wrapper[_ngcontent-%COMP%]   .instructor-feedback-video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 65vh;\n}\n.assignment-feedback-individual-wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzaWdubWVudC1mZWVkYmFjay1pbmRpdmlkdWFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFGSjtBQUtFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFISiIsImZpbGUiOiJhc3NpZ25tZW50LWZlZWRiYWNrLWluZGl2aWR1YWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLmFzc2lnbm1lbnQtZmVlZGJhY2staW5kaXZpZHVhbC13cmFwcGVyIHtcclxuICAuaW5zdHJ1Y3Rvci1mZWVkYmFjay12aWRlbyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNjV2aDtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "uXIz":
/*!********************************************************************************!*\
  !*** ./src/app/ui/instructor/assignment-create/assignment-create.component.ts ***!
  \********************************************************************************/
/*! exports provided: AssignmentCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentCreateComponent", function() { return AssignmentCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "JZFu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/crud.service */ "+/AT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/header/header.component */ "aZ8m");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-dropzone */ "kvL/");



var Timestamp = firebase__WEBPACK_IMPORTED_MODULE_2__["default"].firestore.Timestamp;













function AssignmentCreateComponent_mat_option_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const schoolOption_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", schoolOption_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", schoolOption_r11, " ");
} }
function AssignmentCreateComponent_mat_option_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const instrumentOption_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", instrumentOption_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", instrumentOption_r12, " ");
} }
function AssignmentCreateComponent_mat_option_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const levelOption_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", levelOption_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", levelOption_r13, " ");
} }
function AssignmentCreateComponent_button_118_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AssignmentCreateComponent_button_118_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const i_r15 = ctx.index; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r16.removeButton(i_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const buttonText_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](buttonText_r14);
} }
function AssignmentCreateComponent_mat_error_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Don't repeat the same class twice! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AssignmentCreateComponent_mat_error_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " You must specify a school, instrument and level to add a class! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AssignmentCreateComponent_mat_error_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Due date or due time has not been specified! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AssignmentCreateComponent_mat_error_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Your due date is set before today! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AssignmentCreateComponent_mat_error_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please insert an assignment title! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AssignmentCreateComponent_ngx_dropzone_preview_141_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ngx-dropzone-preview", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("removed", function AssignmentCreateComponent_ngx_dropzone_preview_141_Template_ngx_dropzone_preview_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20); const f_r18 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r19.onRemove(f_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ngx-dropzone-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("removable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", f_r18.name, " (", f_r18.type, ")");
} }
class AssignmentCreateComponent {
    constructor(fb, afStorage, crudService, router) {
        this.fb = fb;
        this.afStorage = afStorage;
        this.crudService = crudService;
        this.router = router;
        this.instrumentOptions = [];
        this.classGroups = [];
        this.levelOptions = [];
        this.buttonTexts = [];
        this.buttonText = '';
        this.buttonRepeat = false;
        this.files = [];
        this.classUndefined = false;
        this.schools = [];
        this.timeUndefined = false;
        this.isSubmitClicked = false;
        this.fileNames = [];
        this.dueDateError = false;
        this.createAssignmentButtonClickable = false;
        this.docIdAfterUpload = '';
    }
    ngOnInit() {
        this.initForm();
        // Populate school dropdown list
        this.sessionAccount = JSON.parse(sessionStorage.getItem('account'));
        // console.log(this.sessionAccount);
        this.schoolOptions = this.sessionAccount.school;
        // console.log(this.schoolOptions);
        this.schoolInstrumentLevel = this.sessionAccount.school_instrument_level;
        // console.log(this.schoolInstrumentLevel);
    }
    initForm() {
        this.newAssignmentForm = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['']
        });
        // console.log(this.loginForm);
    }
    get title() {
        return this.newAssignmentForm.get('title');
    }
    get description() {
        return this.newAssignmentForm.get('description');
    }
    captureEvent(type, event) {
        this.event = event.value;
    }
    populateInstrumentOptions() {
        // console.log('Instrument Function Triggered');
        // Clear all subsequent options
        this.instrumentOptions = [];
        this.classGroups = [];
        this.levelOptions = [];
        for (const classGroup of this.schoolInstrumentLevel) {
            // Split classgroup to find school
            this.school = classGroup.split('_')[0];
            if (this.school == this.schoolSelected) {
                this.classGroups.push(classGroup);
                if (!this.instrumentOptions.includes(classGroup.split('_')[1])) {
                    this.instrumentOptions.push(classGroup.split('_')[1]);
                }
            }
        }
    }
    populateLevelOptions() {
        // Clear levelOptions
        this.levelOptions = [];
        for (const classGroup of this.classGroups) {
            this.levelOptions.push(classGroup.split('_')[2]);
        }
    }
    onSubmit() {
        // Check if any of the parameters are undefined. If undefined, show error and no action is taken
        if (this.schoolSelected === undefined || this.instrumentOptions === undefined || this.levelSelected === undefined) {
            this.classUndefined = true;
        }
        else {
            this.classUndefined = false;
            // Capture the school,instrument,levels details
            this.buttonText = this.schoolSelected + '_' + this.instrumentSelected + '_' + this.levelSelected;
            // Validate if the same text has been put before
            // console.log(this.buttonText);
            if (this.buttonTexts.includes(this.buttonText)) {
                this.buttonRepeat = true;
            }
            else {
                this.buttonTexts.push(this.buttonText);
                // Submit button is unclickable if there are no classes
                if (this.buttonTexts.length > 0) {
                    this.createAssignmentButtonClickable = true;
                }
                else {
                    this.createAssignmentButtonClickable = false;
                }
            }
        }
    }
    removeButton(i) {
        this.buttonTexts.shift();
        this.buttonRepeat = false;
        // console.log(this.buttonTexts.length);
        // Submit button is unclickable if there are no classes
        if (this.buttonTexts.length == 0) {
            this.createAssignmentButtonClickable = false;
        }
        else {
            this.createAssignmentButtonClickable = true;
        }
    }
    // Dropzone upload functions
    onSelect(event) {
        this.files.push(...event.addedFiles);
    }
    onRemove(event) {
        this.files.splice(this.files.indexOf(event), 1);
    }
    upload() {
        this.docIdAfterUpload = sessionStorage.getItem('assignment_docId');
        let index = 0;
        for (const ele of this.files) {
            // console.log(ele);
            const location = 'assignment/' + this.docIdAfterUpload + '/' + this.fileNames[index];
            this.afStorage.upload(location, ele);
            index += 1;
            // /* Notes: file directory, create if does not exist:
            // under assignments/assignmentDocid*/
            // var location:string = "assignments/" + this.assignment.assignmentid + "/" + this.assignment.student + "/"
            // this.afStorage.upload( location + file_name, ele)
            // .then(()=>this.updateAssignment())
            // .catch(()=>this.toastr.error("Unable to Upload Assignment!"))
        }
        alert('Assignment has been created!');
        this.router.navigate(['/instructor/home']);
    }
    createAssignment() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // To trigger title check validation
            this.isSubmitClicked = true;
            // Retrieving Necessary information
            // Creating assignment Create Time
            this.assignmentCreateDate = Timestamp.fromDate(new Date());
            // console.log('Assignment Time: ', this.assignmentCreateDate);
            // Retrieve Assignment Due date
            // Validation check for due date: Cannot be undefined
            if (this.event == null) {
                this.timeUndefined = true;
                return;
            }
            this.assignmentDueDate = Timestamp.fromDate(new Date(this.event.getUTCFullYear(), (_a = this.event) === null || _a === void 0 ? void 0 : _a.getMonth(), this.event.getDate(), this.timeSelected.substring(0, 2), this.timeSelected.substring(2, 4)));
            // console.log('Assignment Due Time:', this.assignmentDueDate);
            // Due date validation
            // Assignment cannot be due before current date
            if (this.assignmentCreateDate > this.assignmentDueDate) {
                this.dueDateError = true;
                return;
            }
            else {
                this.dueDateError = false;
            }
            // console.log(this.dueDateError);
            if (this.newAssignmentForm.status) {
                // Retrieve instructor Account DocID
                // console.log('DocID:', this.sessionAccount.docId);
                // Retrieve description
                // console.log('description:', this.newAssignmentForm.value.description);
                // Retrieve assignment name
                // console.log('title:', this.newAssignmentForm.value.title);
                // Retrieve schools
                // console.log(this.buttonTexts);
                for (const buttonText of this.buttonTexts) {
                    // Retrieve schools and put in schools array
                    if (!this.schools.includes(buttonText.split('_')[0])) {
                        this.schools.push(buttonText.split('_')[0]);
                    }
                }
                // console.log('Schools:', this.schools);
                // Get schoolInstrumentLevel
                // console.log('schoolInstrumentLevel', this.buttonTexts);
                // get file names
                const i = 0;
                for (let i = 0; i < this.files.length; i++) {
                    this.fileNames.push(this.files[i].name);
                }
                // console.log('file names:', this.fileNames);
                // Pack all information into assignment class:
                const finalAssignmentSubmission = {
                    instructor_account_doc_id: this.sessionAccount.docId,
                    created_datetime: this.assignmentCreateDate,
                    description: this.newAssignmentForm.value.description,
                    due_datetime: this.assignmentDueDate,
                    name: this.newAssignmentForm.value.title,
                    school: this.schools,
                    school_instrument_level: this.buttonTexts,
                    file_names: this.fileNames
                };
                yield this.crudService.create('assignments', finalAssignmentSubmission)
                    .then(function (docRef) {
                    // console.log('Document: ', docRef);
                    // console.log('Document', typeof (docRef));
                    sessionStorage.setItem('assignment_docId', docRef);
                }).catch(() => console.log('Unable to Upload Assignment!'));
                // console.log('no man\'s land');
                this.upload();
            }
        });
    }
}
AssignmentCreateComponent.ɵfac = function AssignmentCreateComponent_Factory(t) { return new (t || AssignmentCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_5__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
AssignmentCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AssignmentCreateComponent, selectors: [["app-assignment-create"]], decls: 142, vars: 19, consts: [[1, "assignment_create_wrapper"], [1, "container"], [3, "formGroup", "ngSubmit"], ["for", "title"], ["type", "text", "formControlName", "title"], ["for", "due_date"], ["matInput", "", "placeholder", "Select a Date:", 3, "matDatepicker", "dateInput"], ["matSuffix", "", 3, "for"], ["picker", ""], ["for", "due_time"], ["appearance", "fill"], [3, "value", "valueChange"], ["value", "0800"], ["value", "0830"], ["value", "0900"], ["value", "0930"], ["value", "1000"], ["value", "1030"], ["value", "1100"], ["value", "1130"], ["value", "1200"], ["value", "1230"], ["value", "1300"], ["value", "1330"], ["value", "1400"], ["value", "1430"], ["value", "1500"], ["value", "1530"], ["value", "1600"], ["value", "1630"], ["value", "1700"], ["value", "1730"], ["value", "1800"], ["value", "1830"], ["value", "1900"], ["value", "1930"], ["value", "2000"], ["value", "2030"], ["value", "2100"], ["value", "2130"], ["value", "2200"], ["value", "2230"], ["value", "2300"], ["value", "2330"], ["for", "select_school"], [3, "value", "valueChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "select_instrument"], ["for", "select_level"], ["class", "badge", 3, "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["type", "submit"], ["for", "description"], ["rows", "4", "cols", "80", "formControlName", "description"], [1, "create_assignment", 3, "disabled", "click"], ["ngx-dropzone", "", 1, "custom-dropzone", 3, "accept", "change"], [3, "removable", "removed", 4, "ngFor", "ngForOf"], [3, "value"], [1, "badge", 3, "click"], [3, "removable", "removed"]], template: function AssignmentCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "New Assignment");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function AssignmentCreateComponent_Template_form_ngSubmit_7_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Title: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " Due Date: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("dateInput", function AssignmentCreateComponent_Template_input_dateInput_16_listener($event) { return ctx.captureEvent("input", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "mat-datepicker-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "mat-datepicker", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " Due Time: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Select a time slot: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function AssignmentCreateComponent_Template_mat_select_valueChange_26_listener($event) { return ctx.timeSelected = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "None");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "8:00am");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "8:30am");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "9:00am");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "9:30am");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "10:00am");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "10:30am");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "11:00am");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "11:30am");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "12:00am");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "12:30am");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "1:00pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "mat-option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "1:30pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "mat-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "2:00pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "mat-option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "2:30pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "mat-option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "3:00pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "mat-option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "3:30pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "mat-option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "4:00pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "mat-option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "4:30pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "mat-option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "5:00pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "mat-option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "5:30pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "mat-option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "6:00pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "mat-option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "6:30pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "mat-option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "7:00pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "mat-option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "7:30pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "mat-option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "8:00pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "mat-option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "8:30pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "mat-option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "9:00pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "mat-option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "9:30pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "mat-option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, "10:00pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "mat-option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "10:30pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "mat-option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, "11:00pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "mat-option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92, "11:30pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](93, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95, " Select A School: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, " Select a school: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "mat-select", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function AssignmentCreateComponent_Template_mat_select_valueChange_99_listener($event) { return ctx.schoolSelected = $event; })("selectionChange", function AssignmentCreateComponent_Template_mat_select_selectionChange_99_listener() { return ctx.populateInstrumentOptions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](100, AssignmentCreateComponent_mat_option_100_Template, 2, 2, "mat-option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](101, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103, " Select An Instrument ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, "Select an instrument:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "mat-select", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function AssignmentCreateComponent_Template_mat_select_valueChange_107_listener($event) { return ctx.instrumentSelected = $event; })("selectionChange", function AssignmentCreateComponent_Template_mat_select_selectionChange_107_listener() { return ctx.populateLevelOptions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](108, AssignmentCreateComponent_mat_option_108_Template, 2, 2, "mat-option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](109, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](111, " Select Level ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](114, "Select A Level:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function AssignmentCreateComponent_Template_mat_select_valueChange_115_listener($event) { return ctx.levelSelected = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](116, AssignmentCreateComponent_mat_option_116_Template, 2, 2, "mat-option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](117, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](118, AssignmentCreateComponent_button_118_Template, 2, 1, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](119, AssignmentCreateComponent_mat_error_119_Template, 2, 0, "mat-error", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](120, AssignmentCreateComponent_mat_error_120_Template, 2, 0, "mat-error", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](121, AssignmentCreateComponent_mat_error_121_Template, 2, 0, "mat-error", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](122, AssignmentCreateComponent_mat_error_122_Template, 2, 0, "mat-error", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](123, AssignmentCreateComponent_mat_error_123_Template, 2, 0, "mat-error", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](124, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](126, "Add Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](127, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](129, " Assignment Description: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](130, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](131, "textarea", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](132, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AssignmentCreateComponent_Template_button_click_133_listener() { return ctx.createAssignment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](134, "Create Assignment");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](135, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AssignmentCreateComponent_Template_div_change_136_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "ngx-dropzone-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](138, " Please drag and drop your attachment files for this assignment here.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](139, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](140, "(Accepted format: .pdf)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](141, AssignmentCreateComponent_ngx_dropzone_preview_141_Template, 3, 3, "ngx-dropzone-preview", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.newAssignmentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.timeSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.schoolSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.schoolOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.instrumentSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.instrumentOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.levelSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.levelOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.buttonTexts);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.buttonRepeat && !ctx.isSubmitClicked);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.classUndefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.timeUndefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.dueDateError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.title.errors == null ? null : ctx.title.errors.required) && ctx.isSubmitClicked);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.createAssignmentButtonClickable);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("accept", ".pdf,.mp4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.files);
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepicker"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_14__["NgxDropzoneComponent"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_14__["ɵb"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_14__["NgxDropzonePreviewComponent"]], styles: [".assignment_create_wrapper[_ngcontent-%COMP%] {\n  \n}\n.assignment_create_wrapper[_ngcontent-%COMP%]   .create_assignment[_ngcontent-%COMP%] {\n  background-color: darkmagenta;\n}\n.assignment_create_wrapper[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  background: green;\n  color: white;\n  width: auto;\n  margin: 10px;\n  font-size: 20px;\n}\n.assignment_create_wrapper[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: auto;\n}\n.assignment_create_wrapper[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], .assignment_create_wrapper[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%] {\n  width: 50%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n}\n.assignment_create_wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.assignment_create_wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 40px;\n}\n.assignment_create_wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding-top: 10px;\n  padding-right: 20px;\n}\n.assignment_create_wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: blue;\n  color: white;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  margin-right: 15px;\n  padding: 14px 20px;\n  border: none;\n  cursor: pointer;\n  width: 30%;\n}\n.assignment_create_wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzaWdubWVudC1jcmVhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUF5REUsbUNBQUE7QUF2REY7QUFBRTtFQUNFLDZCQUFBO0FBRUo7QUFDRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNKO0FBRUU7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFBTjtBQUdFO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQURKO0FBSUU7RUFDRSxhQUFBO0FBRko7QUFLRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQUhKO0FBTUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUpKO0FBT0U7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQUxKO0FBU0U7RUFDRSxZQUFBO0FBUEoiLCJmaWxlIjoiYXNzaWdubWVudC1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXNzaWdubWVudF9jcmVhdGVfd3JhcHBlcntcclxuXHJcbiAgLmNyZWF0ZV9hc3NpZ25tZW50e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpkYXJrbWFnZW50YTtcclxuICB9XHJcblxyXG4gIC5iYWRnZXtcclxuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuY2VudGVyIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICBpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gIH1cclxuXHJcbiAgbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4OyBcclxuICAgIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgfVxyXG5cclxuICAvKiBBZGQgYSBob3ZlciBlZmZlY3QgZm9yIGJ1dHRvbnMgKi9cclxuICBidXR0b246aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ui_home_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/home/login/login.component */ "zW2w");
/* harmony import */ var _ui_home_update_password_update_password_update_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/home/update_password/update-password/update-password.component */ "QuZi");
/* harmony import */ var _shared_components_cards_cards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/cards/cards.component */ "kkAW");
/* harmony import */ var _ui_admin_account_create_account_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/admin/account-create/account-create.component */ "hg8a");
/* harmony import */ var _ui_admin_account_edit_account_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/admin/account-edit/account-edit.component */ "RAkc");
/* harmony import */ var _ui_admin_account_edit_form_account_edit_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/admin/account-edit-form/account-edit-form.component */ "IruG");
/* harmony import */ var _ui_admin_account_delete_account_delete_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/admin/account-delete/account-delete.component */ "2BFw");
/* harmony import */ var _ui_admin_freelance_wage_freelance_wage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/admin/freelance-wage/freelance-wage.component */ "5l12");
/* harmony import */ var _ui_admin_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/admin/admin-home/admin-home.component */ "dUrK");
/* harmony import */ var _ui_instructor_instructor_home_instructor_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui/instructor/instructor-home/instructor-home.component */ "OdCY");
/* harmony import */ var _ui_instructor_assignment_create_assignment_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ui/instructor/assignment-create/assignment-create.component */ "uXIz");
/* harmony import */ var _ui_instructor_assignment_edit_assignment_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ui/instructor/assignment-edit/assignment-edit.component */ "WdyK");
/* harmony import */ var _ui_instructor_assignment_mark_assignment_mark_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ui/instructor/assignment-mark/assignment-mark.component */ "z5A7");
/* harmony import */ var _ui_instructor_assignment_edit_individual_assignment_edit_individual_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ui/instructor/assignment-edit-individual/assignment-edit-individual.component */ "JagH");
/* harmony import */ var _ui_student_student_home_student_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ui/student/student-home/student-home.component */ "/WYx");
/* harmony import */ var _ui_student_assignment_view_assignment_view_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ui/student/assignment-view/assignment-view.component */ "aOO9");
/* harmony import */ var _ui_student_assignment_submit_individual_assignment_submit_individual_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ui/student/assignment-submit-individual/assignment-submit-individual.component */ "XZGf");
/* harmony import */ var _ui_student_assignment_feedback_individual_assignment_feedback_individual_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ui/student/assignment-feedback-individual/assignment-feedback-individual.component */ "syhF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ "fXoL");

// Shared









// Instructor





// Student






const routes = [{
        path: '',
        children: [
            {
                path: 'login',
                pathMatch: 'full',
                component: _ui_home_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
            },
            {
                path: 'update_password',
                pathMatch: 'full',
                component: _ui_home_update_password_update_password_update_password_component__WEBPACK_IMPORTED_MODULE_2__["UpdatePasswordComponent"]
            },
            // Admin
            {
                path: 'admin/home',
                pathMatch: 'full',
                component: _ui_admin_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_9__["AdminHomeComponent"]
            },
            {
                path: 'admin/account/create',
                pathMatch: 'full',
                component: _ui_admin_account_create_account_create_component__WEBPACK_IMPORTED_MODULE_4__["AccountCreateComponent"]
            },
            {
                path: 'admin/account/delete',
                pathMatch: 'full',
                component: _ui_admin_account_delete_account_delete_component__WEBPACK_IMPORTED_MODULE_7__["AccountDeleteComponent"]
            },
            {
                path: 'admin/account/edit',
                pathMatch: 'full',
                component: _ui_admin_account_edit_account_edit_component__WEBPACK_IMPORTED_MODULE_5__["AccountEditComponent"]
            },
            {
                path: 'admin/account/edit/form',
                pathMatch: 'full',
                component: _ui_admin_account_edit_form_account_edit_form_component__WEBPACK_IMPORTED_MODULE_6__["AccountEditFormComponent"]
            },
            {
                path: 'admin/freelance',
                pathMatch: 'full',
                component: _ui_admin_freelance_wage_freelance_wage_component__WEBPACK_IMPORTED_MODULE_8__["FreelanceWageComponent"]
            },
            // Instructor
            {
                path: 'instructor/home',
                pathMatch: 'full',
                component: _ui_instructor_instructor_home_instructor_home_component__WEBPACK_IMPORTED_MODULE_10__["InstructorHomeComponent"]
            },
            {
                path: 'instructor/assignment/create',
                pathMatch: 'full',
                component: _ui_instructor_assignment_create_assignment_create_component__WEBPACK_IMPORTED_MODULE_11__["AssignmentCreateComponent"]
            },
            {
                path: 'instructor/assignment/edit',
                pathMatch: 'full',
                component: _ui_instructor_assignment_edit_assignment_edit_component__WEBPACK_IMPORTED_MODULE_12__["AssignmentEditComponent"]
            },
            {
                path: 'instructor/assignment/edit/assignment/:docId',
                pathMatch: 'full',
                component: _ui_instructor_assignment_edit_individual_assignment_edit_individual_component__WEBPACK_IMPORTED_MODULE_14__["AssignmentEditIndividualComponent"]
            },
            {
                path: 'instructor/assignment/mark',
                pathMatch: 'full',
                component: _ui_instructor_assignment_mark_assignment_mark_component__WEBPACK_IMPORTED_MODULE_13__["AssignmentMarkComponent"]
            },
            // Student
            {
                path: 'student/home',
                pathMatch: 'full',
                component: _ui_student_student_home_student_home_component__WEBPACK_IMPORTED_MODULE_15__["StudentHomeComponent"]
            },
            {
                path: 'student/assignment/view',
                pathMatch: 'full',
                component: _ui_student_assignment_view_assignment_view_component__WEBPACK_IMPORTED_MODULE_16__["AssignmentViewComponent"]
            },
            {
                path: 'student/assignment/submit',
                pathMatch: 'full',
                component: _ui_student_assignment_submit_individual_assignment_submit_individual_component__WEBPACK_IMPORTED_MODULE_17__["AssignmentSubmitIndividualComponent"]
            },
            {
                path: 'student/assignment/feedback',
                pathMatch: 'full',
                component: _ui_student_assignment_feedback_individual_assignment_feedback_individual_component__WEBPACK_IMPORTED_MODULE_18__["AssignmentFeedbackIndividualComponent"]
            },
            // Shared
            {
                path: 'test/cards',
                pathMatch: 'full',
                component: _shared_components_cards_cards_component__WEBPACK_IMPORTED_MODULE_3__["CardsComponent"]
            },
            // Default
            {
                path: '**',
                pathMatch: 'full',
                component: _ui_home_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
            }
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "x/FY":
/*!********************************************************************************************!*\
  !*** ./src/app/shared/components/input-dropdown-select/input-dropdown-select.component.ts ***!
  \********************************************************************************************/
/*! exports provided: InputDropdownSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputDropdownSelectComponent", function() { return InputDropdownSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "FKr1");






function InputDropdownSelectComponent_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ele_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ele_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ele_r1);
} }
class InputDropdownSelectComponent {
    constructor() {
        this.outputData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        // empty
    }
    // Method: get the dropdown list values and prepare to sent to parent
    selected_value(event) {
        this.selectedData = {
            value: event.value,
        };
        this.sentToParent();
    }
    // Method: sent data to the parent
    sentToParent() {
        this.outputData.emit(this.selectedData);
    }
}
InputDropdownSelectComponent.ɵfac = function InputDropdownSelectComponent_Factory(t) { return new (t || InputDropdownSelectComponent)(); };
InputDropdownSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputDropdownSelectComponent, selectors: [["app-input-dropdown-select"]], inputs: { inputDataList: "inputDataList", name: "name" }, outputs: { outputData: "outputData" }, decls: 5, vars: 3, consts: [["appearance", "fill"], ["multiple", "", 3, "placeholder", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function InputDropdownSelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function InputDropdownSelectComponent_Template_mat_select_selectionChange_3_listener($event) { return ctx.selected_value($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InputDropdownSelectComponent_mat_option_4_Template, 2, 2, "mat-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.inputDataList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.inputDataList);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_2__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatOption"]], styles: [".mat-form-field[_ngcontent-%COMP%] {\n  padding-left: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaW5wdXQtZHJvcGRvd24tc2VsZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSiIsImZpbGUiOiJpbnB1dC1kcm9wZG93bi1zZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWZvcm0tZmllbGR7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "z5A7":
/*!****************************************************************************!*\
  !*** ./src/app/ui/instructor/assignment-mark/assignment-mark.component.ts ***!
  \****************************************************************************/
/*! exports provided: AssignmentMarkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentMarkComponent", function() { return AssignmentMarkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_services_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/crud.service */ "+/AT");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/header/header.component */ "aZ8m");
/* harmony import */ var _assignment_mark_individual_assignment_mark_individual_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assignment-mark-individual/assignment-mark-individual.component */ "qlqg");
/* harmony import */ var _shared_components_input_dropdown_select_input_dropdown_select_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/input-dropdown-select/input-dropdown-select.component */ "x/FY");
/* harmony import */ var _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/table/table.component */ "Xv+k");












function AssignmentMarkComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-assignment-mark-individual", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("assignmentSubmissionDocId", ctx_r0.assignmentSubmissionDocId);
} }
function AssignmentMarkComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Mark Assignment");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "app-input-dropdown-select", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("outputData", function AssignmentMarkComponent_ng_container_3_Template_app_input_dropdown_select_outputData_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.filterData($event, "Feedback Status"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "app-input-dropdown-select", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("outputData", function AssignmentMarkComponent_ng_container_3_Template_app_input_dropdown_select_outputData_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.filterData($event, "School"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "app-input-dropdown-select", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("outputData", function AssignmentMarkComponent_ng_container_3_Template_app_input_dropdown_select_outputData_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.filterData($event, "Instrument"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "app-input-dropdown-select", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("outputData", function AssignmentMarkComponent_ng_container_3_Template_app_input_dropdown_select_outputData_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r6.filterData($event, "Level"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "app-table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("inputDataList", ctx_r1.feedbackStatusOptions)("name", "Feedback Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("inputDataList", ctx_r1.schoolOptions)("name", "School");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("inputDataList", ctx_r1.instrumentOptions)("name", "Instrument");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("inputDataList", ctx_r1.levelOptions)("name", "Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx_r1.dataSource)("displayedColumns", ctx_r1.displayedColumns)("actionType", ctx_r1.actionType);
} }
class AssignmentMarkComponent {
    constructor(activatedRoute, crudService, translateService) {
        this.activatedRoute = activatedRoute;
        this.crudService = crudService;
        this.translateService = translateService;
        this.displayedColumns = ['assignment_name', 'assignment_school_instrument_level', 'assignment_student_name', 'assignment_submission_status', 'assignment_feedback_status', 'action'];
        this.actionType = 'assignmentMark';
        // @ViewChild(CommonTableComponent) commonTableComponent: CommonTableComponent;
        this.schoolOptions = [];
        this.instrumentOptions = [];
        this.levelOptions = [];
        this.feedbackStatusOptions = ['With Feedback', 'Without Feedback'];
        this.selectedSchoolOptions = [];
        this.selectedInstrumentOptions = [];
        this.selectedLevelOptions = [];
        this.selectedFeedbackStatusOptions = [];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loggedInAccount = JSON.parse(sessionStorage.getItem('account'));
            // const dataSource = await this.crudService.read('assignment_submissions').pipe(first()).toPromise();
            // console.log(dataSource);
            this.translateService.use('en');
            const datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"](this.translateService.currentLang);
            const loggedInAccount = JSON.parse(sessionStorage.getItem('account'));
            this.activatedRoute.queryParams.subscribe((params) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                var _a;
                this.assignmentSubmissionDocId = params.assignmentSubmissionDocId;
                this.assignmentSubmissions = yield this.crudService.read('assignment_submissions', 'school_instrument_level', 'array-contains-any', loggedInAccount.school_instrument_level).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).toPromise();
                const filteredAssignmentSubmissions = [];
                for (const assignmentSubmission of this.assignmentSubmissions) {
                    assignmentSubmission.assignment = yield this.crudService.readByDocId('assignments', assignmentSubmission.assignment_doc_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).toPromise();
                    if (assignmentSubmission.assignment == null || new Date() < assignmentSubmission.assignment.due_datetime.toDate()) {
                        continue;
                    }
                    assignmentSubmission.assignment_name = (_a = assignmentSubmission.assignment) === null || _a === void 0 ? void 0 : _a.name;
                    assignmentSubmission.student = yield this.crudService.readByDocId('accounts', assignmentSubmission.student_doc_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).toPromise();
                    assignmentSubmission.student_name = assignmentSubmission.student.last_name + ' ' +
                        assignmentSubmission.student.first_name;
                    assignmentSubmission.submission_status = 'Last submitted on ' +
                        datePipe.transform(assignmentSubmission.submitted_datetime.toDate(), 'EEEE, MMMM d, y, h:mm:ss a');
                    assignmentSubmission.feedback_status = 'Not reviewed';
                    if (assignmentSubmission.feedback_datetime != null) {
                        assignmentSubmission.feedback_status = 'Last marked on ' +
                            datePipe.transform(assignmentSubmission.feedback_datetime.toDate(), 'EEEE, MMMM d, y, h:mm:ss a');
                    }
                    filteredAssignmentSubmissions.push(assignmentSubmission);
                }
                this.assignmentSubmissions = filteredAssignmentSubmissions;
                this.dataSource = this.assignmentSubmissions;
                this.updateSelectOptions();
                // console.log(this.dataSource);
            }));
        });
    }
    filterData($event, type) {
        // console.log($event.value);
        switch (type) {
            case 'School':
                this.selectedSchoolOptions = $event.value;
                break;
            case 'Instrument':
                this.selectedInstrumentOptions = $event.value;
                break;
            case 'Level':
                this.selectedLevelOptions = $event.value;
                break;
            case 'Feedback Status':
                this.selectedFeedbackStatusOptions = $event.value;
                break;
        }
        const filteredAssignmentSubmissions = [];
        for (const assignmentSubmission of this.assignmentSubmissions) {
            for (const schoolInstrumentLevel of assignmentSubmission.school_instrument_level) {
                const schoolInstrumentLevelArr = schoolInstrumentLevel.split('_');
                const school = schoolInstrumentLevelArr[0];
                const instrument = schoolInstrumentLevelArr[1];
                const level = schoolInstrumentLevelArr[2];
                if ((this.selectedSchoolOptions.length === 0 || this.selectedSchoolOptions.includes(school)) &&
                    (this.selectedInstrumentOptions.length === 0 || this.selectedInstrumentOptions.includes(instrument)) &&
                    (this.selectedLevelOptions.length === 0 || this.selectedLevelOptions.includes(level)) &&
                    (this.selectedFeedbackStatusOptions.length === 0 ||
                        (this.selectedFeedbackStatusOptions.includes('With Feedback') && assignmentSubmission.feedback_status !== 'Not reviewed') ||
                        (this.selectedFeedbackStatusOptions.includes('Without Feedback') && assignmentSubmission.feedback_status === 'Not reviewed'))) {
                    filteredAssignmentSubmissions.push(assignmentSubmission);
                }
            }
        }
        this.dataSource = filteredAssignmentSubmissions;
        this.updateSelectOptions();
    }
    updateSelectOptions() {
        this.schoolOptions = [];
        this.instrumentOptions = [];
        this.levelOptions = [];
        for (const assignmentSubmission of this.assignmentSubmissions) {
            for (const schoolInstrumentLevel of assignmentSubmission.school_instrument_level) {
                const schoolInstrumentLevelArr = schoolInstrumentLevel.split('_');
                const school = schoolInstrumentLevelArr[0];
                const instrument = schoolInstrumentLevelArr[1];
                const level = schoolInstrumentLevelArr[2];
                if (!this.schoolOptions.includes(school)) {
                    this.schoolOptions.push(school);
                }
                if (!this.instrumentOptions.includes(instrument)) {
                    this.instrumentOptions.push(instrument);
                }
                if (!this.levelOptions.includes(level)) {
                    this.levelOptions.push(level);
                }
            }
        }
    }
}
AssignmentMarkComponent.ɵfac = function AssignmentMarkComponent_Factory(t) { return new (t || AssignmentMarkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_crud_service__WEBPACK_IMPORTED_MODULE_5__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"])); };
AssignmentMarkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AssignmentMarkComponent, selectors: [["app-assignment-mark"]], decls: 4, vars: 2, consts: [[1, "assignment-mark-wrapper", "wrapper-padding", "max-width-section"], [4, "ngIf"], [3, "assignmentSubmissionDocId"], [1, "mb-3"], [3, "inputDataList", "name", "outputData"], [3, "dataSource", "displayedColumns", "actionType"]], template: function AssignmentMarkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AssignmentMarkComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AssignmentMarkComponent_ng_container_3_Template, 9, 11, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.assignmentSubmissionDocId);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.assignmentSubmissionDocId);
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _assignment_mark_individual_assignment_mark_individual_component__WEBPACK_IMPORTED_MODULE_8__["AssignmentMarkIndividualComponent"], _shared_components_input_dropdown_select_input_dropdown_select_component__WEBPACK_IMPORTED_MODULE_9__["InputDropdownSelectComponent"], _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_10__["TableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc3NpZ25tZW50LW1hcmsuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zW2w":
/*!**************************************************!*\
  !*** ./src/app/ui/home/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/crud.service */ "+/AT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");









function LoginComponent_h1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Synchrony Login Page ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LoginComponent_h1_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Update Password Page");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Username cannot be blank! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_error_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Password cannot be blank! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Incorrect Username or Password! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LoginComponent_div_16_mat_error_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " New Password must be at least 5 characters long! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LoginComponent_div_16_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " New Password cannot be blank! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LoginComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "New Password: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, LoginComponent_div_16_mat_error_4_Template, 2, 0, "mat-error", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, LoginComponent_div_16_mat_error_5_Template, 2, 0, "mat-error", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Confirm Password:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.isSubmitClicked && (ctx_r5.newPassword.errors == null ? null : ctx_r5.newPassword.errors.minlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.isSubmitClicked && (ctx_r5.newPassword.errors == null ? null : ctx_r5.newPassword.errors.required));
} }
function LoginComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Passwords do not match! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LoginComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Update Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LoginComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(fb, crudservice, router) {
        this.fb = fb;
        this.crudservice = crudservice;
        this.router = router;
        // Variables only for update password page that are not applicable here
        this.updatePasswordPage = false;
        this.passwordMatch = true;
        this.loginPage = true;
        this.isSubmitClicked = false;
        this.isValidUsernamePasswordCombi = true;
    }
    ngOnInit() {
        // Initialize formbuilder
        this.initForm();
    }
    initForm() {
        this.loginForm = this.fb.group({
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            //Added to avoid error
            newPassword: [""]
        });
        // console.log(this.loginForm);
    }
    // Retrieve username
    get username() {
        return this.loginForm.get('username');
    }
    //Added to avoid error
    get newPassword() {
        return this.loginForm.get('newPassword');
    }
    // Retrieve password
    get password() {
        return this.loginForm.get('password');
    }
    // Functions
    onSubmit() {
        // Submit was clicked. Form validation will take place
        this.isSubmitClicked = true;
        // Validate account and password
        if (this.loginForm.valid) {
            // Calling firebase service
            this.crudservice.read("accounts", "username", "==", this.loginForm.value.username, "password", "==", this.loginForm.value.password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe((account) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                // console.log(account);
                if (account.length == 0) {
                    // username and password does not exist on the database
                    // console.log("Login denied");
                    this.isValidUsernamePasswordCombi = false;
                }
                else {
                    // Login is successful
                    // console.log("Login successful");
                    // Remove password from object
                    delete account[0].password;
                    // Store account details as session
                    // console.log(account[0]);
                    //sessionStorage.setItem('account',account[0]);
                    sessionStorage.setItem('account', JSON.stringify(account[0]));
                    // Check if account has been deleted 
                    if (account[0].is_delete) {
                        alert("Account has been deactivated. Please seek the admin to reset your account");
                        return;
                    }
                    // Check if user has logged in for the first time. If so, redirect to update password
                    if (account[0].first_login) {
                        // If user has logged in for the first time, redirect to update password page
                        alert("You have logged in for the first time. You will be redirected to change your password");
                        this.router.navigate(["/update_password"]);
                    }
                    else {
                        // If user has logged in before, direct to web page based on role
                        this.role = account[0].role;
                        // console.log(this.role);
                        if (this.role == "instructor") {
                            // Redirect to instructor page
                            // console.log("teacher's page");
                            this.router.navigate(["instructor/home"]);
                        }
                        else if (this.role == "student") {
                            // Redirect to student page
                            // console.log("student's page")
                            this.router.navigate(["student/assignment/view"]);
                        }
                        else if (this.role == "admin") {
                            // console.log("admin page");
                            this.router.navigate(["admin/home"]);
                        }
                    }
                }
            }));
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 20, vars: 10, consts: [[1, "account-create-wrapper"], ["src", "../../../../assets/images/Logo.png", "width", "400", "height", "400", 1, "center"], [4, "ngIf"], [1, "container"], [3, "formGroup", "ngSubmit"], ["for", "username"], ["type", "text", "formControlName", "username"], ["for", "password"], ["type", "password", "formControlName", "password"], ["for", "newPassword"], ["type", "password", "formControlName", "newPassword"], ["for", "confirmPassword"], ["type", "password", "formControlName", "confirmPassword"], ["type", "submit"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, LoginComponent_h1_2_Template, 2, 0, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, LoginComponent_h1_3_Template, 2, 0, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Username: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, LoginComponent_mat_error_9_Template, 2, 0, "mat-error", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Password: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, LoginComponent_mat_error_14_Template, 3, 0, "mat-error", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, LoginComponent_mat_error_15_Template, 2, 0, "mat-error", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, LoginComponent_div_16_Template, 10, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, LoginComponent_mat_error_17_Template, 2, 0, "mat-error", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, LoginComponent_div_18_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, LoginComponent_div_19_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.updatePasswordPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isSubmitClicked && (ctx.username.errors == null ? null : ctx.username.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isSubmitClicked && (ctx.password.errors == null ? null : ctx.password.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isSubmitClicked && !ctx.isValidUsernamePasswordCombi);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.updatePasswordPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isSubmitClicked && ctx.loginForm.hasError("notSame"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.updatePasswordPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginPage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"]], styles: [".account-create-wrapper[_ngcontent-%COMP%] {\n  \n}\n.account-create-wrapper[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: auto;\n}\n.account-create-wrapper[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], .account-create-wrapper[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n}\n.account-create-wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.account-create-wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 40px;\n}\n.account-create-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding-top: 10px;\n}\n.account-create-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: blue;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n}\n.account-create-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUEwQ0ksbUNBQUE7QUF4Q0o7QUFBSTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUVSO0FBQ0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0FBQ047QUFFSTtFQUNFLGFBQUE7QUFBTjtBQUdJO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBRE47QUFJSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUZOO0FBS0k7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFITjtBQU9JO0VBQ0UsWUFBQTtBQUxOIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjY291bnQtY3JlYXRlLXdyYXBwZXJ7XHJcblxyXG4gICAgLmNlbnRlciB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICB9XHJcblxyXG4gICAgaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaDEge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIH1cclxuXHJcbiAgICBsYWJlbHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICAgICAgbWFyZ2luOiA4cHggMDtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIEFkZCBhIGhvdmVyIGVmZmVjdCBmb3IgYnV0dG9ucyAqL1xyXG4gICAgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


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