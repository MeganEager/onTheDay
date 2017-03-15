import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MainEventPage } from '../main-event/main-event';
import { CreateEventPage } from '../create-event/create-event';


@Component({
  selector: 'page-my-events',
  templateUrl: 'my-events.html'
})
export class MyEventsPage {
  events: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.events = [] //will eventually be a list of events created by user
  for(let i = 0; i<5; i++){
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

}
