import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { Usuario } from 'src/app/shared/model/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-de-login',
  templateUrl: './tela-de-login.component.html',
  styleUrls: ['./tela-de-login.component.css']
})

export class TelaDeLoginComponent implements OnInit{
  usuario: Usuario;
  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService, private router: Router){
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
    this.usuarioService.listar().subscribe(
      usuarios => this.usuarios = usuarios
    );
  }

  login() {
    if(this.autenticarUsuario()) {
      this.router.navigate(['/menu'])
    } else {
      window.alert('Credenciais incorretas');
    }
  }

  autenticarUsuario(): boolean {
    for(let usuario of this.usuarios) {
      if(this.usuario.username === usuario.username && this.usuario.password === usuario.password) {
        return true;
      }
    }
    return false;
  }
}
