import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalistComponent } from './naturalist.component';

describe('NaturalistComponent', () => {
  let component: NaturalistComponent;
  let fixture: ComponentFixture<NaturalistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaturalistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaturalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
