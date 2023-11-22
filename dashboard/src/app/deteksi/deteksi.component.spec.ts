import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeteksiComponent } from './deteksi.component';

describe('DeteksiComponent', () => {
  let component: DeteksiComponent;
  let fixture: ComponentFixture<DeteksiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeteksiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeteksiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
