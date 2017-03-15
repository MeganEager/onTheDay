import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the MainEvent page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-main-event',
  templateUrl: 'main-event.html'
})
export class MainEventPage {
  event: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.event = navParams.get('event');
  }

}
