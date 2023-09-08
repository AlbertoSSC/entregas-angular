import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPrivateComponent } from './menu-private.component';

describe('MenuPrivateComponent', () => {
  let component: MenuPrivateComponent;
  let fixture: ComponentFixture<MenuPrivateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuPrivateComponent]
    });
    fixture = TestBed.createComponent(MenuPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
