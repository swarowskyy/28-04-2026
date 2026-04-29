import { Controller, Get, Param, ParseFloatPipe } from '@nestjs/common';
import { ConversorService } from 'src/conversor/conversor.service';

@Controller('velocidade')
export class VelocidadeController {
    constructor(private readonly service:ConversorService){}
    @Get('km-para-m/s/:valor')
        getKm(@Param('valor',ParseFloatPipe)v:number){
        return{
            resultado:this.service.KmParaMetrosPorSegundo(v),
            unidade:'m/s'
        };
    }
    @Get('km-para-mph/:valor')
        getmilha(@Param('valor',ParseFloatPipe)v:number){
        return{
            resultado:this.service.KmParaMilhasPorHora(v),
            unidade:'mph'
        };
    }
    @Get('nos-para-km/:valor')
        getpes(@Param('valor',ParseFloatPipe)v:number){
        return{
            resultado:this.service.NosParaKm(v),
            unidade:'km'
        };
    }
}
