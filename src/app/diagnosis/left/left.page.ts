import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.page.html',
  styleUrls: ['./left.page.scss'],
})
export class LeftPage implements OnInit {

  selectedImage: any;

  constructor() { }

  ngOnInit() {
  }

  checkPlatformForWeb() {
    if(Capacitor.getPlatform() == 'web') return true;
    return false;
  }

  async takePicture() {
    // await Camera.requestPermissions();
    const image = await Camera.getPhoto({
      quality: 100,
      //allowEditing: true,
      source: CameraSource.Prompt,

      resultType: this.checkPlatformForWeb() ? CameraResultType.DataUrl : CameraResultType.Uri // Uri 보통 app에서, DataUrl 브라우져
    });

    this.selectedImage = image;
    if(this.checkPlatformForWeb()) this.selectedImage.webPath = image.dataUrl;
  }
}
