import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Booking } from './booking';

@Component({
    selector: 'app-availability-page',
    template: `
        <h1>Availability Container</h1>
        <app-booking-page
            [newBooking$]="newBooking$">
        </app-booking-page>
    `
})
export class AvailabilityPageComponent implements OnInit {
    newBooking$: BehaviorSubject<Booking> = new BehaviorSubject(null);

    ngOnInit() {
        setInterval( () => {
            this.newBooking$.next(<Booking>{
                id: 'sdkfjsd',
                name: 'Booking Name',
                date1: 'date 1',
                date2: 'date 2'
            });
        }, 3000);
    }

}
