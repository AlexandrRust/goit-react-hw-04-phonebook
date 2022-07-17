import { nanoid } from 'nanoid';

import { useState, useEffect } from 'react';
import { PhoneBookData } from 'data/phoneBookData';
import { PhoneBookForm } from 'components/PhoneBookForm/PhoneBookForm';
import { Section } from 'components/Section/Section.styled';
import { Box } from 'components/Box/Box.styled';
import { Title } from 'components/Title/Title.styled';
import { PhonesList } from 'components/PhonesList/PhonesList';
import { Filter } from 'components/Filter/Filter';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setContacts(
      PhoneBookData ?? JSON.parse(window.localStorage.getItem('contacts'))
    );
  }, []);

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
