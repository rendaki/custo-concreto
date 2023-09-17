import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalFornecedorComponent } from './total-fornecedor.component';

describe('TotalFornecedorComponent', () => {
  let component: TotalFornecedorComponent;
  let fixture: ComponentFixture<TotalFornecedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalFornecedorComponent]
    });
    fixture = TestBed.createComponent(TotalFornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
