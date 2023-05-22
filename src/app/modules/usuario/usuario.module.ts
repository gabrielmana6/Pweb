import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';

import { CriarUsuarioComponent } from './criar-usuario/criar-usuario.component';
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';
import { AlterarUsuarioComponent } from './alterar-usuario/alterar-usuario.component';



@NgModule({
  declarations: [
    CriarUsuarioComponent,
    ListarUsuarioComponent,
    AlterarUsuarioComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    CriarUsuarioComponent,
    ListarUsuarioComponent
  ]
})
export class UsuarioModule { }
