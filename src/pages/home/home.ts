import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { MainEventPage } from '../main-event/main-event';
import { CreateEventPage } from '../create-event/create-event';
import { JoinEventPage } from '../join-event/join-event';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    events: any[];

  constructor(public navCtrl: NavController) {
        this.events = [];  //will eventually be a list of all events from user DB
        for(let i = 0; i<10; i++){
            this.events.push({
                title: 'Event '+ i,
                thumbNail: '../../resources/icon.png',
                description: 'This is just one of your events',
                id: 'eventID' + i
            });
        }
  }

  createEvent(){
      this.navCtrl.push(CreateEventPage);
  }

  eventSelected(event){
      this.navCtrl.push(MainEventPage, {
        event: event
      });
  }

  joinEvent(){
      this.navCtrl.push(JoinEventPage);
  }
}
