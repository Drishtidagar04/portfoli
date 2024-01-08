// Projects.js
import React from 'react';
import './projects.css'; 
const Projects = () => {
  // Assuming you have a projects array with project details
  const projects = [
    {
      title: 'Ping Pong Game',
      description: 'Developed a classic Ping Pong game using HTML, CSS, and JavaScript, showcasing proficiency in front-end web development.',
      features: [
        'Implemented the game logic, including paddle movement, ball physics, and score tracking, providing an interactive gaming experience.',
        'Designed an intuitive user interface with HTML and CSS, creating a visually appealing and responsive game layout.',
        'Utilized JavaScript to handle user input, collision detection, and game state management for a seamless and enjoyable gameplay experience.',
      ],
      technologiesUsed: [
        'HTML: Constructed the game structure and layout, ensuring accessibility and a well-organized document structure.',
        'CSS: Styled the game components for an attractive and responsive design, enhancing the overall user experience.',
        'JavaScript: Applied client-side scripting to bring the game to life, handling game mechanics, user interactions, and dynamic updates.',
      ],
      codingAchievements: [
        'Achieved smooth and realistic ball movement using JavaScript physics calculations, enhancing the realism of the game.',
        'Implemented responsive design principles, allowing the game to adapt to various screen sizes for a consistent and enjoyable experience across devices.',
      ],
      problemSolving: 'Overcame challenges related to game responsiveness, collision detection accuracy, and optimizing performance for smooth gameplay.',
      learningOutcomes: 'Developed strong problem-solving skills and gained hands-on experience in game development, refining proficiency in HTML, CSS, and JavaScript.',
    },
    
      {
        title: 'Codial - Chatting Application',
        description: 'Developed a real-time chatting application, "Codial," using a full-stack technology stack, including MongoDB, Express.js, Node.js, HTML, CSS, Bootstrap, and JavaScript.',
        features: [
          'Real-time Messaging: Implemented real-time messaging functionality using WebSockets or a relevant technology, enabling users to send and receive messages instantly.',
          'User Authentication: Integrated secure user authentication to ensure data privacy and user identity verification.',
          'Database Integration: Utilized MongoDB to store and manage user profiles, chat histories, and other relevant data.',
          'Responsive Design: Designed a responsive and visually appealing user interface using HTML, CSS, and Bootstrap, ensuring a seamless experience across devices.',
        ],
        technologiesUsed: [
          'Front-End:',
          'HTML: Structured the web pages for a clean and organized layout.',
          'CSS: Applied styles to enhance the visual appeal and responsiveness of the application.',
          'Bootstrap: Leveraged Bootstrap components for efficient and consistent design.',
          'Back-End:',
          'Node.js: Used for server-side development, handling requests and managing application logic.',
          'Express.js: Built a robust and scalable API framework for seamless communication between the front-end and back-end.',
          'MongoDB: Employed a NoSQL database to store user data and chat information.',
          'JavaScript: Employed client-side and server-side JavaScript to create interactive and dynamic elements.',
        ],
        achievements: [
          'Successfully implemented real-time messaging, enhancing user engagement and providing a dynamic chatting experience.',
          'Achieved secure user authentication to protect user data and maintain privacy.',
        ],
        challengesOvercome: 'Addressed challenges related to real-time communication synchronization, ensuring a smooth and reliable chatting experience for users.',
        learningOutcomes: 'Gained valuable experience in full-stack development, real-time communication, and database management using MongoDB.',
      },
      // other project details
    
    
    {
      title: 'Spotify Clone',
      description: 'Developed a functional Spotify clone using HTML, CSS, JavaScript, and Bootstrap to recreate the user interface and core functionalities of the popular music streaming platform.',
      achievements: [
        'Successfully replicated the Spotify user interface, including features such as user authentication, dynamic playlist rendering, and real-time music playback.',
        'Implemented responsive design principles with Bootstrap, ensuring a seamless user experience across various devices and screen sizes.',
        'Utilized JavaScript to create interactive features, such as playlist customization, song search, and play/pause controls, closely mimicking the behavior of the original Spotify application.',
      ],
      technologiesUsed: [
        'HTML: Created the structure of the web pages, ensuring semantic and accessible markup.',
        'CSS: Applied styles to achieve a visually appealing and responsive design, incorporating animations and transitions for a polished user experience.',
        'JavaScript: Implemented client-side logic for dynamic content updates, user interactions, and integration with external APIs for music data.',
        'Bootstrap: Leveraged Bootstrap components and utilities for efficient layout and styling, streamlining the development process.',
      ],
     
    },
    // Add more projects as needed
  ];

  return (
    <div>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <h4>Key Features:</h4>
          <ul>
            {project.features && project.features.map((feature, i) => <li key={i}>{feature}</li>)}
          </ul>
          <h4>Technologies Used:</h4>
          <ul>
            {project.technologiesUsed && project.technologiesUsed.map((technology, i) => <li key={i}>{technology}</li>)}
          </ul>
          <h4>Coding Achievements:</h4>
          <ul>
            {project.codingAchievements && project.codingAchievements.map((achievement, i) => <li key={i}>{achievement}</li>)}
          </ul>
          <h4>Problem Solving:</h4>
          <p>{project.problemSolving}</p>
          <h4>Learning Outcomes:</h4>
          <p>{project.learningOutcomes}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
