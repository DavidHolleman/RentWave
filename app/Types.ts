export function formatDate(date: Date) {
    return new Intl.DateTimeFormat("en-us", {
        weekday: "long",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
    }).format(date);
}

export interface Message {
    RentalId: number;
    Sender: string;
    Content: string;
    Time: Date;
}

export interface Item {
    Id: number;
    Owner: string;
    Category: string;
    Name: string;
    Description: string;
}

export interface Review {
    RentalId: number;
    Author: string;
    Rating: number;
    Content: string;
    Name: string;
    Time: Date;
}

export interface Rental {
    Id: number;
    ItemId: number;
    Renter: string;
    Owner: string;
    State: number;
}