import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendcolumnComponent } from './extendcolumn.component';

describe('ExtendcolumnComponent', () => {
  let component: ExtendcolumnComponent;
  let fixture: ComponentFixture<ExtendcolumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendcolumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendcolumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
