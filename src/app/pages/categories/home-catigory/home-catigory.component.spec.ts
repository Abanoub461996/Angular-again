import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCatigoryComponent } from './home-catigory.component';

describe('HomeCatigoryComponent', () => {
  let component: HomeCatigoryComponent;
  let fixture: ComponentFixture<HomeCatigoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeCatigoryComponent]
    });
    fixture = TestBed.createComponent(HomeCatigoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
