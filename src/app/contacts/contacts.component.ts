import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { Contact } from '../store/models/contact.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass']
})
export class ContactsComponent implements OnInit {

  contacts: Observable<Contact[]>;

  constructor(private store: Store<AppState>) {
    this.contacts = this.store.select(state => state.contact);
  }

  addContact(data: Contact) {
    this.store.dispatch({
      type: 'ADD_CONTACT',
      payload: <Contact> {
        name: data.name,
        email: data.email,
        phone: data.phone
      }
    });
  }

  ngOnInit(): void {
  }

}
