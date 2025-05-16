import React, { useEffect, useState } from 'react';
import axios from 'axios';

function LeadList() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/leads')
      .then(res => setLeads(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>All Leads</h2>
      <ul>
        {leads.map(lead => (
          <li key={lead.id}>{lead.name} - {lead.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default LeadList;
