import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MastbedroomComponent } from './mastbedroom.component';

describe('MastbedroomComponent', () => {
  let component: MastbedroomComponent;
  let fixture: ComponentFixture<MastbedroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MastbedroomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MastbedroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
