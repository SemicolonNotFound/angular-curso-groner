import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusandoComponentsComponent } from './reusando-components.component';

describe('ReusandoComponentsComponent', () => {
  let component: ReusandoComponentsComponent;
  let fixture: ComponentFixture<ReusandoComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReusandoComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusandoComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
