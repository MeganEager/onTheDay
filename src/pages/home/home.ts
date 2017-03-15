import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { MainEventPage } from '../main-event/main-event';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    events: any[];

  constructor(public navCtrl: NavController) {
        this.events = [];  //will eventually be a list of events from user DB
        for(let i = 0; i<10; i++){
            this.events.push({
                title: 'Event '+ i,
                thumbNail: '../../resources/icon.png',
                description: 'This is just one of your events',
                id: 'eventID' + i
            });
        }
  }

  eventSelected(event){
      this.navCtrl.push(MainEventPage, {
        event: event
      });
  }
}
