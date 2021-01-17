import { Component, Input, Output, EventEmitter } from "@angular/core";
("@angular/core");

@Component({
  selector: "event-thumbail",
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{ event.name }}</h2>
      <div>Date: {{ event.date }}</div>
      <div>Time: {{ event.time }}</div>
      <div>Price: \${{ event.price }}</div>
      <div *ngIf="event?.location">
        <span>Location: {{ event.location.address }}</span>
        <span>&nbsp;</span>
        <span>{{ event.location.city }}, {{ event.location.country }}</span>
        <div *ngIf="event?.OnlineURl">
          <span>Online URL:{{ event?.OnlineURl }}</span>
        </div>
      </div>
      <div>
        <button class="btn btn-primary" (click)="handleClickMe()">
          Click me!
        </button>
      </div>
    </div>
  `,
})
export class EventThumbanailComponent {
  @Input() event: any;
  @Output() eventClick = new EventEmitter();
  handleClickMe(): void {
    this.eventClick.emit("Foo");
  }
}
