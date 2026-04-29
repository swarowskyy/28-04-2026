import { Controller, Get, Param, ParseFloatPipe } from '@nestjs/common';
import { ConversorService } from 'src/conversor/conversor.service';

@Controller('temperatura')
export class TemperaturaController {
    constructor(private readonly service:ConversorService){}
    @Get('celsius-para-fahrenheit/:valor')
    getfahrenheit(@Param('valor',ParseFloatPipe)v:number){
        return{
            resultado:this.service.CelsiusParaFahrenheit(v),
            unidade:'F'
        };
    }
    @Get('celsius-para-kelvin/:valor')
    getkelvin(@Param('valor',ParseFloatPipe)v:number){
        return{
            resultado:this.service.CelsiusParaKelvin(v),
            unidade:'K'
        };
    }
    @Get('fahrenheit-para-celsius/:valor')
    getcelsius(@Param('valor',ParseFloatPipe)v:number){
        return{
            resultado:this.service.FahrenheitParaCelsius(v),
            unidade:'C'
        };
    }
}