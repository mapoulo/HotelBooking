import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewRoomsPage } from '../view-rooms/view-rooms';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  GoToViewRoomsPage(){
    this.navCtrl.push(ViewRoomsPage);
  }

}
