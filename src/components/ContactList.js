// ContactList.js
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ContactList(props) {
  // Destructure contact and handleDelete directly from props
  const { contact, Click } = props;

  // Check if contact is undefined or null before attempting to map
  if (!contact) {
    return null; // Or some default behavior or message
  }

  const contactList = contact.map((val, index) => (
    <div key={index} className="savedContact">
      <div className="name">{val.data.name}</div>
      <div className="email">{val.data.email}</div>
      <span onClick={() => Click(val.id)} className="delete-button">
        <DeleteIcon />
      </span>
    </div>
  ));

  return (
    <>
      <br />
      <div className='contactList'>Contact List</div>
      <div className='contact-list'>{contactList}</div>
    </>
  );
}
