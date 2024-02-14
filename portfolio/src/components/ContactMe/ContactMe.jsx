import React from 'react';
import './ContactMe.css';
import email from '../../assets/mail.png';
import git from '../../assets/git.png';
import ContactInfo from './ContactInfoCard/ContactInfo';
import ContactForm from './contactForm/ContactForm';

const ContactMe = () => {

  return (
    <section className='contact-container' id='contact'>
        <h5>Contact Me</h5>

        <div className="contact-content">
            <div style={{ flex: 1}}>
                <ContactInfo
                    iconUrl={email}
                    text="shubhi.agrawal3@outlook.com"
                    url="mailto:shubhi.agrawal3@outlook.com"
                />
                <ContactInfo
                    iconUrl={git}
                    text="https://github.com/shubhiagrawal22"
                    url="https://github.com/shubhiagrawal22"
                />
            </div>
            <div style={{ flex: 1}}>
                <ContactForm />
            </div>
        </div>
    </section>
  )
}

export default ContactMe