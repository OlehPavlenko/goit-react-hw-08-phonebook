import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/auth/contacts/contats-actions';
import { contactsSelector } from 'redux/auth/contacts/contacts-selector';
import contactsOperations from '../redux/auth/contacts/contacts-operation';

export default function ContactPage({ name, number }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(contactsOperations.fetchContacts());
    }, [dispatch]);

    const filterCont = useSelector(contactsSelector.getFilter);

    const handleFindChange = evt => {
        dispatch(changeFilter(evt.target.value));
    };

    const contacts = useSelector(contactsSelector.getVisibleContacts);
    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm />
            <h2>Contacts</h2>

            <ContactList contacts={contacts} />

            <Filter value={filterCont} onChange={handleFindChange} />
        </div>
    );
}

ContactPage.protoType = {
    state: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    filter: PropTypes.string.isRequired,
};