

class Pajaro extends Mascota{


    public tipo:eTipo;

    constructor(public tipoA: eTipo, public nombreA:string) {
        super(nombreA);

        this.tipo = tipoA;

    }

}
enum eTipo {

Rapiña,
Loro


}
