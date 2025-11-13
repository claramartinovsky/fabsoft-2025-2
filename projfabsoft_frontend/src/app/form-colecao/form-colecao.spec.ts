import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormColecao } from './form-colecao';

describe('FormColecao', () => {
  let component: FormColecao;
  let fixture: ComponentFixture<FormColecao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormColecao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormColecao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
