import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalResumidoComponent } from './total-resumido.component';

describe('TotalResumidoComponent', () => {
  let component: TotalResumidoComponent;
  let fixture: ComponentFixture<TotalResumidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalResumidoComponent]
    });
    fixture = TestBed.createComponent(TotalResumidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
