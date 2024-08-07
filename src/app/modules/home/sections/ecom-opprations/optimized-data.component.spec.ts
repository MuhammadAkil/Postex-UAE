import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimizedDataComponent } from './optimized-data.component';

describe('OptimizedDataComponent', () => {
  let component: OptimizedDataComponent;
  let fixture: ComponentFixture<OptimizedDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptimizedDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptimizedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
