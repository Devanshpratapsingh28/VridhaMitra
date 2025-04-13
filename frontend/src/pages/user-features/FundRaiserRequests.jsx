import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FundRaiserRequests.css';

const FundRaiserRequests = () => {
  const navigate = useNavigate();
  const [fundraiserRequests, setFundraiserRequests] = useState([
    {
      id: 1,
      need: 'Joint Replacement',
      amount: '200000.0 INR',
      due_date: ' 2023-06-15',
      urgency: 'Needed within 2 weeks',
      upi_id: 'user@upi',
    },
    {
      id: 2,
      need: 'Neuro Surgery',
      amount: '70000.0 INR',
      due_date: ' 2023-08-25',
      urgency: 'Needed within 3 days',
      upi_id: 'user2@upi',
    },
    {
      id: 3,
      need: 'Liver Transplant',
      amount: '100000.0 INR',
      due_date: ' 2023-09-12',
      urgency: 'Needed within 1 month',
      upi_id: 'user3@upi',
    }
  ]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this fund raising request?')) {
      setFundraiserRequests(fundraiserRequests.filter(request => request.id !== id));
    }
  };

  const navigateToAddForm = () => {
    sessionStorage.setItem('fundraiserRequests', JSON.stringify(fundraiserRequests));
    navigate('/user-home/fundraiser');
  };

  return (
    <div className="fund-requests-container">
      <header className="fund-header">
        <h1>Fund Raising Requests</h1>
        <p>Manage your fund raising requests here.</p>
        <button 
          className="add-request-btn"
          onClick={navigateToAddForm}
        >
          + Add New Request
        </button>
      </header>
      
      <div className="requests-list">
        {fundraiserRequests.map(request => (
          <div key={request.id} className="request-card">
            <div className="request-details">
              <div className="detail-row">
                <span className="detail-label">Need:</span>
                <span className="detail-value">{request.need}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Amount:</span>
                <span className="detail-value">{request.amount}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Due Date:</span>
                <span className="detail-value">{request.due_date}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Urgency:</span>
                <span className="detail-value">{request.urgency}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">UPI ID:</span>
                <span className="detail-value">{request.upi_id}</span>
              </div>
            </div>
            <div className="request-actions">
              <button 
                className="action-btn delete-btn"
                onClick={() => handleDelete(request.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FundRaiserRequests;