import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormResenha } from './form-resenha';

describe('FormResenha', () => {
  let component: FormResenha;
  let fixture: ComponentFixture<FormResenha>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormResenha]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormResenha);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
