import { Get, Injectable, Param, ParseFloatPipe } from '@nestjs/common';
import { ConversorService } from 'src/conversor/conversor.service';

@Injectable()
export class VelocidadeService {
    constructor(private readonly service:ConversorService){}
@Get('km-para-m/s /:valor')
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
    @Get('nós-para-km/:valor')
        getpes(@Param('valor',ParseFloatPipe)v:number){
        return{
            resultado:this.service.NósParaKm(v),
            unidade:'km'
        };
    }
}