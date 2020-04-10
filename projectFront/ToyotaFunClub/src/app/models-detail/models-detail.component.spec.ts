import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsDetailComponent } from './models-detail.component';

describe('ModelsDetailComponent', () => {
  let component: ModelsDetailComponent;
  let fixture: ComponentFixture<ModelsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
