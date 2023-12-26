import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachuserComponent } from './eachuser.component';

describe('EachuserComponent', () => {
  let component: EachuserComponent;
  let fixture: ComponentFixture<EachuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EachuserComponent]
    });
    fixture = TestBed.createComponent(EachuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
