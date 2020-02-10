import { TestBed } from '@angular/core/testing';

import { EmpresaService } from './empresa.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EmpresaService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
    ],

  }));

  it('should be created', () => {
    const service: EmpresaService = TestBed.get(EmpresaService);
    expect(service).toBeTruthy();
  });
});
