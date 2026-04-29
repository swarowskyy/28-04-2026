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
}//velocidade
KmParaMetrosPorSegundo(valor:number){
    return valor/3.6;
}//velocidade
KmParaMilhasPorHora(valor:number){
    return valor/1.609;
}//velocidade
NósParaKm(valor:number){
    return valor*1.852;
}
}

