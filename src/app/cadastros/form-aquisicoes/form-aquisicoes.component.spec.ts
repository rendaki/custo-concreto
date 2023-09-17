import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAquisicoesComponent } from './form-aquisicoes.component';

describe('FormAquisicoesComponent', () => {
  let component: FormAquisicoesComponent;
  let fixture: ComponentFixture<FormAquisicoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAquisicoesComponent]
    });
    fixture = TestBed.createComponent(FormAquisicoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
