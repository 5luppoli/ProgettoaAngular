import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContacts } from './add-contacts';

describe('AddContacts', () => {
  let component: AddContacts;
  let fixture: ComponentFixture<AddContacts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddContacts],
    }).compileComponents();

    fixture = TestBed.createComponent(AddContacts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
