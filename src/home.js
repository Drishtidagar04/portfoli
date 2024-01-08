// Home.js

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './home.css';

const Home = ({ skills }) => {
  const skillsText = skills ? skills.join(', ') : 'No skills available';

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h2>Welcome to My Creative Portfolio</h2>
        <p>Explore the art of web development with a touch of innovation</p>
      </div>

      {/* Introduction Section */}
      <div className="introduction-section">
        <h3>Hi, I'm Drishti!</h3>
        <p>
          I'm a creative frontend developer passionate about crafting unique and engaging digital experiences. My expertise lies in building visually stunning websites with a focus on user-friendly design and efficient, clean code.
        </p>
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <h3>Skills Snapshot</h3>
        <p>Check out some of my key skills:</p>
        <Link to="/skills" className="skills-link">
          My Skills
        </Link>
        <div className="skills-list">
          {skills && skills.map((skill, index) => (
            <div key={index} className="skill-item">
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="cta-section">
        <h3>Ready to see my work?</h3>
        <p>Explore my portfolio and witness the creativity in action.</p>
        <Link to="/portfolio" className="cta-link">
          View Portfolio
        </Link>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <h3>Ready to Collaborate?</h3>
        <p>Let's turn your ideas into reality. Connect with me:</p>
        <Link to="/contact" className="contact-link">
          Contact Me
        </Link>
      </div>

      <footer className="footer">
        {/* Include copyright details and the year */}
        {/* Add quick links to important sections */}
      </footer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  skills: state.skills, // Update the path based on your actual Redux state structure
});

export default connect(mapStateToProps)(Home);
