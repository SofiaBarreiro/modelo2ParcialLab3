namespace general{


    // var listaMascotas:Array<Mascota> = new Array<Mascota>(); 

    export function guardar(): void {

        var nombre:string = "";
        var cantVidas:number = 2;
        var miGato:Gato = new Gato(nombre, cantVidas);


        var miPerro:Perro = new Perro('nombre', 'cantVidas');

        // var miPajaro:Pajaro = new Pajaro('nombre', eTipo.Loro);

        // listaMascotas.push(miGato);

    }

}