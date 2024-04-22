import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsAuthComponent } from './aws-auth.component';

describe('AwsAuthComponent', () => {
  let component: AwsAuthComponent;
  let fixture: ComponentFixture<AwsAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwsAuthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AwsAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
