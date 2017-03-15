import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MyEventsPage } from '../pages/my-events/my-events';
import { SettingsPage } from '../pages/settings/settings';
import { CreateEventPage } from '../pages/create-event/create-event';
import { MainEventPage } from '../pages/main-event/main-event';
import { EventDetailsPage } from '../pages/event-details/event-details';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MyEventsPage,
    SettingsPage,
    CreateEventPage,
    MainEventPage,
    EventDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MyEventsPage,
    SettingsPage,
    CreateEventPage,
    MainEventPage,
    EventDetailsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
