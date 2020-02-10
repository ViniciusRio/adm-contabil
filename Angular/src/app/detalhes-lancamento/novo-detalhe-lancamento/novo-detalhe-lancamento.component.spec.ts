import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoDetalheLancamentoComponent } from './novo-detalhe-lancamento.component';

describe('NovoDetalheLancamentoComponent', () => {
  let component: NovoDetalheLancamentoComponent;
  let fixture: ComponentFixture<NovoDetalheLancamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoDetalheLancamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoDetalheLancamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
