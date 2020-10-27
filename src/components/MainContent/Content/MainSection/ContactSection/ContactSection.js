import React from 'react';
import "./contact-section.css";

function ContactSection() {
    return ( 
        <a
            id="contact_link"
            href="mailto:dcjolley12@gmail.com"
            className="d-flex justify-content-lg-center layer-top"
        >
            <div id="email_contact" className="main_text_color">dcjolley12@gmail.com</div>
            <i id="gmail_icon" className="nes-icon gmail is-large flicker"></i>
        </a>
    )
}

export default ContactSection