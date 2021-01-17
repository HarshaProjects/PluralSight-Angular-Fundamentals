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
      <div>
        <span>Location: {{ event.location.address }}</span>
        <span>&nbsp;</span>
        <span>{{ event.location.city }}, {{ event.location.country }}</span>
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
