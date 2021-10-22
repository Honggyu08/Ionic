import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async saveButtonClick() {
    const alert = await this.alertController.create({
      header: 'SAVE',
      message: '저장하시겠습니까?',
      buttons: [
        {
          text: '네',
          handler: () => {}
        },
        {
          text: '아니요',
          role: 'cancel',
          handler: () => {}
        }
      ]
    });

    await alert.present();
    
    const button = document.querySelector('.save');
    button.addEventListener('click', this.saveButtonClick);
  }
  // 저장 버튼을 누르면 알림 창이 뜸
}
