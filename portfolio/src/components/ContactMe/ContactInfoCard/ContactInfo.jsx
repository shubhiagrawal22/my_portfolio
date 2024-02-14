import React from 'react';
import './ContactInfo.css';

const ContactInfo = ({ iconUrl, text, url}) => {
  return (
    <div className='contact-detail-card'>
        <div className="icon">
            <img src={iconUrl} alt={text} />
        </div>
        <a href={url} target='blank'>{text}</a>
    </div>
  )
}

export default ContactInfo