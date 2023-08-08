import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { Title, PhoneBook } from './App.styled';

export const App = () => {
  return (
    <PhoneBook>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </PhoneBook>
  );
};
