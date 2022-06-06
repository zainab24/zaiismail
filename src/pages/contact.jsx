import React, { useState } from "react";

export default function Contact() {
    const [success, setSuccess] = useState(false);
    const onSubmit = async (event, setSuccess) => {
        setSuccess(true);
      };
      
    return ( 

    <div className="form">
<form name="contact" method="POST" data-netlify="true" onSubmit={e => onSubmit(e, setSuccess)}>

<input type="hidden" name="form-name" value="contact" />
  <p>{ success ? 'Thanks for your message!' : 'Send a quick note' }</p>
  <p>
    <label><span>Name</span> <input type="text" name="name" /></label>
  </p>
  <p>
    <label><span>Email</span> <input type="email" name="email" /></label>
  </p>
  <p>
    <label><span>Message</span> <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Contact</button>
  </p>
</form>
</div>
    );
  }
