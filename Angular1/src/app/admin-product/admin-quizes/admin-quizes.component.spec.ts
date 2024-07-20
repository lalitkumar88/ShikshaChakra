import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminQuizesComponent } from './admin-quizes.component';

describe('AdminQuizesComponent', () => {
  let component: AdminQuizesComponent;
  let fixture: ComponentFixture<AdminQuizesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminQuizesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminQuizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
