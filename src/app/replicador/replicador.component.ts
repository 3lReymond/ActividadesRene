import { Component } from '@angular/core';

@Component({
  selector: 'app-replicador',
  imports: [],
  templateUrl: './replicador.component.html',
  styleUrl: './replicador.component.css'
})
export class ReplicadorComponent {
  text:string ="";

  actualizarTexto(event : Event):void{
    const elementoInput = event.target as HTMLInputElement;
    this.text = elementoInput.value;
  }
}
