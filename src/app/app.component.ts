import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { firebaseConfig } from '../app/firebase';
import * as firebase from 'firebase';


import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      // this.state()
    });
    firebase.initializeApp(firebaseConfig);
  }
}
//   state(){
//     firebase.auth().onAuthStateChanged((user) => {
//       if(user) {
//         this.rootPage = HomePage;
//       }else {
//         this.rootPage = LoginPage
//       }
//     })
//   }
// }

