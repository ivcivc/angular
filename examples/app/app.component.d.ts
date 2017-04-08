import { OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl } from '@angular/forms';
import { Orange, OrangeService } from './orange.service';
import { Customer, CustomerService } from './customer.service';
import { Appointment, AppointmentService } from './appointment.service';
import { OwnerService } from './owner.service';
import { DxPopoverComponent } from '../../dist';
export declare class AppComponent implements OnInit {
    private orangeService;
    private customerService;
    private appointmentService;
    private ownerService;
    popover: DxPopoverComponent;
    text: string;
    email: string;
    emailControl: AbstractControl;
    password: string;
    passwordControl: AbstractControl;
    dxValidationRules: {
        email: {
            type: string;
            message: string;
        }[];
        password: {
            type: string;
            message: string;
        }[];
    };
    form: FormGroup;
    boolValue: boolean;
    numberValue: number;
    dateValue: Date;
    currentDate: Date;
    demoItems: string[];
    popupVisible: boolean;
    series: {
        argumentField: string;
        valueField: string;
        name: string;
        type: string;
        color: string;
    };
    oranges: Orange[];
    customers: Customer[];
    appointments: Appointment[];
    resources: any[];
    tabs: {
        id: number;
        text: string;
        icon: string;
        content: string;
    }[];
    tabPanelItems: Customer[];
    tabContent: string;
    constructor(orangeService: OrangeService, customerService: CustomerService, appointmentService: AppointmentService, ownerService: OwnerService);
    helloWorld(): void;
    buy(model: any): void;
    callNumber(number: any): void;
    onSubmit(): boolean;
    validate(params: any): void;
    ngOnInit(): void;
    showPopover(): void;
    selectTab(e: any): void;
}
export declare class CustomValidator {
    static mailFormat(control: FormControl): {
        'incorrectMailFormat': boolean;
    };
}
