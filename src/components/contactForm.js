import React from 'react';

const ContactForm = () => (
    <form method="post" action="https://formspree.io/yannis.panagis1998@gmail.com">
        <div className="container margin-left-right-5">
            <div className="container__row">
                <p className="is-background-blue-text form-heading">Hi, my name is</p>
                <input className="input-field" type="text" name="name" id="name"/>
                <p className="is-background-blue-text form-heading">My email address is</p>
                <input className="input-field" type="email" name="_replyto"/>
                <p className="is-background-blue-text form-heading">I'm writing to you about</p>                    
                <input className="input-field" type="text" name="subject" id="subject"/>
                <p className="is-background-blue-text form-heading">My message is</p>    
                <textarea className="input-field is-height-100-percent" name="message" id="message" rows="5"/>
            </div>
            <div className="text-align-right">
                <button className="submit-button" type="submit">Send</button>
                <input className="clear-button" type="reset" value="Clear" />
            </div>
        </div>
    </form>
);

export default ContactForm;