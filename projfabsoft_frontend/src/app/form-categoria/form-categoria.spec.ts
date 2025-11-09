import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCategoria } from './form-categoria';

describe('FormCategoria', () => {
  let component: FormCategoria;
  let fixture: ComponentFixture<FormCategoria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCategoria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCategoria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
