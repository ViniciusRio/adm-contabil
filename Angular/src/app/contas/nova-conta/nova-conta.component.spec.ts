import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaContaComponent } from './nova-conta.component';

describe('NovaContaComponent', () => {
  let component: NovaContaComponent;
  let fixture: ComponentFixture<NovaContaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaContaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
