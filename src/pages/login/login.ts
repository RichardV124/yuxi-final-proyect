import { TabsPage } from './../tabs/tabs';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user= { email : '', password : ''};

  constructor(public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthProvider, public alertCtrl: AlertController) {
  }

  login(): void{
    this.authProvider.login(this.user.email,this.user.password)
    .then((user) => {
      // El usuario ha iniciado sesion correctamente
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
  }


  goToSignupPage(): void {
    this.navCtrl.push('SignupPage');
  }

}
