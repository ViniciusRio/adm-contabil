import { TestBed } from '@angular/core/testing';

import { DetalhesLancamentoService } from './detalhes-lancamento.service';

describe('DetalhesLancamentoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetalhesLancamentoService = TestBed.get(DetalhesLancamentoService);
    expect(service).toBeTruthy();
  });
});
