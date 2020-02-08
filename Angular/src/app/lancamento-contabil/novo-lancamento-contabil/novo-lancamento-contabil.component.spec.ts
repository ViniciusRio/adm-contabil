import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoLancamentoContabilComponent } from './novo-lancamento-contabil.component';

describe('NovoLancamentoContabilComponent', () => {
  let component: NovoLancamentoContabilComponent;
  let fixture: ComponentFixture<NovoLancamentoContabilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoLancamentoContabilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoLancamentoContabilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
