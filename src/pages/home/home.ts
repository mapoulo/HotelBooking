import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'firebase';
import { Transporter } from '../../app/firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  sum:number;
  price=0;
  rooms = [];
  ref = firebase.database().ref('rooms/');
  constructor(public navCtrl: NavController) {
    this.ref.on('value', address => {
      this.rooms = Transporter(address);
    })
  }
  delete(key){
    firebase.database().ref('rooms/'+key).remove();
  }
}
