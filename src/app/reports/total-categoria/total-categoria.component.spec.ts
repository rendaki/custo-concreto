import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCategoriaComponent } from './total-categoria.component';

describe('TotalCategoriaComponent', () => {
  let component: TotalCategoriaComponent;
  let fixture: ComponentFixture<TotalCategoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalCategoriaComponent]
    });
    fixture = TestBed.createComponent(TotalCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
