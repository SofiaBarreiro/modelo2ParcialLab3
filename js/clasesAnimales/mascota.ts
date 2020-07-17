namespace general{


    export class Mascota{

        protected nombre: string;


        constructor(nombreA) {

            this.nombre = nombreA;

        }

        public getNombre(): string {

            return this.nombre;

        }

        public setNombre(nombreA): void {

           this.nombre = nombreA

        }


    }

    export class Gato extends Mascota{


        private cantVidas: number;

        constructor( public nombreA: string, public cantVidasA: number) {
            super(nombreA);

            this.cantVidas = cantVidasA;


        }




        public getVidasGato(): number{

            return this.cantVidas;

        }

        public setVidasGato(cantVidasA):void {

            this.cantVidas = cantVidasA;

        }

    }
    export class Pajaro extends Mascota{


        public tipo: eTipo;

        constructor(public nombreA: string, public tipoA: eTipo) {
            super(nombreA);

            this.tipo = tipoA;

        }

        
        public getTipo() :eTipo{

            return this.tipo;

        }

        public setTipo(tipoA): void{

            this.tipo = tipoA;

        }



    }
    export enum eTipo {

        Rapiña,
        Loro


    }

    export class Perro extends Mascota {


        public raza: string;

        constructor(public nombreA: string, public razaA: string) {
            super(nombreA);

            this.raza = razaA;

        }

        public getRaza() :string{

            return this.raza;

        }

        public setRaza(razaA):void {

            this.raza = razaA;

        }

    
    }

}
