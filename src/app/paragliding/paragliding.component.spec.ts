import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParaglidingComponent } from './paragliding.component';

describe('ParaglidingComponent', () => {
  let component: ParaglidingComponent;
  let fixture: ComponentFixture<ParaglidingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParaglidingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParaglidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
