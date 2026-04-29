
import { Controller, Get, Param, ParseFloatPipe } from '@nestjs/common';
import { ConversorService } from 'src/conversor/conversor.service';
@Controller('massa')
export class MassaController {}




@Controller('Massa')//decorator de responsabilidade
export class MassaControllerController {
    constructor(private readonly service:ConversorService){}
    @Get('Quilos-para-Gramas/:valor')
        getkg(@Param('valor',ParseFloatPipe)v:number){
        return{
            resultado:this.service.MetrosParaKm(v),
            unidade:'kg'
        };
    }
    @Get('Quilos-para-Libras/:valor')
        getib(@Param('valor',ParseFloatPipe)v:number){
        return{
            resultado:this.service.MetrosParaMilhas(v),
            unidade:'ib'
        };
    }
    @Get('metros-para-pes/:valor')
        getoz(@Param('valor',ParseFloatPipe)v:number){
        return{
            resultado:this.service.MetrosParaPes(v),
            unidade:'oz'
        };
    }
}
