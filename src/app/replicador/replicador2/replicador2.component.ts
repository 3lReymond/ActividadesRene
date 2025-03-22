import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-replicador2',
  imports: [FormsModule],
  templateUrl: './replicador2.component.html',
  styleUrl: './replicador2.component.css'
})
export class Replicador2Component {
  saludo: string = "Saludo inicial";
}
