import { Controller } from '@nestjs/common';
import { ConversorService } from 'src/conversor/conversor.service';

@Controller('comprimento')//decorator de responsabilidade
export class ComprimentoController {
    constructor(private readonly service:ConversorService){}
}