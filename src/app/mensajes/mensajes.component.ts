import { Component } from '@angular/core';
import { MensajesServiceService } from '../service/mensajes-service.service';

@Component({
  selector: 'app-mensajes',
  imports: [],
  templateUrl: './mensajes.component.html',
  styleUrl: './mensajes.component.css'
})
export class MENSAJESComponent {

  mensaje !: string;
  constructor(mostra : MensajesServiceService){
    this.mensaje =mostra.mostraMensaje();
  }
  

}
