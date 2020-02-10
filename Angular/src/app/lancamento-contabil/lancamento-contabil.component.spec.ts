import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentoContabilComponent } from './lancamento-contabil.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('LancamentoContabilComponent', () => {
  let component: LancamentoContabilComponent;
  let fixture: ComponentFixture<LancamentoContabilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LancamentoContabilComponent ],
      providers: [HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LancamentoContabilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
