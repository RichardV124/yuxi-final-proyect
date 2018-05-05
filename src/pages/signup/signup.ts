import { TabsPage } from './../tabs/tabs';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  user= { email : '', password : ''};

  passwordValidation: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private authProvider: AuthProvider,public alertCtrl:AlertController) {
  }

  signup(){
    if(this.user.password==this.passwordValidation){
    this.authProvider.signup(this.user.email,this.user.password)
    .then((user) => {
      // El usuario se ha creado correctamente
      this.navCtrl.setRoot(TabsPage);

    })
    .catch(err=>{
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: err.message,
        buttons: ['Aceptar']
      });
      alert.present();
    })
  }else{
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: "Las contraseñas no coinciden",
      buttons: ['Aceptar']
    });
    alert.present();
  }
  }

}
