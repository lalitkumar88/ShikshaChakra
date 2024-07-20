import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeComponentComponent } from './youtube-component.component';

describe('YoutubeComponentComponent', () => {
  let component: YoutubeComponentComponent;
  let fixture: ComponentFixture<YoutubeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YoutubeComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YoutubeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
