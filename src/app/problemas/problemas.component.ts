import { Component, OnInit } from '@angular/core';
import {colors} from "@angular/cli/utilities/color";
import {Problema} from "../modelos/problema";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-problemas',
  templateUrl: './problemas.component.html',
  styleUrls: ['./problemas.component.css'],
})
export class ProblemasComponent implements OnInit{
  public id: string | null | undefined;
  editor : any;
  editorOptions = {theme: 'vs-dark', language: 'java'};
  code: string= 'public void x(){\n System.out.println("Hola mundo"););\n};';
  problema: Problema;
  problemas:Problema[]= this.getProblemas();
  constructor( private route: ActivatedRoute) {
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
    this.id= this.route.snapshot.paramMap.get('id');
    console.log(this.id)
    this.problema = this.getProblema(this.id);

  }

  private getProblemas() {
    var p = [
      new Problema(1,"Pedro",[
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
        "  instance, the numbers "],["array = [1,2,3,5]","sequence = [1,-1,2.3"],["true"]),
      new Problema(2,"dasdasdasda",[
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
        "  instance, the numbers "],["array = [1,2,3,5]","sequence = [1,-1,2.3"],["true"])
    ]
    return p;
  }
  public getProblema(id){
    for(let i=0;i<this.problemas.length;i++){
      if (this.problemas[i].id==id) return this.problemas[i]
    }
    return this.problemas[0];
  }
}
