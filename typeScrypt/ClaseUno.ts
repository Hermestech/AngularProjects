let a: string = 'hola';
a = 'Holas';

let b: number = 123;
b = 1234;

//Lo ideal siempre es tener un tipo de dato definido

function suma(num1: number, num2: number): number{
    return num1 + num2;
}

suma(1,2);
//type es un keyword que nos permite dar semántica a variables

type dni = string;
let dniNumber: dni = '234';

class Transporte {
    private velocidad: number;
    private formaDeMovilidad: string;

    constructor(velocidad: number, formaDeMovilidad: string) {
        this.velocidad = velocidad;
        this.formaDeMovilidad = formaDeMovilidad;
    }

    getVelocidad(){
        return this.velocidad;
    }

    setVelocidad(velocidad: number){
        this.velocidad = velocidad;
    }

    getFormaDeMovilidad(){
        return this.formaDeMovilidad;
    }

    setFormaDeMovilidad(formaDeMovilidad: string){
        this.formaDeMovilidad = formaDeMovilidad;
    }
}

const transporte: Transporte = new Transporte(20, 'suelo');

class Auto extends Transporte {
    private cantidadPuertas: number;

    constructor(velocidad:number, formaDeMovilidad: string, cantidadPuertas: number){
        super(velocidad, formaDeMovilidad);
        this.cantidadPuertas = cantidadPuertas;
    }

    getVelocidad(){
        return  super.getVelocidad() + 10;
    }
}