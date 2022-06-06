import React, { useEffect } from "react";

const [success, setSuccess] = useState(false);

useEffect(() => {
    if ( window.location.search.includes('success=true') ) {
    setSuccess(true);
    }
}, []);

export default function Contact() {

    return ( 

    <div className="form">
        {success && ( <p> Thanks for your message! </p> )}
<form name="contact" method="POST" data-netlify="true">

<input type="hidden" name="form-name" value="contact" />
  <p><b>Send me a quick note</b></p>
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

