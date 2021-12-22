import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.page.html',
  styleUrls: ['./privacy.page.scss'],
})
export class PrivacyPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async saveButtonClick() {
    const alert = await this.alertController.create({
      header: 'SAVE',
      message: '저장하시겠습니까?',
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
    button.addEventListener('click', this.saveButtonClick);
  }
  // 저장 버튼을 누르면 알림 창이 뜸

  async withdrawClick() {
    const alert = await this.alertController.create({
      header: '탈퇴하시겠습니까?',
      message: '모든 정보가 삭제되며 복구할 수 없습니다.',
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

    const withdrawBtn = document.querySelector('a');
    withdrawBtn.addEventListener('click', this.withdrawClick);
  }
  // 탈퇴 버튼을 누르면 알림 창이 뜸
  // handler부분 작성하기
}
