import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './layout/menu/menu.component';
import { TelaDeLoginComponent } from './modules/login/tela-de-login/tela-de-login.component';
import { CriarUsuarioComponent } from './modules/usuario/criar-usuario/criar-usuario.component';

const routes: Routes = [
  {
    path: 'login',
    component: TelaDeLoginComponent
  },
  {
    path: 'criar-usuario',
    component: CriarUsuarioComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
