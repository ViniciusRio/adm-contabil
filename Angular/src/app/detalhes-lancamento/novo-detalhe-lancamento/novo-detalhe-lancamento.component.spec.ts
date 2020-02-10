import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoDetalheLancamentoComponent } from './novo-detalhe-lancamento.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('NovoDetalheLancamentoComponent', () => {
  let component: NovoDetalheLancamentoComponent;
  let fixture: ComponentFixture<NovoDetalheLancamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoDetalheLancamentoComponent ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule
      ]
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
