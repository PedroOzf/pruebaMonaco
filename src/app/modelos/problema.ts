import {Ejemplo} from "./ejemplo";

export class Problema{


  constructor(
    public id:number,
    public nombre: string,
    public enunciado: string[],
    public ejemplos:Ejemplo[]
  ){}
}
