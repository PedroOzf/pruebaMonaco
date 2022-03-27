import { NgModule } from '@angular/core';
import { Routes, RouterModule} from "@angular/router";

import { MainComponent } from './main/main.component'
import { ProblemasComponent } from "./problemas/problemas.component";
import {UsuarioComponent} from "./usuario/usuario.component";

const routes: Routes = [
  {path: 'main',component: MainComponent},
  {path:'problemas',component: ProblemasComponent},
  {path:'usuario',component: UsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
