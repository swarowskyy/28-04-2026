
import { Controller, Get, Param, ParseFloatPipe } from '@nestjs/common';
import { ConversorService } from 'src/conversor/conversor.service';

@Controller('Massa')//decorator de responsabilidade
export class MassaController {
    constructor(private readonly service:ConversorService){}
    @Get('Quilos-para-Gramas/:valor')
        getkg(@Param('valor',ParseFloatPipe)v:number){
        return{
            resultado:this.service.QuilosparaGramas(v),
            unidade:'g'
        };
    }
    @Get('Quilos-para-Libras/:valor')
        getib(@Param('valor',ParseFloatPipe)v:number){
        return{
            resultado:this.service.QuilosparaLibras(v),
            unidade:'ib'
        };
    }
    @Get('Quilos-para-Onças/:valor')
        getoz(@Param('valor',ParseFloatPipe)v:number){
        return{
            resultado:this.service.QuilosparaOnças(v),
            unidade:'oz'
        };
    }
}
