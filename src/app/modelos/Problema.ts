import {Ejemplo} from "./Ejemplo";
import {Test} from "./Test";
import {Solucion} from "./Solucion";
import {Tablon} from "./Tablon";

export class Problema{
  public id:number;
  public titulo: string;
  public enunciado: string[];
  public ejemplos:Ejemplo[];
  public likes: number;
  public dislikes: number;
  public aceptacion: string;
  public dificultad:number;
  public autor: string;
  public soluciones: Solucion[];
  public tablon : Tablon | undefined;
  public tests : Test[];

  public constructor(
    id,
    titulo,
    enunciado,
    ejemplos,
    likes,
    dislikes,
    aceptacion,
    dificultad,
    autor,
    soluciones,
    tablon,
    tests
  ){
    this.id = id;
    this.titulo = titulo;
    this.enunciado = enunciado.split("\n");
    this.ejemplos = ejemplos;
    this.likes = likes;
    this.dislikes = dislikes;
    this.aceptacion = aceptacion;
    this.dificultad = dificultad;
    this.autor = autor;
    this.soluciones = [];
    this.tests = [];
  };


}
