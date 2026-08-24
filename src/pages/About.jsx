export default function About() {
  return (
    <div className="page-container">
      <div className="card">
        <h1>About Me</h1>
        <p>
          Hi! I'm <strong>Shane Marian Dadulla</strong>, a Computer Science student 
          passionate about creating beautiful and user-friendly websites. I'm currently 
          learning React, JavaScript, and backend development with Laravel.
        </p>

        <h2>🌸 Skills</h2>
        <ul style={{ marginLeft: '1.5rem', color: '#5c4b55' }}>
          <li>Java</li>
          <li>JavaScript & React</li>
          <li>PHP & Laravel</li>
          <li>MySQL</li>
        </ul>

        <h2>🎓 Education</h2>
        <p>
          <strong>Bacherlo of Science in Computer Science</strong><br />
            Student at Pamantasan ng Cabuyao
        </p>
      </div>
    </div>
  );
}