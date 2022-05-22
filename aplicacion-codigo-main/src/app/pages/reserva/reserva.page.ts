import { AlertController } from '@ionic/angular';
import { DatalocalService } from './../../servicios/datalocal.service';

import { Component, OnInit } from '@angular/core';
import { usuarioInterface } from 'src/app/utils/interfaces/usuario.interface';
import { UsuariosService } from 'src/app/servicios/usuarios.service';


@Component({
  selector: 'dogi-reserva',
  templateUrl: './reserva.page.html',
  styleUrls: ['./reserva.page.scss'],
})
export class ReservaPage implements OnInit {

  constructor(private datalocal:DatalocalService,private usu:UsuariosService, private alertController:AlertController) { }
  usuario:usuarioInterface;
  nombreCompleto:String;
  ngOnInit() {
  }
  ionViewWillEnter(){
    this.datalocal.getToken().then(data=>{
      if(data===null){
        this.usuario=null;
      }else{
        this.usuario=this.usu.decodificar(data);
        this.nombreCompleto=`${this.usuario.nombre} ${this.usuario.ap} ${this.usuario.am}`
      }
    });
  }
 

  reservas=[
    {
      'hora':"10:30",
    },
    {
      'hora':"11:00",
    },
    {
      'hora':"11:30",
    },
    {
      'hora':"9:00",
    },
    {
      'hora':"17:00",
    }
  ]
GenerarReserva(){
  this.presentAlert();
}
  async presentAlert() {
    const alert = await this.alertController.create({
      // cssClass: 'my-custom-class',
      header: 'Se realizo con exito',
      subHeader: '',
      message: 'En unos minutos la veterinaria agendara su reserva',
      buttons: ['ok']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
