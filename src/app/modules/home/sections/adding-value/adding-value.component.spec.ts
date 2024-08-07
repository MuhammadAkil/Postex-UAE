import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingValueComponent } from './adding-value.component';

describe('AddingValueComponent', () => {
  let component: AddingValueComponent;
  let fixture: ComponentFixture<AddingValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddingValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
