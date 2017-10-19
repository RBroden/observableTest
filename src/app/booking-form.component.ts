import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Booking } from './booking';

@Component({
    selector: 'app-booking-form',
    template: `
        <div>Booking Form</div>
        <app-booking-display
            [newBooking]="newBooking$ | async">
        </app-booking-display>
    `
})
export class BookingFormComponent {
    @Input() newBooking$: BehaviorSubject<Booking>;
}
