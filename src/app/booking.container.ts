import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Booking } from './booking';

@Component({
    selector: 'app-booking-page',
    template: `
        <h2>Booking Container</h2>
        <app-booking-form
            [newBooking$]="newBooking$">
        </app-booking-form>
    `
})
export class BookingPageComponent {
    @Input() newBooking$: BehaviorSubject<Booking>;
}
