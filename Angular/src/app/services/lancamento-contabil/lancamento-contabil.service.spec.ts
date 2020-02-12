import { TestBed } from '@angular/core/testing';

import { LancamentoContabilService } from './lancamento-contabil.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LancamentoContabilService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
    ],
  }));

  it('should be created', () => {
    const service: LancamentoContabilService = TestBed.get(LancamentoContabilService);
    expect(service).toBeTruthy();
  });
});
