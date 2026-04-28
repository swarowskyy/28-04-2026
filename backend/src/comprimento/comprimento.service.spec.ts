import { Test, TestingModule } from '@nestjs/testing';
import { ComprimentoService } from './comprimento.service';

describe('ComprimentoService', () => {
  let service: ComprimentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComprimentoService],
    }).compile();

    service = module.get<ComprimentoService>(ComprimentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
