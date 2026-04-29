import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConversorService } from './conversor/conversor.service';
import { ComprimentoController } from './comprimento/comprimento.controller';
import { AreaController } from './area/area.controller';
import { TemperaturaController } from './temperatura/temperatura.controller';

@Module({
  imports: [],
  controllers: [AppController, ComprimentoController, AreaController, TemperaturaController],
  providers: [AppService, ConversorService],
})
export class AppModule {}
