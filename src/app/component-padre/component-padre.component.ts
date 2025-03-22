import { Component, viewChild,ElementRef, ViewChild} from '@angular/core';
import { ComponentHijoComponent } from './component-hijo/component-hijo.component';


@Component({
  selector: 'app-component-padre',
  imports: [ComponentHijoComponent],
  templateUrl: './component-padre.component.html',
  styleUrl: './component-padre.component.css'
})
export class ComponentPadreComponent {

  @ViewChild('cambiarMensaje') cambiar !: string;

  
}