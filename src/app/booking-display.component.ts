import { Component, Input } from '@angular/core';
import { Booking } from './booking';

@Component({
    selector: 'app-booking-display',
    template: `
        <pre>{{ newBooking | json }}</pre>
    `
})
export class BookingDisplayComponent {
    @Input() newBooking: Booking;
}
