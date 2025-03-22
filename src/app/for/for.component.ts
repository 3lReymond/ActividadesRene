import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  imports: [],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {
  tareas:string[]=[
    'Aprender Angular',
    'Desarrollar una app',
    'Apreder TypeScript'
  ];

  agregarTarea(nuevaTarea: string):void{
    if(nuevaTarea){
      this.tareas.push(nuevaTarea);
    }
  }
}
