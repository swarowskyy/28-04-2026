import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConversorService } from './conversor/conversor.service';
import { ComprimentoController } from './comprimento/comprimento.controller';
<<<<<<< HEAD
import { ComprimentoService } from './comprimento/comprimento.service';
import { VelocidadeService } from './velocidade/velocidade.service';
=======
import { TemperaturaService } from './temperatura/temperatura.service';
>>>>>>> 505d198f2286df2e5ba5d9e6c43d89ab7d26ae9a

@Module({
  imports: [],
  controllers: [AppController, ComprimentoController],
<<<<<<< HEAD
  providers: [AppService, ConversorService, ComprimentoService, VelocidadeService],
=======
  providers: [AppService, ConversorService, TemperaturaService],
>>>>>>> 505d198f2286df2e5ba5d9e6c43d89ab7d26ae9a
})
export class AppModule {}
