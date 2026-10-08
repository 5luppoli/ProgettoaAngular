import { Component } from '@angular/core';



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.html',
  styleUrls: ['./contacts.css']
})

export class contactsComponent {

  searchQuery : string= '';
  contacts: Contact[] = [
    { name: 'Mario Rossi', phone: '333-1234567', priority: true },
    { name: 'Giulia Bianchi', phone: '347-2345678', priority: false },
    { name: 'Luca Verdi', phone: '320-3456789', priority: true },
    { name: 'Sara Neri', phone: '366-4567890', priority: false },
    { name: 'Elena Conti', phone: '328-5678901', priority: false },
  ]

getFilteredContacts(): Contact[] {
  return this.contacts.filter(contact => contact.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
}}


interface Contact {
  name: string;
  phone: string;
  priority: boolean;
}

