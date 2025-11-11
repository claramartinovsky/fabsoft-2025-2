import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlataformaComponent } from './plataforma.component';

describe('PlataformaComponent', () => {
  let component: PlataformaComponent;
  let fixture: ComponentFixture<PlataformaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlataformaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlataformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
