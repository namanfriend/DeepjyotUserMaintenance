import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultcolumnComponent } from './defaultcolumn.component';

describe('DefaultcolumnComponent', () => {
  let component: DefaultcolumnComponent;
  let fixture: ComponentFixture<DefaultcolumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultcolumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultcolumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
