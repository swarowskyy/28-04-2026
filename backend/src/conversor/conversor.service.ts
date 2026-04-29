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
// Quilos
 QuilosparaGramas(valor:number){
 return valor*1000;
 }
 //Libras
 QuilosparaLibras(valor:number){
    return valor*2205;
 }
 //Onças
 QuilosparaOnças(valor:number){
    return valor*35274;

}

