import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Booking } from './booking';

@Component({
    selector: 'app-booking-form',
    template: `
        <div>Booking Form</div>
        <div> Show New Booking</div>
        <pre>{{ showNewBooking | json }}</pre>
        <hr>
        <app-booking-display
            [newBooking]="newBooking$ | async">
        </app-booking-display>
    `
})
export class BookingFormComponent implements OnInit {
    @Input() newBooking$: BehaviorSubject<Booking>;
    showNewBooking: Booking;

    ngOnInit() {
        this.newBooking$.subscribe( (booking: Booking) => {
            this.showNewBooking = booking;
        });
    }
}
