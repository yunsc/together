import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Locations } from '../../providers/locations';

/*
  Generated class for the List page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  i: number;
  constructor(public navCtrl: NavController, public locations: Locations) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }  
}
