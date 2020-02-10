import { TestBed } from '@angular/core/testing';

import { DetalhesLancamentoService } from './detalhes-lancamento.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DetalhesLancamentoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
    ],
  }));

  it('should be created', () => {
    const service: DetalhesLancamentoService = TestBed.get(DetalhesLancamentoService);
    expect(service).toBeTruthy();
  });
});
