import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Виникла помилка:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Щось пішло не так.</h1>;
    }

    return this.props.children; 
  }
}

const ContactList = React.memo(({ contacts, deleteContact }) => (
  <table>
    <thead>
      <tr>
        <th>Ім'я</th>
        <th>Прізвище</th>
        <th>Телефон</th>
        <th>Дії</th>
      </tr>
    </thead>
    <tbody>
      {contacts.map((contact) => (
        <tr key={contact.id}>
          <td>{contact.name}</td>
          <td>{contact.username}</td>
          <td>{contact.phone}</td>
          <td>
            <button onClick={() => deleteContact(contact.id)}>Видалити</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
));

const handleChange = (e, contact, setContact) => {
  setContact({ ...contact, [e.target.name]: e.target.value });
};

const ContactForm = React.memo(({ addContact, hideForm }) => {
  const [contact, setContact] = useState({ name: '', username: '', phone: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(contact);
    setContact({ name: '', username: '', phone: '' });
    hideForm();
  };

  const handleCancel = () => {
    setContact({ name: '', username: '', phone: '' });
    hideForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={contact.name} onChange={(e) => handleChange(e, contact, setContact)} placeholder="Ім'я" required />
      <input name="username" value={contact.username} onChange={(e) => handleChange(e, contact, setContact)} placeholder="Прізвище" required />
      <input name="phone" value={contact.phone} onChange={(e) => handleChange(e, contact, setContact)} placeholder="Телефон" required />
      <button type="submit">Зберегти</button>
      <button type="button" onClick={handleCancel}>Скасувати</button>
    </form>
  );
});

const App = () => {
  const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem('contacts')) || []);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!contacts.length) {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Відповідь мережі для URL-адреси була неправильною: ${response.url}`);
          }
          return response.json();
        })
        .then((data) => setContacts(data))
        .catch((error) => {
          console.error('Виникла проблема під час вашої операції отримання:', error);
          setError(error.toString());
        });
    }
  }, [contacts.length]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = useCallback((contact) => {
    setContacts((prevContacts) => {
      const updatedContacts = [...prevContacts, { ...contact, id: Date.now() }];
      return updatedContacts;
    });
    setShowForm(false);
  }, []);

  const deleteContact = useCallback((id) => {
    setContacts((prevContacts) => {
      const updatedContacts = prevContacts.filter((contact) => contact.id !== id);
      return updatedContacts;
    });
  }, []);

  return (
    <ErrorBoundary>
      <div className="App">
        {error && <p>{error}</p>}
        <ContactList contacts={contacts} deleteContact={deleteContact} />
        <button onClick={() => setShowForm(!showForm)}>Додати контакт</button>
        {showForm && <ContactForm addContact={addContact} hideForm={() => setShowForm(false)} />}
      </div>
    </ErrorBoundary>
  );
};

export default App;