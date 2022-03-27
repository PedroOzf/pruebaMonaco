import { Component } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebAppAngular';
  cssUrl: string;
  cssUrl3: string;
  public identificado: boolean;  editorOptions = {theme: 'monokai', language: 'java'};
  code: string= 'public void x(){\n System.out.println("Hola mundo"););\n};';

  constructor(public sanitizer:DomSanitizer) {
    this.cssUrl = "/assets/css/style.css";
    this.cssUrl3 = "/assets/css/owl.carousel.min.css";
    this.identificado = true;
  }
  setId(){
    if(this.identificado == true) this.identificado=false;
    else this.identificado=true;
  }
}
