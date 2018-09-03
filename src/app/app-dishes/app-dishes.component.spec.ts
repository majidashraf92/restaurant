import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDishesComponent } from './app-dishes.component';

describe('AppDishesComponent', () => {
  let component: AppDishesComponent;
  let fixture: ComponentFixture<AppDishesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDishesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
