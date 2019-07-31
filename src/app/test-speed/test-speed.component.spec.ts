import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSpeedComponent } from './test-speed.component';

describe('TestSpeedComponent', () => {
  let component: TestSpeedComponent;
  let fixture: ComponentFixture<TestSpeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSpeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSpeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
