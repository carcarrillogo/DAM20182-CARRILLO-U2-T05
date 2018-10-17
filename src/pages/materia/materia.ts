import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MateriasRest } from "../../services/materiasrest";

@IonicPage()
@Component({
  selector: 'page-materia',
  templateUrl: 'materia.html',
})
export class MateriaPage {
  nombre_user:any;
  photo_user:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public materiasrest: MateriasRest,) {
    this.nombre_user=navParams.get("nombre");
    this.photo_user=navParams.get("photo");
    this.materiasrest.getMaterias();
  }
  goMat(): void {
    this.navCtrl.push(MateriaPage, {
   
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MateriaPage');
  }

}
