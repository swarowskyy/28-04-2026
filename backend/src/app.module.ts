import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConversorService } from './conversor/conversor.service';
import { ComprimentoController } from './comprimento/comprimento.controller';
import { ComprimentoService } from './comprimento/comprimento.service';
import { VelocidadeService } from './velocidade/velocidade.service';

@Module({
  imports: [],
  controllers: [AppController, ComprimentoController],
  providers: [AppService, ConversorService, ComprimentoService, VelocidadeService],
})
export class AppModule {}
