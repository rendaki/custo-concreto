import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalFaseComponent } from './total-fase.component';

describe('TotalFaseComponent', () => {
  let component: TotalFaseComponent;
  let fixture: ComponentFixture<TotalFaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalFaseComponent]
    });
    fixture = TestBed.createComponent(TotalFaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
