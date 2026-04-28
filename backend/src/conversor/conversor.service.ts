import { Injectable } from '@nestjs/common';

@Injectable()
export class ConversorService {
//comprimento
metrosParaKm(valor:number){
    return valor/1000;
 }
}
