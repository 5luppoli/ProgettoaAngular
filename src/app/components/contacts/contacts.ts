import { Component } from '@angular/core';



@Component({
  standalone: false,
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
  return this.contacts
  .filter
  (contact => contact.name
    .toLowerCase()
    .includes
  (this.searchQuery.toLowerCase())
  )
  .sort
  ((a, b) => 
    {
    if (a.priority && !b.priority) {
      return -1;
    } else if (!a.priority && b.priority) {
      return 1;
    } else {
      return a.name.localeCompare(b.name);
    }
    }
  )
  //.sort ((a,b) => a.name.localeCompare(b.name)) 
}

togglePriority(contact: Contact): void {
  contact.priority = !contact.priority;
}
}

interface Contact {
  name: string;
  phone: string;
  priority: boolean;
}

