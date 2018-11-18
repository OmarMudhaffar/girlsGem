import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { AddPage } from '../add/add';
import { InfoPage } from '../info/info';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  list : Observable<any>

  constructor(public navCtrl: NavController,public db : AngularFireDatabase) {
  this.list =  db.list("posts").valueChanges();
  }


  add(){
    this.navCtrl.push(AddPage);
  }

  viewInfo(title,info,date){
    this.navCtrl.push(InfoPage,{
      title:title,
      info:info,
      date:date,
    })
  }

}
