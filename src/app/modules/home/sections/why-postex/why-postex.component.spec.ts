import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyPostexComponent } from './why-postex.component';

describe('WhyPostexComponent', () => {
  let component: WhyPostexComponent;
  let fixture: ComponentFixture<WhyPostexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyPostexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyPostexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
