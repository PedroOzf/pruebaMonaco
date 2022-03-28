import { Component, OnInit } from '@angular/core';
import {colors} from "@angular/cli/utilities/color";
import {Problema} from "../modelos/problema";

@Component({
  selector: 'app-problemas',
  templateUrl: './problemas.component.html',
  styleUrls: ['./problemas.component.css'],
})
export class ProblemasComponent implements OnInit{
  editor : any;
  editorOptions = {theme: 'vs-dark', language: 'java'};
  code: string= 'public void x(){\n System.out.println("Hola mundo"););\n};';
  problema: Problema;
  constructor() {
    this.problema = new Problema("Pedro","asdasdasd");
  }
  onInit(editor) {
    this.editor = editor;
    let line = this.editor.getPosition();
    console.log(editor.getModel().getValue());
  }

  ngOnInit(): void {
    console.log(this.problema)
  }

}
