export class Mensaje {

    usuario: string;
    contenido: string;
    fechaEnvio: Date;
    constructor(user:string,contenido: string) {
        this.contenido = contenido;
        this.usuario = user
        this.fechaEnvio = new Date();
      }

}
