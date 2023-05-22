import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/shared/model/usuario';

@Component({
  selector: 'app-criar-usuario',
  templateUrl: './criar-usuario.component.html',
  styleUrls: ['./criar-usuario.component.css']
})

export class CriarUsuarioComponent implements OnInit{
  usuario: Usuario;
  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
    this.usuarioService.listar().subscribe(
      usuarios => this.usuarios = usuarios
    );
  }

  criarUsuario(usuario: Usuario) {
    this.usuarioService.adicionar(usuario).subscribe(
      novoUsuario => this.usuarios.push(novoUsuario)
    )
  }
}
