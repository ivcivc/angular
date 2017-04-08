export declare class Customer {
    ID: number;
    CompanyName: string;
    Address: string;
    City: string;
    State: string;
    Zipcode: number;
    Phone: string;
    Fax: string;
    Website: string;
}
export declare class CustomerService {
    getCustomers(): Customer[];
}
