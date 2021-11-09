import { Contact } from "../models/contact.model";
import { Action } from "@ngrx/store";

export const ADD_CONTACT = 'ADD_CONTACT';

export function ContactReducer(state: Contact[] = [], action: any) {
    switch(action.type) {
        case ADD_CONTACT: 
            return [...state, action.payload];
        default:
            return state;
    }
}