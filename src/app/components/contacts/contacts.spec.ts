import { ComponentFixture, TestBed } from '@angular/core/testing';

import { contactsComponent } from './contacts';

describe('Contacts', () => {
  let component: contactsComponent;
  let fixture: ComponentFixture<contactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [contactsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(contactsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
