import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { EventDetailsPage } from '../event-details/event-details';

@Component({
  selector: 'page-main-event',
  templateUrl: 'main-event.html'
})
export class MainEventPage {
  event: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.event = navParams.get('event');
  }

  eventInfo(event){
  this.navCtrl.push(EventDetailsPage, {
    event: event
  });
  }

}
