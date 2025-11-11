import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormJogo } from './form-jogo';

describe('FormJogo', () => {
  let component: FormJogo;
  let fixture: ComponentFixture<FormJogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormJogo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormJogo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
