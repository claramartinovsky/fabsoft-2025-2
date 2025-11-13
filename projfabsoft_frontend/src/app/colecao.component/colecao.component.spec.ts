import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColecaoComponent } from './colecao.component';

describe('ColecaoComponent', () => {
  let component: ColecaoComponent;
  let fixture: ComponentFixture<ColecaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColecaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
