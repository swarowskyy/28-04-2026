import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConversorService } from './conversor/conversor.service';
import { ComprimentoController } from './comprimento/comprimento.controller';
import { ComprimentoService } from './comprimento/comprimento.service';
import { VelocidadeService } from './velocidade/velocidade.service';
import { MassaController } from './massa/massa.controller';
import { TemperaturaService } from './temperatura/temperatura.service';
import { TemperaturaController } from './temperatura/temperatura.controller';

@Module({
  imports: [],
  controllers: [AppController, ComprimentoController, TemperaturaController, MassaController],
  providers: [AppService, ConversorService, ComprimentoService, VelocidadeService,TemperaturaService ],
})


