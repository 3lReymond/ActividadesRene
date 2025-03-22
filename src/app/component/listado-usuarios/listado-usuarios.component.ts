import { Component } from '@angular/core';
import { UsuariosService } from '../../service/usuarios.service';

@Component({
  selector: 'app-listado-usuarios',
  imports: [],
  templateUrl: './listado-usuarios.component.html',
  styleUrl: './listado-usuarios.component.css'
})
export class ListadoUsuariosComponent {
  usuarios: any[] = [];

  constructor(private usuarioService:UsuariosService){
    ngOnInít() : void{
      this.usuarioService.obtenerDatos().subscribe((data)=> {this.usuarios = data});
    }
  }
}
