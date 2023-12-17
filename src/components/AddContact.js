import React, { useState } from 'react';

export default function AddContact({ addContact }) {
  const [contactData, setContactData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });
  };

  const handleAdd = () => {
    if (contactData.name === "" || contactData.email === "") {
      alert("Please fill in all the details");
      return;
    }
    addContact(contactData);
    setContactData({ name: "", email: "" }); // Clear input fields after adding contact
  };

  return (
    <div className='formheader'>
      <div className='addcontact'>
        <br />
        <b>Add Contact</b>
      </div>
      
      <form>
        <label><b>Name</b></label>
        <input
          type='text'
          placeholder='Enter Name'
          name='name'
          value={contactData.name}
          onChange={handleChange}
        />
        
        <label><b>Email</b></label>
        <input
          type='email' 
          placeholder='Enter Email'
          name='email'
          value={contactData.email}
          onChange={handleChange}
        />
      </form>
      <br />
      <button className='btn' onClick={handleAdd}>
        Save Contact
      </button>
      
    </div>
    
  );
}