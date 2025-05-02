import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndergradComponent } from './undergrad.component';

describe('UndergradComponent', () => {
  let component: UndergradComponent;
  let fixture: ComponentFixture<UndergradComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UndergradComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UndergradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
