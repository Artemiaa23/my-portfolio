export default function Contact() {
  return (
    <div className="page-container">
      <div className="card">
        <h1>Contact Me 💌</h1>
        
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:dadulla.shanemariam@gmail.com">
            dadulla.shanemariam@gmail.com
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{' '}
          <a href="https://github.com/Artemiaa23" target="_blank" rel="noreferrer">
            github.com/Artemiaa23
          </a>
        </p>

        <h2 style={{ marginTop: '2rem' }}>Send a Message ✨</h2>
        <form>
          <div>
            <label><strong>Your Name</strong></label>
            <input type="text" placeholder="Jane Doe" />
          </div>
          <div>
            <label><strong>Your Email</strong></label>
            <input type="email" placeholder="hello@email.com" />
          </div>
          <div>
            <label><strong>Message</strong></label>
            <textarea rows="5" placeholder="Write something nice... 💖"></textarea>
          </div>
          <button type="submit" className="btn">Send Message 💌</button>
        </form>
      </div>
    </div>
  );
}