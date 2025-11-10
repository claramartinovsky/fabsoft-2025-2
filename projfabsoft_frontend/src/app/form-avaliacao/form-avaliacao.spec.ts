import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAvaliacao } from './form-avaliacao';

describe('FormAvaliacao', () => {
  let component: FormAvaliacao;
  let fixture: ComponentFixture<FormAvaliacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAvaliacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAvaliacao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
