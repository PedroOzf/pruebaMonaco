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
    this.problema = new Problema(1,"Pedro",[
      "  Given two non-empty arrays of integers, write a function that determines" +
      "  whether the second array is a subsequence of the first one","A subsequence of an array is a set of numbers that aren't necessarily adjacent\n" +
      "  in the array but that are in the same order as they appear in the array. For\n" +
      "  instance, the numbers ","","  Given two non-empty arrays of integers, write a function that determines" +
      "  whether the second array is a subsequence of the first one","A subsequence of an array is a set of numbers that aren't necessarily adjacent\n" +
      "  in the array but that are in the same order as they appear in the array. For\n" +
      "  instance, the numbers ","  Given two non-empty arrays of integers, write a function that determines" +
      "  whether the second array is a subsequence of the first one","A subsequence of an array is a set of numbers that aren't necessarily adjacent\n" +
      "  in the array but that are in the same order as they appear in the array. For\n" +
      "  instance, the numbers ","  Given two non-empty arrays of integers, write a function that determines" +
      "  whether the second array is a subsequence of the first one","A subsequence of an array is a set of numbers that aren't necessarily adjacent\n" +
      "  in the array but that are in the same order as they appear in the array. For\n" +
      "  instance, the numbers ","  Given two non-empty arrays of integers, write a function that determines" +
      "  whether the second array is a subsequence of the first one","A subsequence of an array is a set of numbers that aren't necessarily adjacent\n" +
      "  in the array but that are in the same order as they appear in the array. For\n" +
      "  instance, the numbers ","\n" +
      "  A subsequence of an array is a set of numbers that aren't necessarily adjacent\n" +
      "  in the array but that are in the same order as they appear in the array. For\n" +
      "  instance, the numbers "],["array = [1,2,3,5]","sequence = [1,-1,2.3"],["true"]);
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
