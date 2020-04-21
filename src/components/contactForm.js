import React from 'react';

const ContactForm = () => (
    <form method="post" action="https://formspree.io/yannis.panagis1998@gmail.com" style={{width: '100%'}}>
        <div className="container">
            <div className="container__row">
                <h3 className="is-black-text form-heading">Hi, my name is</h3>
                <input className="input-field" type="text" name="name" id="name" style={{width: '100%'}}/>
                <h3 className="is-black-text form-heading">My email address is</h3>
                <input className="input-field" type="email" name="_replyto" style={{width: '100%'}}/>
                <h3 className="is-black-text form-heading">I'm writing to you about</h3>                    
                <input className="input-field" type="text" name="subject" id="subject" style={{width: '100%'}}/>
                <h3 className="is-black-text form-heading">My message is</h3>    
                <textarea className="input-field" name="message" id="message" rows="5" style={{height: '100px', width: '100%'}}/>
            </div>
            <div className="text-align-right">
                <button className="submit-button" type="submit">Send</button>
                <input className="clear-button" type="reset" value="Clear" />
            </div>
        </div>
    </form>
);

export default ContactForm;

// <div className="container">
{/* <div className="container__row">
<div className="col-sm-12">
    <h3>Hi, my name is</h3>
</div>
<div style={{width: '75%'}} className="container__col-lg-12 container__col-md-12 container__col-sm-12 container__col-xs-12 text-align-center">    
    <input className="input-field" type="text" name="name" id="name"/>
</div>
</div>

<div className="container__row">
<div className="col-sm-12 col-lg-4">
    <h3>I'm writing to you about</h3>                    
</div>
<div style={{width: '75%'}} className="container__col-lg-4 container__col-md-4 container__col-sm-12 container__col-xs-12 text-align-center">    
    <input className="input-field" type="text" name="subject" id="subject" style={{width: '100%'}}/>                
</div>
</div>

<div className="container__row">
<div className="col-sm-12">
    <h3>My email address is</h3>
</div>
<div style={{width: '75%'}} className="container__col-lg-4 container__col-md-4 container__col-sm-12 container__col-xs-12 text-align-center">    
    <input className="input-field" type="email" name="_replyto" style={{width: '100%'}}/>                
</div>
</div>        

<div className="container__row">
<div className="col-sm-12">
    <h3>Message</h3>    
</div>
</div>

<div className="container__row">
<div style={{width: '75%'}} className="container__col-lg-12 container__col-md-12 container__col-sm-12 container__col-xs-12 text-align-center">    
    <textarea className="input-field" name="message" id="message" rows="5" style={{height: '100px', width: '100%'}}/>
</div>
</div>


</div> */}