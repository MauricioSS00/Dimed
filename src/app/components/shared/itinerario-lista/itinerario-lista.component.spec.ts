import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItinerarioListaComponent } from './itinerario-lista.component';

describe('ItinerarioListaComponent', () => {
  let component: ItinerarioListaComponent;
  let fixture: ComponentFixture<ItinerarioListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItinerarioListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItinerarioListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
