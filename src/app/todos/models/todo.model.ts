export class Todo {
    public id: number;
    public texto: string;
    public completado: boolean;

    constructor( texto: string) {
        this.texto = texto;
        this.id    = Math.random();
        this.completado = false;
    }

}

// export interface Todo {
//      id: number,
//     texto: string;
//     completado: boolean;
// }