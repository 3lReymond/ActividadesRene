import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajesServiceService {

  mensaje : string ="Hola";

  mostraMensaje(){
    return this.mensaje;
  }
  constructor() { }
}
