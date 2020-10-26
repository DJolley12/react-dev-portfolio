import React from 'react';
import "./contact-section.css";

function ContactSection() {
    return ( 
        <a
            href="mailto:dcjolley12@gmail.com"
            className="d-flex justify-content-lg-center layer-top"
        >
            <div className="main_text_color">dcjolley12@gmail.com</div>
            <i className="icon_list nes-icon gmail is-large flicker"></i>
        </a>
    )
}

export default ContactSection