export default function Contact() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Contact Me</h1>
      <p><strong>Email:</strong> dadulla.shanemariam@gmail.com</p>
      <p><strong>GitHub:</strong> <a href="https://github.com/Artemiaa23" target="_blank" rel="noreferrer" style={{ color: '#007bff' }}>github.com/Artemiaa23</a></p>
      
      <h2>Send a Message</h2>
      <form style={{ marginTop: '1rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Name:</label><br />
          <input type="text" style={{ width: '100%', padding: '0.5rem', marginTop: '0.3rem' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Email:</label><br />
          <input type="email" style={{ width: '100%', padding: '0.5rem', marginTop: '0.3rem' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Message:</label><br />
          <textarea rows="5" style={{ width: '100%', padding: '0.5rem', marginTop: '0.3rem' }}></textarea>
        </div>
        <button type="submit" style={{ padding: '0.5rem 1.5rem', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Send Message
        </button>
      </form>
    </div>
  );
}