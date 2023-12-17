

import './App.css';
import { v4 as uuid4 } from 'uuid';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import { useEffect, useState } from 'react';

function App() {
  const localStorageKey = "contact"
  const [contact, setContact] = useState(()=>{
    return JSON.parse(localStorage.getItem(localStorageKey))
  ||[]})  

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contact))
   },[contact] )

  const addContact = (data) => {
    setContact([...contact, {id: uuid4(),data}])
  }
  const Click = (id) =>{
    const updatedList = contact.filter((val)=>{
      return val.id !==id;
    })
    setContact(updatedList)
  }
  return (
    <div>
      <Header/>
      <div className='body'>
      <AddContact addContact={addContact}/>
      <ContactList contact={contact} Click={Click}/>
      </div>
    </div>
  );
}

export default App;

