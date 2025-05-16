import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LeadForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/leads', { name, email })
      .then(() => navigate('/'))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>Create Lead</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default LeadForm;
