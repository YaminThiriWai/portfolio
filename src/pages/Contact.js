<form 
  className="contact-form" 
  action="https://formspree.io/f/mgvnwepo"
  method="POST"
>
  <div className="form-group">
    <label htmlFor="name">Name</label>
    <input type="text" id="name" name="name" required />
  </div>
  
  <div className="form-group">
    <label htmlFor="email">Email</label>
    <input type="email" id="email" name="email" required />
  </div>
  
  <div className="form-group">
    <label htmlFor="subject">Subject</label>
    <input type="text" id="subject" name="subject" required />
  </div>
  
  <div className="form-group">
    <label htmlFor="message">Message</label>
    <textarea id="message" name="message" rows="5" required></textarea>
  </div>
  
  <button type="submit" className="submit-btn">
    Send Message
  </button>
</form>
