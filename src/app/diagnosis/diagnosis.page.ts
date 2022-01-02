import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.page.html',
  styleUrls: ['./diagnosis.page.scss'],
})
export class DiagnosisPage implements OnInit {

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

/*
ios
  <key>NSCameraUsageDescription</key>
  <string>To Take Photos and Video</string>
  <key>NSPhototLibraryAddUsageDescription</key>
  <string>Store camera photos to camera</string>
  <key>NSPhotoLibraryUsageDescription</key>
  <string>Need library access to upload images</string>
*/
/*
ionic capacitor add android
capacitor.config.json에서 appID 바꾸기 (ex]edu.skku.skin)
위에 안 해도 될 듯
AndroidManifest.xml에 이거 추가
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
variables.gradle.file에 
androidxExifInterfaceVersion = '1.3.2'
androidxMaterialVersion = '1.3.0'
ionic cap sync android
ionic cap open android
build apk
*/