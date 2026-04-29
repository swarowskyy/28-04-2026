import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConversorService } from './conversor/conversor.service';
import { ComprimentoController } from './comprimento/comprimento.controller';
import { AreaController } from './area/area.controller';
import { VelocidadeController } from './velocidade/velocidade.controller';

@Module({
  imports: [],
  controllers: [AppController, ComprimentoController, AreaController, VelocidadeController],
  providers: [AppService, ConversorService],
})
export class AppModule {}
