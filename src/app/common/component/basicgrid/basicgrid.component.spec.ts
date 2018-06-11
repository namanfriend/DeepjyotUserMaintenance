import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicgridComponent } from './basicgrid.component';

describe('BasicgridComponent', () => {
  let component: BasicgridComponent;
  let fixture: ComponentFixture<BasicgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
