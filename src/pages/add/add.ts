import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public db : AngularFireDatabase,public toast : ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

  add(title,info){
  this.db.list("posts").push({
   title:title,
   info:info,
   date:"2018/11/18"
  }).then( ()=> {
   this.toast.create({
     message:"post has been added",
     duration:3000
   }).present();
   this.navCtrl.pop();
  })
  }

}
