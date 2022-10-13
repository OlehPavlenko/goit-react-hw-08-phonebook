import { useDispatch } from 'react-redux';
import { IconButton, List } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import css from './ContactList.module.css';
import contactsOperations from 'redux/auth/contacts/contacts-operation';

export const Contact = ({ contact }) => {
    const dispatch = useDispatch();

    const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

    return (
        <List
            dense
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            key={contact.id}
            className={css.list}
        >
            {contact.name}: {contact.number}
            <IconButton
                edge="end"
                aria-label="delete"
                type="button"
                onClick={() => onDeleteContact(contact.id)}
                id={contact.id}
            >
                <DeleteIcon />
            </IconButton>
        </List>
    );
};