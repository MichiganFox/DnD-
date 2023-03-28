import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DounutDetailComponent } from './dounut-detail.component';

describe('DounutDetailComponent', () => {
  let component: DounutDetailComponent;
  let fixture: ComponentFixture<DounutDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DounutDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DounutDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
