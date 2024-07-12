import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPessoaJuridicaComponent } from './form-pessoa-juridica.component';

describe('FormPessoaJuridicaComponent', () => {
  let component: FormPessoaJuridicaComponent;
  let fixture: ComponentFixture<FormPessoaJuridicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPessoaJuridicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPessoaJuridicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
