export class Comentario{
  constructor(
    public idComentario: number,
    public texto: string,
    public likes:number,
    public dislikes:number,
    public idUsuario: number,
    public idProblema: number,
    public fecha: number
  ) {
  }
}
