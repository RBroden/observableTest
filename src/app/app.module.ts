import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AvailabilityPageComponent } from './availability.container';
import { BookingPageComponent } from './booking.container';
import { BookingFormComponent } from './booking-form.component';
import { BookingDisplayComponent } from './booking-display.component';

@NgModule({
  declarations: [
    AppComponent,
    AvailabilityPageComponent,
    BookingPageComponent,
    BookingFormComponent,
    BookingDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
