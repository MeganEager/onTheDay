import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    items: any[];

  constructor(public navCtrl: NavController) {
        this.items = [];  //will eventually be a list of events from user DB
        for(let i = 0; i<10; i++){
            this.items.push({
                title: 'Event '+ i,
                thumbNail: '../../resources/icon.png',
                description: 'This is just one of your events',
                id: 'eventID' + i
            });
        }
  }
}
