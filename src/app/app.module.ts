import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { EventsAppComponent } from "./events-app.component";
import { EventsListComponent } from "./events/events-list.component";
import { EventThumbanailComponent } from "./events/event-thumbnail.component";

@NgModule({
  // Component, Pipe or Directive
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbanailComponent,
  ],
  // Other Modules
  imports: [BrowserModule],
  // Services
  providers: [],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}
