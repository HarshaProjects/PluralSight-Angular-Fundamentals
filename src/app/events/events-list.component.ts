import { Component } from "@angular/core";

@Component({
  selector: "events-list",
  templateUrl: "./events-list.component.html",
  styles: [
    `
      th,
      td {
        font-size: 16px;
        padding: 5px 10px;
      }
    `,
  ],
})
export class EventsListComponent {
  events: any = [
    {
      name: "Angular Connect",
      date: "9/26/2036",
      time: "10am",
      price: 599.99,
      location: { address: "1 London Rd", city: "London", country: "England" },
    },
    {
      name: "ng-nl",
      date: "4/15/2037",
      time: "9am",
      location: { address: "127 DT ", city: "Amsterdam", country: "NL" },
    },
    {
      name: "ng-conf 2037",
      date: "4/15/2037",
      time: "9am",
      location: {
        address: "The Palatial America Hotel",
        city: "Salt Lake City",
        country: "USA",
      },
    },
    {
      name: "UN Angular Summit",
      date: "6/10/2037",
      time: "8am",
      location: "",
      OnlineURl: "https://wwww.google.com",
    },
  ];

  outputFromChild: string;

  habndleEventClicked(data: string) {
    console.log(data);
  }
}
