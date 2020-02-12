import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoLancamentoContabilComponent } from './novo-lancamento-contabil.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


describe('NovoLancamentoContabilComponent', () => {
  let component: NovoLancamentoContabilComponent;
  let fixture: ComponentFixture<NovoLancamentoContabilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoLancamentoContabilComponent ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        NgbModule
      ]
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
