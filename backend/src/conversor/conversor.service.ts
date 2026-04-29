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
    return valor/1000000;
}

//temperatura
CelsiusParaFahrenheit(valor:number){
    return valor*1.8 + 32;
}
CelsiusParaKelvin(valor:number){
    return valor + 273.15
}
FahrenheitParaCelsius(valor:number){
    return valor - 32 / 1.8;
}

}