import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesLancamentoComponent } from './detalhes-lancamento.component';
import { HttpHandler, HttpClient } from '@angular/common/http';

describe('DetalhesLancamentoComponent', () => {
  let component: DetalhesLancamentoComponent;
  let fixture: ComponentFixture<DetalhesLancamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesLancamentoComponent ],
      providers: [HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesLancamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
