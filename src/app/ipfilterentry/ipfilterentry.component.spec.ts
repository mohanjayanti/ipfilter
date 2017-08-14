import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpfilterentryComponent } from './ipfilterentry.component';

describe('IpfilterentryComponent', () => {
  let component: IpfilterentryComponent;
  let fixture: ComponentFixture<IpfilterentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpfilterentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpfilterentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
