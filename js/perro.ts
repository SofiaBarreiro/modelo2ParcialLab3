
class Perro extends Mascota{


    public raza:string;

    constructor(public razaA: string, public nombreA:string) {
        super(nombreA);

        this.raza = razaA;

    }

}