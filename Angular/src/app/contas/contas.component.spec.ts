import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContasComponent } from './contas.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('ContasComponent', () => {
  let component: ContasComponent;
  let fixture: ComponentFixture<ContasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContasComponent ],
      providers: [HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('cannot be empty', () => {
    expect(component.contas).toBeGreaterThan(1);
  })
});
