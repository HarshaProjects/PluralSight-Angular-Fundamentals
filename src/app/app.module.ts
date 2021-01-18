import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { EventsAppComponent } from "./events-app.component";
import { EventsListComponent } from "./events/events-list.component";
import { EventThumbanailComponent } from "./events/event-thumbnail.component";
import { NavBarComponent } from "./nav/navbar.component";
import { EventService } from "./events/shared/event.service";

@NgModule({
  // Component, Pipe or Directive
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbanailComponent,
    NavBarComponent,
  ],
  // Other Modules
  imports: [BrowserModule],
  // Services
  providers: [EventService],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}
