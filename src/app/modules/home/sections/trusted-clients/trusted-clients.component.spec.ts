import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustedClientsComponent } from './trusted-clients.component';

describe('TrustedClientsComponent', () => {
  let component: TrustedClientsComponent;
  let fixture: ComponentFixture<TrustedClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrustedClientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrustedClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
