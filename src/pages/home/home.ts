
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public showPicture: boolean = false;
  public base64Image: string;

  constructor(public navCtrl: NavController,public cameraPlugin:Camera) {

  }

  takePicture(){
    this.cameraPlugin.getPicture({
      quality: 100,
  destinationType: this.cameraPlugin.DestinationType.DATA_URL,
  encodingType: this.cameraPlugin.EncodingType.JPEG,
  mediaType: this.cameraPlugin.MediaType.PICTURE
    }).then((imageData) => {
      // imageData is a base64 encoded string
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      this.showPicture = true;
    }, (err) => {
        console.log(err);
    });
  }

}
