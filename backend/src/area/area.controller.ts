import { Controller, Get, Param, ParseFloatPipe } from '@nestjs/common';
import { ConversorService } from 'src/conversor/conversor.service';

@Controller('area')
export class AreaController {
    constructor(private readonly service:ConversorService){}
    @Get('metros-quadrados-para-km-quadrado/:valor')
        getKm(@Param('valor',ParseFloatPipe)v:number){
        return{
            resultado:this.service.MetrosParaKm(v),
            unidade:'km²'
        };
    }
    @Get('metros-quadrados-para-acre/:valor')
        getmilha(@Param('valor',ParseFloatPipe)v:number){
        return{
            resultado:this.service.MetrosParaMilhas(v),
            unidade:'mi²'
        };
    }
    @Get('metros-quadrados-para-pes-quadrados/:valor')
        getpes(@Param('valor',ParseFloatPipe) v:number){
        return{
            resultado:this.service.MetrosParaPes(v),
            unidade:'ft²'
        };
    }
}
