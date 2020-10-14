import React from 'react';
import "./contact-section.css";

function ContactSection() {
    return ( 
        <form id="contact_form" className="layer-top main_text_color contact_section">
            <input id="email_input" className="main_text_color contact_section" placeholder="Enter your email"></input>
        </form> 
    )
}

export default ContactSection