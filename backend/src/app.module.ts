import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConversorService } from './conversor/conversor.service';
import { ComprimentoController } from './comprimento/comprimento.controller';
import { AreaController } from './area/area.controller';
import { TemperaturaController } from './temperatura/temperatura.controller';
import { VelocidadeController } from './velocidade/velocidade.controller';
import { MassaController } from './massa/massa.controller';
import { ComprimentoService } from './comprimento/comprimento.service';


@Module({
  imports: [],
  providers: [AppService, ConversorService, ComprimentoService ],
  controllers: [AppController, ComprimentoController, AreaController, TemperaturaController, VelocidadeController, MassaController],
 
})

export class AppModule {}
