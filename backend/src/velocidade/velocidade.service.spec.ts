import { Test, TestingModule } from '@nestjs/testing';
import { VelocidadeService } from './velocidade.service';

describe('VelocidadeService', () => {
  let service: VelocidadeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VelocidadeService],
    }).compile();

    service = module.get<VelocidadeService>(VelocidadeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
