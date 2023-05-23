import { UsuarioService } from './../../../shared/services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/shared/model/usuario';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {
  usuario: Usuario;
  constructor(private usuarioService: UsuarioService, private rotaAtual: ActivatedRoute, private router: Router) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
    const idUsuario = this.rotaAtual.parent?.snapshot.paramMap.get('id');
    if (idUsuario) {
      this.usuarioService.pesquisarPorId(parseInt(idUsuario)).subscribe(
        usuario => this.usuario = usuario
      )
    }
  }

  btnAlterar(){
    this.router.navigate(['alterar-usuario'], { relativeTo: this.rotaAtual.parent });
  }

  deletar(){

  }
}
