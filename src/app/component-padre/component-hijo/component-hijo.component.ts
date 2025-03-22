import { Component, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-component-hijo',
  imports: [],
  templateUrl: './component-hijo.component.html',
  styleUrl: './component-hijo.component.css'
})
export class ComponentHijoComponent {
  mensaje:string ="Mensaje desde el componente hijo";

  cambiarMensaje(nuevoMensaje : string){
    this.mensaje = nuevoMensaje;
  }
}
