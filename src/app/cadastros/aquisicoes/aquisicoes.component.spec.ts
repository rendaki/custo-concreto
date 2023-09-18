import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquisicoesComponent } from './aquisicoes.component';

describe('AquisicoesComponent', () => {
  let component: AquisicoesComponent;
  let fixture: ComponentFixture<AquisicoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AquisicoesComponent]
    });
    fixture = TestBed.createComponent(AquisicoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
