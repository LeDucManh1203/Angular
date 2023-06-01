import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutHoneComponent } from './layout-hone.component';

describe('LayoutHoneComponent', () => {
  let component: LayoutHoneComponent;
  let fixture: ComponentFixture<LayoutHoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutHoneComponent]
    });
    fixture = TestBed.createComponent(LayoutHoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
