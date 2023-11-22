import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KontrolComponent } from './kontrol.component';

describe('KontrolComponent', () => {
  let component: KontrolComponent;
  let fixture: ComponentFixture<KontrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KontrolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
