import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.page.html',
  styleUrls: ['./diagnosis.page.scss'],
})
export class DiagnosisPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  async takePicture() {
    // await Camera.requestPermissions();
    const image = await Camera.getPhoto({
      quality: 100,
      //allowEditing: true,
      source: CameraSource.Prompt,

      resultType: CameraResultType.Uri
    });

    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be 
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.base64 to getPhoto)
    var imageUrl = image.webPath;

    // Can be set to the src of an image now
    // imageElement.src = imageUrl;
  }
}
