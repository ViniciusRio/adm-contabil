import { TestBed } from '@angular/core/testing';

import { GrupoService } from './grupo.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GrupoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
    ],
  }));

  it('should be created', () => {
    const service: GrupoService = TestBed.get(GrupoService);
    expect(service).toBeTruthy();
  });
});
