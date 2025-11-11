import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPlataforma } from './form-plataforma';

describe('FormPlataforma', () => {
  let component: FormPlataforma;
  let fixture: ComponentFixture<FormPlataforma>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPlataforma]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPlataforma);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
