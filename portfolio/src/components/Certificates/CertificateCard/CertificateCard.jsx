import React from 'react';
import './card.css';

const CertificateCard = ({ details }) => {
  return (
    <div className='certificate-card'>
        <h6>
            {details.title}
        </h6>
        <div className="certificate-duration">
            {details.date}
        </div>
        <ul>
            {details.skills.map((item) => (
                <li key={item}>
                    {item}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default CertificateCard