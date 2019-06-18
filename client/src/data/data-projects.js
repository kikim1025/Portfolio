//----------Data for Projects to be shown----------

// Redux state constants
export const PROJECTS_ARR = [
    {
        title: '{this}',
        img: 'this.png',
        keywords: ['Frontend', 'React.js', 'Redux', 'CSS3', 'SVG', 'Arts'],
        desc: 'This website is a React.js Redux frontend app for my portfolio. This application demonstrates React.js Redux application architecture, and heavily uses arts and CSS styles. Background image is a SVG file, drawn by hand and inkscape. ',
        github: 'https://github.com/kikim1025/Portfolio',
        deployed: 'SOON'
    },
    {
        title: 'React Calculator',
        img: 'rc.png',
        keywords: ['Frontend', 'React.js', 'Redux', 'Demo'],
        desc: 'A frontend app, written to demonstarte React.js and Redux architecture and methodologies. This frontend app functions as a virtual calculator.',
        github: 'https://github.com/kikim1025/Reacting-Calculadora',
        deployed: 'https://kikim1025.github.io/Reacting-Calculadora/'
    },
    {
        title: 'Sticky Messages',
        img: 'sticky-messages.png',
        keywords: ['MERN', 'Full Stack', 'RESTful API', 'React.js', 'Node.js', 'Express.js', 'MongoDB'],
        desc: 'A MERN full-stack app that users can post sticky-messages to each other. This application primarily uses Node.js, Express.js, React.js and MongoDB to deploy a website users can log in and post messages to another user in a message board. On the backend, server is created using Node.js and Express.js, using RESTful API to communicate with client. MongoDB contains user data such as login, password, or respective messages and their contents. The backend uses NPM packets such as Bcrypt to encrypt user passwords, and JSON Web Token for user authentification. On the frontend, the client code is written using React.js, using a sticky postit themed styles for each messages.',
        github: 'https://github.com/kikim1025/Sticky-Messages',
        deployed: 'https://sticky-messages.herokuapp.com/'
    }
];