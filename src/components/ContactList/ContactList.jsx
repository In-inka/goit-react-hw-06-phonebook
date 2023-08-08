import PropTypes from 'prop-types';
import { List, Item, Btn, Contact } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts } from 'redux/ContactSlice';
import { getFilter } from 'redux/FilterSlice';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const contactItem = () =>
    filter
      ? contacts.filter(({ name }) => name.toLowerCase().includes(filter))
      : contacts;
  return (
    <List>
      {contactItem().map(({ id, name, number }) => (
        <Item key={id}>
          <Contact> {`${name}: ${number}`}</Contact>
          {
            <Btn type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </Btn>
          }
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  filter: PropTypes.string,
  deleteContact: PropTypes.func,
};
export default ContactList;
