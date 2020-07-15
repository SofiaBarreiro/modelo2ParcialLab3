
class Gato extends Mascota{


    public cantVidas:number;

    constructor(public cantVidasA: number, public nombreA:string) {
        super(nombreA);

        this.cantVidas = cantVidasA;

    }

}