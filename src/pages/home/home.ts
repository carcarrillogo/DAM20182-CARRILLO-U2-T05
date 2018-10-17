import { Component } from '@angular/core';
import { NavController,MenuController } from 'ionic-angular';
import { OtherPage } from '../otherPage/otherPage';
import { ApiRest } from "../../services/apirest";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nombre: any;
  photo: any;
  private credentials: any = {
    nc: '',
    pass: ''
  };
  constructor(public navCtrl: NavController, public apirest: ApiRest,  public menuCtrl: MenuController) {
    this.apirest.getUsers();
    this.menuCtrl.enable(false, 'mainMenu');
  }
  goToOtherPage(): void {
    this.navCtrl.push(OtherPage, {
      nombre:"Carlos",
    }
    );
  }
  ionViewDidLoad() {
    console.log('Enter on Page');
  }
}
