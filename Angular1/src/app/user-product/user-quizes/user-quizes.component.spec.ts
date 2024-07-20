import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserQuizesComponent } from './user-quizes.component';

describe('UserQuizesComponent', () => {
  let component: UserQuizesComponent;
  let fixture: ComponentFixture<UserQuizesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserQuizesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserQuizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
