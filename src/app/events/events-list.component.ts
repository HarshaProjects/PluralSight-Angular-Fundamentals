import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/event.service";

@Component({
  selector: "events-list",
  templateUrl: "./events-list.component.html",
  styles: [
    `
      .thumbnail {
        margin-top: 10px;
        padding-top: 5px;
        min-height: 350px;
      }
      .label {
        font-size: 14px;
        margin-bottom: 10px;
        display: inline-block;
      }
    `,
  ],
})
export class EventsListComponent implements OnInit {
  allevents: any;
  outputFromChild: string;

  constructor(private eventServer: EventService) {}
  ngOnInit(): void {
    this.allevents = this.eventServer.getEvents();
  }

  habndleEventClicked(data: string): void {
    console.log(data);
  }
}
