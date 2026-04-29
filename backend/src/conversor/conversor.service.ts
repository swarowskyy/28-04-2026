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

MetrosQuadradosParaAcre(valor:number){
    return valor/ 4047;
}
MetrosquadradorParaPesQuadrados(valor:number){
     return valor/10764;
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


//velocidade
KmParaMetrosPorSegundo(valor:number){
    return valor/3.6;
}
KmParaMilhasPorHora(valor:number){
    return valor/1.609;
}
NósParaKm(valor:number){
    return valor*1.852;
}

//massa
QuilosparaGramas(valor:number){
    return valor*1000;
}
QuilosparaLibras(valor:number){
    return valor*2205;
}
QuilosparaOnças(valor:number){
    return valor*35274;
}
}