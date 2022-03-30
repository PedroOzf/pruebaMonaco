import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonacoEditorModule} from "ngx-monaco-editor";
import { MainComponent } from './main/main.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ProblemasComponent } from './problemas/problemas.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UsuarioComponent,
    ProblemasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MonacoEditorModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
