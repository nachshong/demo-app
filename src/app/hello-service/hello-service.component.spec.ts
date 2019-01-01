import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloServiceComponent } from './hello-service.component';

describe('HelloServiceComponent', () => {
  let component: HelloServiceComponent;
  let fixture: ComponentFixture<HelloServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
