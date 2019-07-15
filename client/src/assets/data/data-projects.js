//----------Data for Projects to be shown----------

// Data for projects tab
export const PROJECTS_ARR = [
    {
        title: '{this}',
        img: 'this.png',
        keywords: ['Frontend', 'React.js', 'Redux', 'CSS3', 'SASS', 'SVG',],
        desc: 'This website is a React.js Redux frontend app for my portfolio. This application shows React.js Redux application architecture and uses personal arts and CSS styles. All SVG images, including the background, are drawn by hand and inkscape.',
        github: 'https://github.com/kikim1025/Portfolio',
        deployed: 'https://kikim1025.github.io/Portfolio/'
    },
    {
        title: 'React Calculator',
        img: 'rc.png',
        keywords: ['Frontend', 'React.js', 'Redux', 'Redux Middleware', 'Demo'],
        desc: 'A simple frontend app, written to demonstarte React.js and Redux architecture and methodologies. This frontend app functions as a virtual calculator. The Redux stores the math displayed on the screen and provides actions upon each button click to update the math. Upon each button inputs, the redux middleware process and logic will determine whether or not current input is valid and update the display accordingly with either a result or an error message. In terms of components, Redux is connected to a CalculatorContainer component, thereby providing connection to the presentational sub-components which constructs the way the UI looks. Detailed explanations on React Redux architecture and logic are shown on the readme file on the github repository page.',
        github: 'https://github.com/kikim1025/Reacting-Calculadora',
        deployed: 'https://kikim1025.github.io/Reacting-Calculadora/'
    },
    {
        title: 'Company Hunter',
        img: 'company-hunter.png',
        keywords: ['MERN', 'Full Stack', 'RESTful API', 'React.js', 'Redux', 'Redux Thunk', 'Node.js', 'Express.js', 'MongoDB'],
        desc: 'A MERN full stack app. App is used to view the list of companies, create a new company, edit a company data, and delete each data. On frontend, React is used for a SPA, and Redux is used to store retrieved company data array and modal data for specific chosen company for creating or editing. Redux Thunk middleware and Axios are used for the communication between client and server. On backend, Node.js is used with Express.js in RESTful API to host a server, saving company data in MongoDB.',
        github: 'https://github.com/kikim1025/Company-Hunter',
        deployed: 'https://cryptic-brook-28508.herokuapp.com/'
    }
];