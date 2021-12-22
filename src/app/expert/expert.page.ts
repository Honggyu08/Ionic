import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-expert',
  templateUrl: './expert.page.html',
  styleUrls: ['./expert.page.scss'],
})
export class ExpertPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async applyClicked() {
    const alert = await this.alertController.create({
      header: 'Apply',
      message: '신청하시겠습니까?',
      buttons: [
        {
          text: '아니요',
          role: 'cancel',
          handler: () => {}
        },
        {
          text: '네',
          handler: () => {}
        }
      ]
    });

    await alert.present();
    
    const button = document.querySelector('.save');
    button.addEventListener('click', this.applyClicked);
  }
}
