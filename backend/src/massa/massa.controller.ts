
import { Controller, Get, Param, ParseFloatPipe } from '@nestjs/common';
import { ConversorService } from 'src/conversor/conversor.service';

@Controller('massa')//decorator de responsabilidade
export class MassaController {
    constructor(private readonly service:ConversorService){}
    @Get('quilos-para-gramas/:valor')
        getkg(@Param('valor',ParseFloatPipe)v:number){
        return{
            resultado:this.service.QuilosparaGramas(v),
            unidade:'g'
        };
    }
    @Get('quilos-para-libras/:valor')
        getib(@Param('valor',ParseFloatPipe)v:number){
        return{
            resultado:this.service.QuilosparaLibras(v),
            unidade:'ib'
        };
    }
    @Get('quilos-para-onças/:valor')
        getoz(@Param('valor',ParseFloatPipe)v:number){
        return{
            resultado:this.service.QuilosparaOnças(v),
            unidade:'oz'
        };
    }
}
