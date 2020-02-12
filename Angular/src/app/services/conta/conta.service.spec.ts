import { TestBed } from '@angular/core/testing';

import { ContaService } from './conta.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ContaService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
    ],
  }));

  it('should be created', () => {
    const service: ContaService = TestBed.get(ContaService);
    expect(service).toBeTruthy();
  });
});
