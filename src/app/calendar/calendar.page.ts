import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar';
import { IonDatetime } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  eventSource = [];
  viewTitle: string;

  dataValue2 = '';
  calendar = {
    mode: 'month',
    currentDate: new Date()
  };

  event = {
    titie: '',
    desc: '',
    time: null,
    allDay:true
  };

  @ViewChild(IonDatetime, {static: true }) datetime: IonDatetime;
  @ViewChild(CalendarComponent) myCal: CalendarComponent;
  
  constructor(private modalCtrl: ModalController, private router: Router) { }

  ngOnInit() {
  }

  next() {
    this.myCal.slideNext();
  }

  back() {
    this.myCal.slidePrev();
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  save() {
    // this.datetime.nativeEl.save();
    this.modalCtrl.dismiss({event: this.event});
  }

  dateChanged(value) {
    console.log(value);
  }

  // async openCalModal() {
  //   const modal = await this.modalCtrl.create({
  //     component: CalendarPage,
  //     cssClass: 'calendar',
  //     backdropDismiss: false
  //   });

  //   await modal.present();

  //   modal.onDidDismiss().then((result) => {
  //     if (result.data && result.data.event) {
  //       let event = result.data.event;
  //       if (event.allDay) {
  //         let start = event.startTime;
  //         event.startTime = new Date(
  //           Date.UTC(
  //             start.getUTCFullYear(),
  //             start.getUTCMonth(),
  //             start.getUTCDate()
  //           )
  //         );
  //         event.endTime = new Date(
  //           Date.UTC(
  //             start.getUTCFullYear(),
  //             start.getUTCMonth(),
  //             start.getUTCDate() + 1
  //           )
  //         );
  //       }
  //       this.eventSource.push(result.data.event);
  //       this.myCal.loadEvents();
  //     }
  //   });
  // }
}
