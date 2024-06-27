 import React from 'react'
import gallery from "../img/gallery.png";
import gallery1 from "../img/gallery1.png";
import drawing from "../img/drawing.png";
import currency from "../img/currency.png";
import gpt from "../img/gpt.png";

import g from "../img/g.png";
import g1 from "../img/g1.png";
import g2 from "../img/g2.png";
import g3 from "../img/g3.png";
import g4 from "../img/g4.png";
import g5 from "../img/g5.png";
import g6 from "../img/g6.png";
import p from "../img/p.jpeg";
import p1 from "../img/p1.jpeg";
import p2 from "../img/p2.jpeg";
import p3 from "../img/p3.jpeg";
import p5 from "../img/p5.jpeg";

import p4 from "../img/p4.jpeg";


const Projects = () => {
  return (
    <><h1>Projects</h1>


<div className="project-description">
      <h2>Image Gallery Project Using MERN Stack with JWT Authentication</h2>
      <h3>Project Overview</h3>
      <p>
        This project is an image gallery web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It includes functionalities for CRUD (Create, Read, Update, Delete) operations and uses JWT (JSON Web Token) authentication for user management and security. The images are displayed in both card and table formats, providing users with a flexible and user-friendly interface to view, manage, and organize their images.
      </p>
      <h3>Key Features</h3>
      <ul>
        <li><strong>User Authentication:</strong>
          <ul>
            <li>Registration and Login: Users can create accounts and log in using their credentials.</li>
            <li>JWT Authentication: Secure authentication using JWT to manage user sessions.</li>
          </ul>
        </li>
        <li><strong>Image Management:</strong>
          <ul>
            <li>Upload Images: Users can upload images with associated metadata.</li>
            <li>View Images: Images can be viewed in both card and table formats.</li>
            <li>Update Images: Users can update image details and metadata.</li>
            <li>Delete Images: Users can delete images from the gallery.</li>
          </ul>
        </li>
        <li><strong>UI/UX:</strong>
          <ul>
            <li>Responsive Design: The application is designed to be responsive and works well on both desktop and mobile devices.</li>
            <li>Image Display: Images are displayed in cards and tables for a comprehensive view.</li>
            <li>Styling: Using Bootstrap for styling with a mix of green and black backgrounds.</li>
          </ul>
        </li>
      </ul>
      <h3>Technology Stack</h3>
      <ul>
        <li><strong>Frontend:</strong> React.js
          <ul>
            <li>React for building the user interface.</li>
            <li>React Router for navigation.</li>
            <li>Axios for making HTTP requests.</li>
            <li>Bootstrap for responsive and stylish UI components.</li>
          </ul>
        </li>
        <li><strong>Backend:</strong> Node.js and Express.js
          <ul>
            <li>Express.js for handling API requests and routing.</li>
            <li>JWT for secure authentication and authorization.</li>
            <li>Multer for handling image uploads.</li>
          </ul>
        </li>
        <li><strong>Database:</strong> MongoDB
          <ul>
            <li>MongoDB for storing user information and image data.</li>
          </ul>
        </li>
      </ul>
      <h3>Project Structure</h3>
      <ul>
        <li><strong>Frontend:</strong>
          <ul>
            <li>Components: Components for registration, login, image upload, image list (cards and table), and image details.</li>
            <li>Services: Services for making API calls to the backend (e.g., AuthService, ImageService).</li>
            <li>Routes: Routes for different views (e.g., home, login, register, dashboard).</li>
          </ul>
        </li>
        <li><strong>Backend:</strong>
          <ul>
            <li>Routes: Routes for handling user authentication (register, login) and image management (create, read, update, delete).</li>
            <li>Controllers: Controllers for processing requests and interacting with the database.</li>
            <li>Models: Mongoose models for user and image data.</li>
            <li>Middleware: Middleware for JWT verification and image upload handling.</li>
          </ul>
        </li>
      </ul>
      <h3>Implementation Steps</h3>
      <ul>
        <li><strong>Setup Project Structure:</strong>
          <ul>
            <li>Initialize React and Node.js projects.</li>
            <li>Install necessary dependencies (React, Express, Mongoose, JWT, Multer, Axios, Bootstrap).</li>
          </ul>
        </li>
        <li><strong>User Authentication:</strong>
          <ul>
            <li>Create user model and authentication routes.</li>
            <li>Implement JWT for securing routes and managing user sessions.</li>
          </ul>
        </li>
        <li><strong>Image Management:</strong>
          <ul>
            <li>Create image model and CRUD routes.</li>
            <li>Implement image upload functionality using Multer.</li>
            <li>Develop frontend components for image upload, display (cards and tables), update, and delete.</li>
          </ul>
        </li>
        <li><strong>Integrate Frontend and Backend:</strong>
          <ul>
            <li>Connect React frontend to Express backend using Axios.</li>
            <li>Handle authentication and protected routes in the frontend.</li>
          </ul>
        </li>
        <li><strong>Styling and UI Enhancements:</strong>
          <ul>
            <li>Style the application using Bootstrap.</li>
            <li>Ensure the application is responsive and user-friendly.</li>
          </ul>
        </li>
      </ul>
      <h3>Conclusion</h3>
      <p>
        This project showcases the power of the MERN stack in building a full-fledged web application with authentication and CRUD functionalities. By displaying images in both card and table formats, the application provides a versatile and efficient way for users to manage their image gallery. The use of JWT ensures secure user authentication, making the application robust and secure.
      </p>
      <img width={300} src={p}/>
      <img  width={300} src={p1}/> 
      <img width={300}src={p2}/>
      <img width={300}  src={p3}/> 
      <img width={300} src={p4}/>
      <img width={300}  src={p5}/> 
<h1>Live Link: <a  href="https://crud-frontend-4h7b.vercel.app/
" target="_blank">MERN Gallery</a></h1>

    </div>
   
   
    <div className="drawing">
      <h2>  Live Drawing Board with MERN Stack and Socket</h2>
      <p>
        This project is a real-time collaborative drawing application developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It features a canvas-based drawing board where multiple users can draw simultaneously. The application utilizes WebSocket (Socket.IO) for live updates, ensuring that changes made by one user are instantly reflected for all participants in real-time.
      </p>

      <h3>Key Features:</h3>
      <ul>
        <li>Real-Time Collaboration: Multiple users can draw together on a shared canvas.</li>
        <li>Canvas Drawing Tools: Implemented with tools like pencils, brushes, colors, and an eraser.</li>
        <li>User Authentication: Secure user sessions and access management using JSON Web Tokens (JWT).</li>
        <li>Socket.IO Integration: Facilitates bi-directional communication for seamless real-time updates.</li>
        <li>Responsive Design: Ensures usability across devices of varying screen sizes.</li>
        <li>MongoDB Database: Stores user data, drawing boards, and session details.</li>
        <li>Express.js Backend: Provides a RESTful API for managing sessions and interacting with MongoDB.</li>
        <li>React.js Frontend: Dynamic UI to manage drawing tools and user interactions.</li>
        <li>Deployment: Hosted on platforms like Heroku or AWS for scalability and accessibility.</li>
      </ul>

      <h3>Technologies Used:</h3>
      <ul>
        <li>Frontend: React.js, HTML5 Canvas API, CSS (or Bootstrap for styling).</li>
        <li>Backend: Node.js, Express.js, MongoDB for database management.</li>
        <li>Real-Time Communication: Socket.IO for WebSocket integration.</li>
        <li>Authentication: JSON Web Tokens (JWT) for user authentication.</li>
        <li>Deployment: Hosted on cloud platforms for accessibility and scalability.</li>
      </ul>

      <h3>Purpose:</h3>
      <p>
        This project showcases the integration of real-time collaboration using modern web technologies. It serves as a practical example of building a live drawing board application with MERN stack components, emphasizing interactive and engaging user experiences through synchronized drawing capabilities.
      </p>
      <img width={1000} height={500} src={drawing}/> 
<h1>Live Link: <a href="https://drawing-socket.vercel.app/" target="_blank">Drawing Board</a></h1>

    </div>
    <div className="description-container">
      <h1>Project Description: Game Website</h1>
      
      <section>
        <h2>Overview</h2>
        <p>
          The game website is an interactive platform built using React.js, Three.js, and Bootstrap. It offers a variety of engaging games designed to provide entertainment and mental stimulation. The website features a sleek and modern user interface with intuitive navigation and dynamic visuals, thanks to the powerful combination of React.js for front-end development, Three.js for 3D graphics, and Bootstrap for responsive and stylish design.
        </p>
      </section>

      <section>
        <h2>Features</h2>
        <h3>1. Arithmetic Game</h3>
        <p>
          <strong>Description:</strong> A fun and educational game designed to improve arithmetic skills. Players solve various mathematical problems under time constraints to earn points and advance to higher levels.
        </p>
        <p>
          <strong>Key Features:</strong> Timed quizzes, multiple difficulty levels, scoring system, progress tracking.
        </p>

        <h3>2. Dice Game</h3>
        <p>
          <strong>Description:</strong> A classic dice rolling game where players roll dice and aim for specific combinations or totals to win.
        </p>
        <p>
          <strong>Key Features:</strong> Realistic dice animations, multiplayer mode, various game modes (e.g., highest roll wins, specific combinations).
        </p>

        <h3>3. Hide and Seek</h3>
        <p>
          <strong>Description:</strong> A virtual hide and seek game where players find hidden objects or characters within a 3D environment created with Three.js.
        </p>
        <p>
          <strong>Key Features:</strong> Interactive 3D scenes, multiple hiding spots, hints and clues.
        </p>

        <h3>4. Catch the Jerry</h3>
        <p>
          <strong>Description:</strong> A fast-paced game where players try to catch a moving character named Jerry within a limited time.
        </p>
        <p>
          <strong>Key Features:</strong> Responsive controls, increasing difficulty, fun animations and sound effects.
        </p>

        <h3>5. Batman vs. Joker</h3>
        <p>
          <strong>Description:</strong> A thrilling game where players control Batman and must defeat the Joker in various challenges and battles.
        </p>
        <p>
          <strong>Key Features:</strong> Engaging storyline, multiple levels, special abilities and power-ups, boss battles.
        </p>

        <h3>6. Tic-Tac-Toe</h3>
        <p>
          <strong>Description:</strong> The classic Tic-Tac-Toe game where players take turns marking Xs and Os on a 3x3 grid, aiming to get three in a row.
        </p>
        <p>
          <strong>Key Features:</strong> Simple and clean interface, single-player and multiplayer modes, scoring system.
        </p>

        <h3>7. Tetris</h3>
        <p>
          <strong>Description:</strong> The timeless puzzle game where players arrange falling blocks to create complete lines and earn points.
        </p>
        <p>
          <strong>Key Features:</strong> Smooth animations, increasing speed and difficulty, high score tracking.
        </p>

        <h3>8. Snake and Ladder</h3>
        <p>
          <strong>Description:</strong> A digital version of the traditional board game where players navigate a game board with snakes and ladders to reach the finish line.
        </p>
        <p>
          <strong>Key Features:</strong> Interactive board, dice rolling mechanics, multiplayer mode.
        </p>
      </section>

      <section>
        <h2>Technology Stack</h2>
        <ul>
          <li><strong>React.js:</strong> For building the user interface and managing the state of the application.</li>
          <li><strong>Three.js:</strong> For creating and rendering 3D graphics, enhancing the visual appeal of the games.</li>
          <li><strong>Bootstrap:</strong> For responsive design and ensuring the website looks great on all devices.</li>
          <li><strong>Additional Libraries:</strong> Various JavaScript libraries and tools for animations, sound effects, and game logic.</li>
        </ul>
      </section>

      <section>
        <h2>Project Goals</h2>
        <ul>
          <li><strong>Engagement:</strong> To create a platform that offers a variety of games to keep users engaged and entertained.</li>
          <li><strong>Education:</strong> To incorporate educational elements in games like the Arithmetic Game, promoting learning through play.</li>
          <li><strong>User Experience:</strong> To deliver a smooth, responsive, and visually appealing user experience across all games.</li>
          <li><strong>Scalability:</strong> To build a modular and scalable architecture that allows for the addition of new games and features in the future.</li>
        </ul>
      </section>

      <section>
        <h2>Conclusion</h2>
        <p>
          This game website project combines the power of modern web technologies to deliver a rich and immersive gaming experience. Whether users are looking to challenge their minds with arithmetic problems, enjoy classic games like Tic-Tac-Toe and Tetris, or dive into interactive 3D adventures, this platform has something for everyone.
        </p>
      </section>
    </div>
   
    <img  width={600} src={g}/>   <img  width={500}   src={g1}/>   <img   width={300}  src={g2}/>   <img   width={300}  src={g3}/>   <img   width={300}  src={g4}/>   <img   width={300}  src={g5}/>   <img  width={300}   src={g6}/> 
<h1>Live Link: <a href="https://three-js-game-tawny.vercel.app/" target="_blank">Game website</a></h1>

   <div className="project-description">
      <h2>MERN Stack Image Gallery CRUD Application</h2>
      <p>
        This project is a full-stack web application built using the MERN
        (MongoDB, Express.js, React.js, Node.js) stack, aimed at managing and
        displaying a gallery of images with CRUD (Create, Read, Update, Delete)
        functionalities.
      </p>

      <h3>Key Features:</h3>
      <ul>
        
        <li>Image Gallery Management: Users can upload new images, view existing
          images, update image details, and delete images from the gallery.</li>
        <li>Responsive Design: Utilizing responsive design principles to ensure
          the application is accessible and user-friendly across devices of
          various screen sizes.</li>
        <li>MongoDB Database: Utilizing MongoDB as the database to store image
          metadata and associated information.</li>
        <li>Express.js Backend: Building a RESTful API with Express.js to handle
          HTTP requests from the frontend and interact with the MongoDB
          database.</li>
        <li>React.js Frontend: Developing a dynamic and interactive user
          interface using React.js to render the image gallery, forms for CRUD
          operations, and handle user interactions seamlessly.</li>
        <li>Image Handling: Implementing functionality to handle image uploads,
          storage, and retrieval, ensuring efficient and optimized performance.</li>
        <li>Error Handling and Validation: Implementing robust error handling
          and validation mechanisms on both the frontend and backend to enhance
          application reliability.</li>
        <li>Deployment: Deploying the application to a cloud platform such as
          Heroku or AWS for accessibility and scalability.</li>
      </ul>

      <h3>Technologies Used:</h3>
      <p>
        <strong>Frontend:</strong> React.js, HTML/CSS, Bootstrap or Material-UI
        for styling and UI components.<br />
        <strong>Backend:</strong> Node.js, Express.js for API development,
        MongoDB for database management.<br />
        <strong>Authentication:</strong> JSON Web Tokens (JWT) for secure user
        authentication.<br />
        <strong>Deployment:</strong> Heroku, AWS, or similar cloud platforms for
        hosting and deployment.
      </p>

      <h3>Purpose:</h3>
      <p>
        The primary goal of this project is to provide a practical demonstration
        of implementing CRUD operations within a MERN stack environment, focusing
        on managing image data effectively. It serves as an educational tool for
        understanding full-stack web development concepts and best practices.
      </p>
     <div> <img width={800} src={gallery}/>
      <img width={300} src={gallery1}/></div>
<h1>Live Link: <a  href="https://gallery-react-query.vercel.app" target="_blank">MERN Gallery</a></h1>

    </div>





<h1>On going Project....</h1>
<div className="project-description">
      <h2>MERN Stack School Website Project</h2>
      <h3>Project Overview</h3>
      <p>
        This project is a comprehensive school management website built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It provides login management for students, teachers, and normal users with JWT authentication. The website includes features for viewing marks, school details, salary management, leave management, and Stripe integration for payment processing.
      </p>
      <h3>Key Features</h3>
      <ul>
        <li><strong>User Authentication:</strong>
          <ul>
            <li>JWT Authentication: Secure authentication using JSON Web Tokens.</li>
            <li>Role-based Access Control: Different access levels for students, teachers, and other users.</li>
          </ul>
        </li>
        <li><strong>School Management Features:</strong>
          <ul>
            <li>Marks Viewing: Students can view their marks and grades.</li>
            <li>School Details: Information about the school, such as location, contact details, etc.</li>
            <li>Salary Management: Features for managing teacher salaries.</li>
            <li>Leave Management: Tracking and managing leave requests for teachers.</li>
          </ul>
        </li>
        <li><strong>Stripe Integration:</strong>
          <ul>
            <li>Payment Processing: Integration with Stripe for handling fee payments and transactions.</li>
          </ul>
        </li>
        <li><strong>UI/UX:</strong>
          <ul>
            <li>Responsive Design: The application is responsive and works well on different devices.</li>
            <li>Bootstrap Styling: Utilizes Bootstrap for creating a modern and user-friendly interface.</li>
          </ul>
        </li>
      </ul>
      <h3>Technology Stack</h3>
      <ul>
        <li><strong>Frontend:</strong> React.js
          <ul>
            <li>React Router: For navigation and routing within the application.</li>
            <li>Axios: Handling HTTP requests between frontend and backend.</li>
            <li>React Query: For managing and caching server state in the frontend.</li>
            <li>Bootstrap: Styling components for a responsive design.</li>
          </ul>
        </li>
        <li><strong>Backend:</strong> Node.js and Express.js
          <ul>
            <li>Express.js: Handling API requests and routing.</li>
            <li>MongoDB: Database for storing user information, school data, and transaction records.</li>
            <li>JWT: Authentication middleware for securing routes and managing user sessions.</li>
            <li>Stripe API: Integration for handling payment transactions.</li>
          </ul>
        </li>
      </ul>
      <h3>Project Structure</h3>
      <ul>
        <li><strong>Frontend:</strong>
          <ul>
            <li>Components: Components for login, dashboard, marks viewing, salary management, leave management.</li>
            <li>Services: Integration with backend services (e.g., AuthService, SchoolService).</li>
            <li>Routes: Frontend routes for different user roles (e.g., student, teacher, admin).</li>
          </ul>
        </li>
        <li><strong>Backend:</strong>
          <ul>
            <li>Routes: API routes for authentication, marks retrieval, salary management, leave management.</li>
            <li>Controllers: Logic for processing requests and interacting with the database.</li>
            <li>Models: Mongoose models for defining schemas and interacting with MongoDB.</li>
            <li>Middleware: JWT middleware for authentication and authorization.</li>
          </ul>
        </li>
      </ul>
      <h3>Implementation Steps</h3>
      <ul>
        <li><strong>Setup Project Structure:</strong>
          <ul>
            <li>Initialize React and Node.js projects.</li>
            <li>Install necessary dependencies (React, Express, MongoDB, JWT, Axios, Bootstrap, Stripe).</li>
          </ul>
        </li>
        <li><strong>User Authentication:</strong>
          <ul>
            <li>Create user models and implement authentication routes.</li>
            <li>Integrate JWT for securing routes and managing user sessions.</li>
          </ul>
        </li>
        <li><strong>School Management Features:</strong>
          <ul>
            <li>Design and implement UI components for marks viewing, school details, salary management, and leave management.</li>
            <li>Develop backend logic for handling CRUD operations related to school data and user management.</li>
          </ul>
        </li>
        <li><strong>Stripe Integration:</strong>
          <ul>
            <li>Set up Stripe API integration for processing payments and handling transactions.</li>
            <li>Implement frontend components for payment forms and transaction management.</li>
          </ul>
        </li>
        <li><strong>Styling and UI Enhancements:</strong>
          <ul>
            <li>Utilize Bootstrap for creating a responsive and visually appealing UI.</li>
            <li>Ensure consistent UX across different sections of the school website.</li>
          </ul>
        </li>
      </ul>
      <h3>Conclusion</h3>
      <p>
        This project demonstrates the implementation of a comprehensive school management system using the MERN stack. By incorporating JWT authentication and Stripe integration, the application ensures secure user access and efficient payment processing. The modular structure and use of React.js and Bootstrap contribute to a user-friendly interface, making it easy for students, teachers, and administrators to manage school-related tasks effectively.
      </p>
    </div>





   
   
   
   
   
    <div className="project-description">
      <h2>GPT Project Using React.js</h2>
      <h3>Project Overview</h3>
      <p>
        This project is a customized ChatGPT web application built using React.js. It leverages OpenAI's GPT model to provide interactive and dynamic conversation capabilities. The application includes features for user authentication, personalized chat experiences, and customization options to tailor the chatbot's responses and behavior according to specific requirements.
      </p>
      <h3>Key Features</h3>
      <ul>
        <li><strong>User Authentication:</strong>
          <ul>
            <li>Registration and Login: Users can create accounts and log in using their credentials.</li>
            <li>Session Management: Secure session handling to maintain user state.</li>
          </ul>
        </li>
        <li><strong>Chat Functionality:</strong>
          <ul>
            <li>Interactive Conversations: Users can engage in real-time conversations with the chatbot.</li>
            <li>Customization Options: Users can customize the chatbot's behavior and response style.</li>
          </ul>
        </li>
        <li><strong>UI/UX:</strong>
          <ul>
            <li>Responsive Design: The application is designed to be responsive and works well on both desktop and mobile devices.</li>
            <li>Chat Interface: A clean and intuitive chat interface for seamless interactions.</li>
            <li>Styling: Using Bootstrap for styling with a modern and user-friendly design.</li>
          </ul>
        </li>
      </ul>
      <h3>Technology Stack</h3>
      <ul>
        <li><strong>Frontend:</strong> React.js
          <ul>
            <li>React for building the user interface.</li>
            <li>React Router for navigation.</li>
            <li>Axios for making HTTP requests.</li>
            <li>Bootstrap for responsive and stylish UI components.</li>
          </ul>
        </li>
        <li><strong>Backend:</strong> Node.js and Express.js
          <ul>
            <li>Express.js for handling API requests and routing.</li>
            <li>JWT for secure authentication and authorization.</li>
            <li>OpenAI API for chatbot functionality.</li>
          </ul>
        </li>
        <li><strong>Database:</strong> MongoDB
          <ul>
            <li>MongoDB for storing user information and chat logs.</li>
          </ul>
        </li>
      </ul>
      <h3>Project Structure</h3>
      <ul>
        <li><strong>Frontend:</strong>
          <ul>
            <li>Components: Components for registration, login, chat interface, and customization settings.</li>
            <li>Services: Services for making API calls to the backend (e.g., AuthService, ChatService).</li>
            <li>Routes: Routes for different views (e.g., home, login, register, chat).</li>
          </ul>
        </li>
        <li><strong>Backend:</strong>
          <ul>
            <li>Routes: Routes for handling user authentication (register, login) and chat management.</li>
            <li>Controllers: Controllers for processing requests and interacting with the OpenAI API and the database.</li>
            <li>Models: Mongoose models for user and chat data.</li>
            <li>Middleware: Middleware for JWT verification.</li>
          </ul>
        </li>
      </ul>
      <h3>Implementation Steps</h3>
      <ul>
        <li><strong>Setup Project Structure:</strong>
          <ul>
            <li>Initialize React and Node.js projects.</li>
            <li>Install necessary dependencies (React, Express, Mongoose, JWT, Axios, Bootstrap).</li>
          </ul>
        </li>
        <li><strong>User Authentication:</strong>
          <ul>
            <li>Create user model and authentication routes.</li>
            <li>Implement JWT for securing routes and managing user sessions.</li>
          </ul>
        </li>
        <li><strong>Chat Functionality:</strong>
          <ul>
            <li>Set up the OpenAI API integration.</li>
            <li>Develop backend routes and controllers for handling chat requests.</li>
            <li>Create frontend components for the chat interface and user interactions.</li>
          </ul>
        </li>
        <li><strong>Customization Options:</strong>
          <ul>
            <li>Implement settings for users to customize chatbot behavior.</li>
            <li>Store customization settings in the database.</li>
          </ul>
        </li>
        <li><strong>Integrate Frontend and Backend:</strong>
          <ul>
            <li>Connect React frontend to Express backend using Axios.</li>
            <li>Handle authentication and protected routes in the frontend.</li>
          </ul>
        </li>
        <li><strong>Styling and UI Enhancements:</strong>
          <ul>
            <li>Style the application using Bootstrap.</li>
            <li>Ensure the application is responsive and user-friendly.</li>
          </ul>
        </li>
      </ul>
      <h3>Conclusion</h3>
      <p>
        This project demonstrates the capability of integrating OpenAI's GPT model into a web application to create a customized chat experience. By using the MERN stack and incorporating JWT authentication, the application provides a secure and interactive platform for users. The customization options allow for a tailored chat experience, making the application versatile and adaptable to various use cases.
      </p>
      <img  width={600} src={gpt}/>   
<h1>Live Link: <a href="https://vercel.com/afrinashars-projects/chat-gpt" target="_blank">GPT</a></h1>

    </div>
   
   
   
    <div className="currency-converter-description">
      <h2>Currency Converter</h2>
      <p>
        This project is a currency converter built using React.js. It allows users to convert currencies using real-time exchange rates fetched from an external API. Key features include:
      </p>

      <h3>Key Features:</h3>
      <ul>
        <li>User Interface: Input fields for entering the amount to convert and selecting currencies.</li>
        <li>Real-Time Conversion: Fetches current exchange rates from a currency API to perform conversions.</li>
        <li>Dynamic Updates: Updates the converted amount instantly as users change input values.</li>
        <li>Responsive Design: Ensures usability across various devices and screen sizes.</li>
        <li>Error Handling: Provides feedback for invalid inputs or API request failures.</li>
      </ul>

      <h3>Technologies Used:</h3>
      <ul>
        <li>React.js: Frontend library for building user interfaces.</li>
        <li>API Integration: Utilizes a currency exchange rate API (e.g., fixer.io, exchangeratesapi.io).</li>
        <li>Bootstrap (or other CSS frameworks): For styling and responsive design.</li>
        <li>Deployment: Hosted on platforms like Heroku or AWS for accessibility and scalability.</li>
      </ul>

      <h3>Purpose:</h3>
      <p>
        This project demonstrates proficiency in React.js and API integration, providing a practical tool for users to convert currencies efficiently and accurately.
      </p>

      <img width={1000} height={500} src={currency}/> 
<h1>Live Link: <a href="https://currency-converter-master-nine.vercel.app/" target="_blank">Currency Converter</a></h1>

    </div>  
    </>
  )
}

export default Projects