import React from "react";

export default function Contact() {

    return ( 

    <div className="form">
<form name="contact" method="POST" data-netlify="true" action="success.html">

<input type="hidden" name="form-name" value="contact" />
  <p>Send a quick note</p>
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
