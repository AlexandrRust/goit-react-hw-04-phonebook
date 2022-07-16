import { nanoid } from 'nanoid';

import { useState, useEffect } from 'react';
import { PhoneBookForm } from 'components/PhoneBookForm/PhoneBookForm';
import { Section } from 'components/Section/Section.styled';
import { Box } from 'components/Box/Box.styled';
import { Title } from 'components/Title/Title.styled';
import { PhonesList } from 'components/PhonesList/PhonesList';
import { Filter } from 'components/Filter/Filter';

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
  const [filter, setFilter] = useState('');

  const formSubmitHandler = ({ name, number }) => {
    if (contacts.find(elem => elem.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts.`);
    }
    setContacts([...contacts, { id: nanoid(), name, number }]);
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizeFilter = filter.toLocaleLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizeFilter)
    );
  };

  const deleteContact = id => {
    setContacts(contacts.filter(elem => elem.id !== id));
  };

  return (
    <Section>
      <Title>Phonebook</Title>
      <Box>
        <PhoneBookForm onSubmit={formSubmitHandler} />
      </Box>
      <Title>Contacts</Title>
      <Box>
        <Filter value={filter} onChange={changeFilter} />
        <PhonesList
          options={getVisibleContacts()}
          deleteContact={deleteContact}
        />
      </Box>
    </Section>
  );
}
