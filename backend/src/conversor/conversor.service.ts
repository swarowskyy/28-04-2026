import { Injectable } from '@nestjs/common';

@Injectable()
export class ConversorService {
//comprimento
MetrosParaKm(valor:number){
    return valor/1000;
 }
MetrosParaMilhas(valor:number){
    return valor/1609;
}
MetrosParaPes(valor:number){
    return valor/3281;
}

//area
MetrosQuadradosParaKmQuadrado(valor:number){
    return valor/
}

//temperatura
CelsiusParaFahrenheit(valor:number){
    return valor/
}
CelsiusParaKelvin(valor:number){
    return valor/
}
FahrenheitParaCelsius(valor:number){
    return valor/
}

}