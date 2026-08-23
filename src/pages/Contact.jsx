export default function Contact() {
    return (
      <div style={{ padding: '0 2rem' }}>
        <h1>Contact Me</h1>
        <p>Email: dadulla.shanemarian@gmail.com</p>
        <p>GitHub: github.com/Artemiaa23</p>
        
        <form style={{ marginTop: '2rem' }}>
          <div>
            <label>Name:</label><br />
            <input type="text" name="name" style={{ width: '300px', padding: '0.5rem', margin: '0.3rem 0' }} />
          </div>
          <div>
            <label>Message:</label><br />
            <textarea name="message" rows="5" style={{ width: '300px', padding: '0.5rem', margin: '0.3rem 0' }}></textarea>
          </div>
          <button type="button" style={{ padding: '0.5rem 1.5rem', marginTop: '0.5rem' }}>Send</button>
        </form>
      </div>
    );
  }