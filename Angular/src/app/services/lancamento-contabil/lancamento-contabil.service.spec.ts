import { TestBed } from '@angular/core/testing';

import { LancamentoContabilService } from './lancamento-contabil.service';

describe('LancamentoContabilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LancamentoContabilService = TestBed.get(LancamentoContabilService);
    expect(service).toBeTruthy();
  });
});
