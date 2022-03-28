export class Problema{


  constructor(
    public id:number,
    public nombre: string,
    public enunciado: string[],
    public ejemploInput:string[],
    public ejemploOutput: string[]
  ){}
}
