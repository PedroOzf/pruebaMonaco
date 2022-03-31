export class Solucion{
  constructor(
    private idProblema:number,
    private idUsuario:number,
    private idSolucion:number,
    private tiempoResolucion : number,
    private estado: string,
    private codigo: string
  ) {
  }
}
