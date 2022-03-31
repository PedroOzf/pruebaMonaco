import {Comentario} from "./Comentario";

export class Tablon{
  constructor(
    private idProblema: number,
    private comentarios: Comentario[]
  ) {
  }
}
