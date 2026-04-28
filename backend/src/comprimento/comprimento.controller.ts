import { Controller, Get, Param, ParseFloatPipe } from '@nestjs/common';
import { ConversorService } from 'src/conversor/conversor.service';

@Controller('comprimento')//decorator de responsabilidade
export class ComprimentoController {
    constructor(private readonly service:ConversorService){}
    @Get('metros-para-km/:valor')
        getKm(@Param('valor',ParseFloatPipe)v:number){
        return{
            resultado:this.service.MetrosParaKm(v),
            unidade:'km'
        };
    }
    @Get('metros-para-milha/:valor')
        getmilha(@Param('valor',ParseFloatPipe)v:number){
        return{
            resultado:this.service.MetrosParaMilhas(v),
            unidade:'milhas'
        };
    }
    @Get('metros-para-pes/:valor')
        getpes(@Param('valor',ParseFloatPipe)v:number){
        return{
            resultado:this.service.MetrosParaPes(v),
            unidade:'pés'
        };
    }
}
