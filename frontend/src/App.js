import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LeadList from './LeadList';
import LeadForm from './LeadForm';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <h1>CRM - Leads</h1>
        <Link to="/">Leads List</Link> | <Link to="/create">Create Lead</Link>
        <Routes>
          <Route path="/" element={<LeadList />} />
          <Route path="/create" element={<LeadForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
