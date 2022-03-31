import { Component, OnInit } from '@angular/core';
import {colors} from "@angular/cli/utilities/color";
import {Problema} from "../modelos/Problema";
import {ActivatedRoute} from "@angular/router";
import {Ejemplo} from "../modelos/Ejemplo";
import { PeticionesService} from "../servicios/peticiones.service";
import {Solucion} from "../modelos/Solucion";
import {Tablon} from "../modelos/Tablon";
import {Comentario} from "../modelos/Comentario";
import {Test} from "../modelos/Test";

@Component({
  selector: 'app-problemas',
  templateUrl: './problemas.component.html',
  styleUrls: ['./problemas.component.css'],
  providers: [PeticionesService]
})
export class ProblemasComponent implements OnInit{
  public url = "/problemas/";
  public id: string | null | undefined;
  editor : any;
  editorOptions = {theme: 'vs-dark', language: 'java'};
  code: string= 'public void x(){\n System.out.println("Hola mundo"););\n};';
  problema: Problema = new Problema(1,"Array","jkbjbkjkjka\ndsjkbadsjbkadsjkbdasbjkd\nabjskjaskbdjbkdasjbkasd",[new Ejemplo("asdasd","asdasda","dadasda"),new Ejemplo("asdasd","asdasda","dadasda")],10,10,2,3,2,[new Solucion(1,10,3,122,"aceptada","public String X(){\n}")],new Tablon(1,[]),[new Test(1,1,"[9,1]","[1,2,3,4]")]);
  problemas:Problema[]= this.getProblemas();
  constructor( private route: ActivatedRoute, private peticiones: PeticionesService) {
    this.problema = new Problema(1,"Array","jkbjbkjkjka\ndsjkbadsjbkadsjkbdasbjkd\nabjskjaskbdjbkdasjbkasd",[new Ejemplo("asdasd","asdasda","dadasda"),new Ejemplo("asdasd","asdasda","dadasda")],10,10,2,3,2,[new Solucion(1,10,3,122,"aceptada","public String X(){\n}")],[],[new Test(1,1,"[9,1]","[1,2,3,4]")]);
    console.log(this.problema.ejemplos);
    console.log(new Ejemplo("qweqweq","asdasdasd","xcvxcvxcv"));
  }

  onInit(editor) {
    this.editor = editor;
    let line = this.editor.getPosition();
  }

  ngOnInit(): void {
    this.id= this.route.snapshot.paramMap.get('id');
    //this.problema = this.getProblema(this.id);
    this.peticiones.get(this.url +this.id).subscribe(
      result =>{
        console.log(result)
        this.problema = this.cargarProblema(result);
        console.log(this.problema);
      },
      error => {}
    )
    //this.problema = new Problema(1,"Array","jkbjbkjkjkadsjkbadsjbkadsjkbdasbjkdabjskjaskbdjbkdasjbkasd",this.getEjemplos(this.id),10,10,2,3,2,this.getSoluciones(this.id),this.getTablon(this.id),this.getTests(this.id));
  }

  private getProblemas() {
    /**var p = [
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
        "  instance, the numbers "],[new Ejemplo("nums = [2,7,11,15], target = 9","[0,1]","Because nums[0] + nums[1] == 9, we return [0, 1]."),new Ejemplo("nums = [3,2,4], target = 6","[1,2]","")]),
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
        "  instance, the numbers "],[new Ejemplo("nums = [2,7,11,15], target = 9","[0,1]","Because nums[0] + nums[1] == 9, we return [0, 1]."),new Ejemplo("nums = [3,2,4], target = 6","[1,2]","")])
    ]**/
    var p = [];
    return p;
  }

  public getResponseUri(uri){
    this.peticiones.get(uri).subscribe(
      result =>{
        console.log(result['response'])
        return result['response']
      },
      error => {}
    )
  }
  public getProblema(id){
    for(let i=0;i<this.problemas.length;i++){
      if (this.problemas[i].id==id) return this.problemas[i]
    }
    return this.problemas[0];
  }


  private getTablon(uri: string) {
    this.peticiones.get(uri).subscribe(
      result =>{
        console.log(result['response'])
        var resp = result['response'];
        // @ts-ignore
        var comentarios: Comentario[]=[];
        for(let i=0;i<resp.length;i++){
          console.log(resp[i])
          console.log(resp[i]['idComentario'])
          var coment = new Comentario(resp['idComentario'],resp['texto'],resp['likes'],resp['dislikes'],resp['idUsuario'],resp['idPooblema'],resp['fecha']);
          console.log(coment);
          comentarios.push(coment)
        }
        console.log(comentarios);
        return new Tablon(this.problema.id,comentarios);
      },
      error => { console.log("error")})

  }

  private getTests(id: string | null | undefined) {

  }

  private cargarProblema(result: Object) {
    console.log(result['response'])
    var p = result['response'];
    return new Problema(
      p['id'],
      p['titulo'],
      p['enunciado'],
      this.getEjemplos(p['ejemplos']),
      p['likes'],
      p['dislikes'],
      p['aceptacion'],
      p['dificultad'],
      p['autor'],
      this.getSoluciones(p['soluciones']),
      this.getTablon(p['tablon']),
      this.getTests(p['tests'])
    )
  }
  private getEjemplos(uri){
    var resp = this.getResponseUri(uri);
    //console.log(resp)
  }


  private getSoluciones(uri){
    var resp = this.getResponseUri(uri);
    //console.log(resp)
  }
}
