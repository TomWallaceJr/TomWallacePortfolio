// This is an array of objects where each object is a one of my projects with
// properties associated with them { title img description }
// When populating portfolio page with projects we will pull from this file

// EX:
// {
//   title: 'Storm',
//   imgPath: '/images/storm.jpg',
//   description: 'bl;ah blag ',
// },

const portfolio = [
  {
    title: 'MWall Drawings',
    imgPath: './images/mwall.jpg',
    description: `An artist's portfolio and e-commerce website for personalized pet portraits. 
        This website was developed using React.js and a combination of vanilla and bootstrap CSS. In the
        process of adding shopping cart feature.`,
  },
  {
    title: 'Dealer Tokes',
    imgPath: './images/dealertokes.jpg',
    description: `Full-stack web application designed specifically for Poker Dealers.
     Dealer Tokes allows Poker Dealers to keep track of their total/daily income and 
     keeps track of how much they are making per hour as well as per 'down' over time. 
     The client side is built using React.js and 100% vanilla CSS. The server side is built 
     with Node, Express, Knex, and intereacts with a Postgres database deployed on Heroku.
     I am in the process of including monthly statements as well as a graphical 
     representation of the users statistics over time. I plan to expand and add numerous 
     features to it over time.`,
  },
  {
    title: 'Spanish Spaced Repetition',
    imgPath: './images/spanish.jpg',
    description: `This application was my second capstone at Thinkful. It is a Spanish 
    language learning application that uses the spaced-repetition learning technique. 
    After registering for a new account, the user is directed to their dashboard which 
    displays their current progress. In the Learning Route, one by one, Spanish words render
    to the screen and the user is prompted to enter the English translation of said word. 
    It is built for anybody who would like to learn entry level Spanish. Developed using 
    vanilla CSS, Javascript, ReactJs, NodeJs, ExpressJs, Knex and is connected to a 
    PostgreSQL database deployed on Heroku.`,
  },
];
