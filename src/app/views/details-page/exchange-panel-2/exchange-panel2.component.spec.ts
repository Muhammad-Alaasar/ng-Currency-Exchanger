import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangePanel2Component } from './exchange-panel2.component';

describe('ExchangePanel2Component', () => {
  let component: ExchangePanel2Component;
  let fixture: ComponentFixture<ExchangePanel2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExchangePanel2Component]
    });
    fixture = TestBed.createComponent(ExchangePanel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
