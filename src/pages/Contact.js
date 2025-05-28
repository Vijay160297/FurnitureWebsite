import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import product8 from './images/product8.jpeg';

const ContactDetails = () => {
  const contacts = [
    {
      location: 'Udham Singh Nagar, Uttarakhand, India',
      address: 'Kashipur Road, Shop, Near Janta Dharamkanta, Nattha Singh, Jaspur, Udham Singh Nagar, Uttarakhand, 244712, India',
      contactPerson: 'Rani (Proprietor)',
      source: 'https://www.dnb.com/business-directory/company-profiles.apj_furniture.12e0b6c7d462cb4b4bd0ab74c3c2c22b.html'
    },
    {
      location: 'Delhi, India',
      address: 'P-100, Shanker Nagar Ext., Sankar Nagar, Delhi, India',
      source: 'https://www.dial4trade.com/apj-enterprises/contact-us.htm'
    },
    {
      location: 'Pune, Maharashtra, India',
      address: 'Shivane, Shed No 1, Sr No 81/5, NDA Road, Pune, Maharashtra, 411023, India',
      contactPerson: 'Surajkumar Sitaram Patil (Proprietor)',
      source: 'https://www.dnb.com/business-directory/company-profiles.apj_enterprises.319d34ed6ada3ad804c1863001f69f51.html'
    }
  ];

  return (
    <div 
      className="container-fluid d-flex justify-content-center align-items-center vh-100" 
      style={{
        backgroundImage: `url(${product8})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: '#fff'
      }}
    >
      <div className="container my-5 p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius: '10px' }}>
        <h1 className="text-center mb-4">APJ Furniture Contact Details</h1>
        {contacts.map((contact, index) => (
          <div key={index} className="card mb-3" style={{ backgroundColor: '#fff', color: '#000' }}>
            <div className="card-body">
              <h5 className="card-title">{contact.location}</h5>
              <p className="card-text"><strong>Address:</strong> {contact.address}</p>
              {contact.contactPerson && <p className="card-text"><strong>Contact Person:</strong> {contact.contactPerson}</p>}
              <a href={contact.source} target="_blank" rel="noopener noreferrer" className="btn btn-primary">More Info</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactDetails;
