import { Contact } from "./store/models/contact.model";

export interface AppState {
    readonly contact: Contact[];
}