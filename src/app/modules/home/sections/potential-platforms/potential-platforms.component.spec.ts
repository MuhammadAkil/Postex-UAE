import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotentialPlatformsComponent } from './potential-platforms.component';

describe('PotentialPlatformsComponent', () => {
  let component: PotentialPlatformsComponent;
  let fixture: ComponentFixture<PotentialPlatformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotentialPlatformsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PotentialPlatformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
