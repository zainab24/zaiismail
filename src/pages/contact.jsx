import * as React from "react";

export default function Contact() {
  return <section className="page-1">
    <p>Check out my <a href="https://www.linkedin.com/in/zainabismail/" target="_blank" rel="noreferrer">linkedin</a>, <a href="https://www.instagram.com/zai._i" target="_blank" rel="noreferrer">instagram</a> or email me at <a href="mailto:zainabismail024@gmail.com">zainabismail024@gmail.com</a>.</p>
    <h2>Send a quick note</h2>
    <form name="contact" method="POST" data-netlify="true">
  <p>
    <label>name <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>email <input type="email" name="email" /></label>
  </p>
  <p>
    <label>message <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">send</button>
  </p>
</form>
  </section>;
}
