import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContactReactiveFormComponent } from './edit-contact-reactive-form.component';

describe('EditContactReactiveFormComponent', () => {
  let component: EditContactReactiveFormComponent;
  let fixture: ComponentFixture<EditContactReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditContactReactiveFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditContactReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
