export function formatDate(date: Date) {
    return new Intl.DateTimeFormat("en-us", {
      weekday: "long",
      month: "short",
      day: "numeric",
    }).format(date);
}

export default interface Message {
    RentalId: number;
    Sender: string;
    Content: string;
    Time: Date;
}