import { Controller, Get, Param, ParseFloatPipe } from '@nestjs/common';
import { ConversorService } from 'src/conversor/conversor.service';

@Controller('temperatura')
export class TemperaturaController {
    constructor(private readonly service:ConversorService){}
    @Get('celsius-para-fahrenheit/:valor')
    getFahrenheit(@Param('valor',ParseFloatPipe)v:number){
        return{
            resultado:this.service.CelsiusParaFahrenheit(v),
            unidade:'c'
        };
    }
    @Get('celsius-para-kelvin/:valor')
    getKelvin(@Param('valor',ParseFloatPipe)v:number){
        return{
            resultado:this.service.CelsiusParaKelvin(v),
            unidade:'k'
        };
    }
    @Get('fahrenheit-para-celsius/:valor')
    getCelsius(@Param('valor',ParseFloatPipe)v:number){
        return{
            resultado:this.service.FahrenheitParaCelsius(v),
            unidade:'f'
        };
    }
}