# bridgehouse-project

live demo here: 

# About 
    This project was built as a practice for updating the Chicago Bridgehouse Museum's website and functionality, and as a capstone project for PerScholas' 16 wee software engineering bootcamp. 

    The Bridgehouse Museum's mission is to educate the public on the history of the Chicago River, along with the efforts made to clean and beautify it over the last 40 years, as well as current and ongoing projects to continue to care and advocate for the river. 

    This project seeks to address three issues related to the museum's ability to fulfill its mission: 
        - floors 2-5 are not accessible to anyone who can't climb stairs 
        - the museum is only open seasonally 
        - the current website curation is old, outdated, and in a format that is hard to use 
    by providing updated digital curation on the website, the bridgehouse museum can provide curation to those who can't access the museum at all or who cant climb the stairs, to those who would want to learn about the history and ecology of the river outside of our open season, and in a format that is accessible and modren(and easy to navigate and cleanly laid out) 

    To accomplish this, I focused on three things: 
        - Updating the general layout of the website to be more mobile compatible, and to match the styling of the Bridgehouse Museum's parent organization, Friends of the Chicago River
        - Updating the layout of the exhibits page to inclue card displays for each topic, and a search bar so users can search for a specific topic, as well as filter tabs so users may filter the cards to a specific broader topic such as hitory, nature, etc. - Users can then click on the desired topic to be directed to a page where they can read more 
        - Adding a new feature - using the Google Maps API to include an interactive map of the river where users can see pinpointed locations where historical events occured plotted on a map, and can select those pinpoints to learn more. My hope is this additional feature can act as a guide for users to use outside the musem along the river and riverwalk, encouraging people to see the locations where history happened, and connect historical events to present day locations. 

# Dependencies 
frontend: 
    - react
    - react-dom 
    - react-router-dom - to install, cd to frontend and run the following cmmand "npm i react-router-dom"
    - dotenv (to install, cd to front end and run the following command 'npm i dotenv')
    - firebase (to install, cd to front end and run the following command 'npm i firebase')
        The dummy admin is admin@admin.com (Bridges123!)


Backend: 
    - express - (to install cd to backend and run 'npm i express' in the terminal)
    - cors - (to install cd to backend and run 'npm i cors' in the terminal)
    - mongoose - (to install cd to backend and run 'npm i mongoose' in the terminal)
    - dotenv - (to install cd to backend and run 'npm i dotenv' in the terminal)

# How to Use 

# useful links 
     - my repo of class notes on how to setup a fullstack MERN application 
     - mongose db documentation - https://mongoosejs.com/ 
     - Reqbin - what I used to test all my routes - https://reqbin.com/ 
     - helpful tutorial refresher on forms in react - https://www.freecodecamp.org/news/how-to-build-forms-in-react/ 
     - google maps API react app walkthrough - https://developers.google.com/codelabs/maps-platform/maps-platform-101-react-js#0 
     - react-google-maps documentation - https://visgl.github.io/react-google-maps/ 
     - google maps cluster marking library - https://developers.google.com/maps/documentation/javascript/marker-clustering 

# acknowledgements 

---------- capstone assignment notes: ------------

link to capstone rubric: https://www.canva.com/design/DAFwIc109T8/gdYUdmzp7e12XU1jlff30w/edit

# Introduction
This document will remind you of the requirements of the course Capstone Project (CP), and give you final tasks to work towards for its completion.

Capstone Objective - Create a full-stack web application using MongoDB, Express, React, and Node (MERN).

# Submission
When your project is finally complete, submit the link to your completed assessment using the Start Assignment button on the assignment page in Canvas.

Your submission should include:
A GitHub link to the repository for your completed project.

You will also be given the opportunity to present your project to guests, instructors, and/or a Talent Advocate Manager (not the class) upon completion. Lean into this opportunity to become accustomed with speaking about your work, both from a technical and non-technical perspective.
Your presentation should include:
- A demonstration of the application.
- An overview of the challenges you endured, and how you handled them.
- A short question-and-answer period.

# Requirements 

Your project folder should be named as follows, for submission:
LastName_FirstName_ProjectName_Capstone

- (20%) Project Structure, Standardization, and Convention
    - x Project is organized into appropriate files and directories, following best practices (2%) x
    - x Project contains an appropriate level of comments. (2%) x
    - x Project is pushed to GitHub, and contains a README file that documents the project, including an overall description of the project. (5%) x
    - x Standard naming conventions are used throughout the project. (2%) x
    - x Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit). (4%) x 
    - x Level of effort displayed in creativity, presentation, and user experience. (5%) x 

- (12%) Core JavaScript
    - x Demonstrate proper usage of ES6 syntax and tools. (2%) x 
    - x Use functions and classes to adhere to the DRY principle. (2%) x
    - x Use Promises and async/await, where appropriate. (2%) x 
    - x Use Axios or fetch to retrieve data from an API. (2%) x
    - x Use sound programming logic throughout the application. (2%) x
    - x Use appropriate exception handling. (try/catch) (2%) x 

- (9%) Database
    - x Use MongoDB to create a database for your application. (5%) x 
    - x Apply appropriate indexes to your database collections. (2%) x
    - x Create reasonable schemas for your data by following data modeling best practices. (2%) x 
    (if time - build out contact form)

- (19%) Server
    - Create a RESTful API using Node and Express. (7%) (x?)
        * For the purposes of this project, you may forgo the HATEOAS aspect of REST APIs.
    - x Include API routes for all four CRUD operations. (5%) (x)
    - x Utilize the native MongoDB driver or Mongoose to interface with your database. (5%) (x)
    - x Include at least one form of user authentication/authorization within the application. (2%) (x)

- (35%) Front-End Development
    - x Use React to create the application’s front-end. (10%) (x)
    - x Use CSS to style the application. (5%) (x)
    - x Create at least four different views or pages for the application. (5%) (x)
    - x Create some form of navigation that is included across the application’s pages, utilizing React Router for page rendering. (5%) (x)
    - x Use React Hooks or Redux for application state management. (5%) (useState and useEffect - X)
    - x Interface directly with the server and API that you created. (5%) (x)

-  (5%) Presentation 
    - Create a short overview of your application. (1%) - video recording on youtube and/or presentation? 
    - Highlight the use cases of your application. (1%)
    - Highlight the technical functionality of the application, from a high-level perspective (1%)
    - Discuss what you have learned through the development of the application (1%)
    - Discuss additional features that could be added to the application in the future (1%)

The following section is NOT included in the requirements for this project. Completing this section is NOT required. This section will NOT negatively impact your grade if left unfinished.
This section is intended for learners looking to go the extra mile by showcasing additional skills such as project management, and optional technologies like TypeScript.
You must complete ALL other requirements to receive credit for this section; however, this extra credit will not be included if you have already received the maximum 100% grade. The extra credit can only offset points lost elsewhere.

- (5%) Extra Credit 
    - x Adhere to Agile principles and the Scrum framework. Perform stand-up sessions (with an instructor) when possible. (1%) (x)
    - x Successfully track your project using a software similar to Jira. (1%) (used github projects - https://github.com/users/e-clawson/projects/3/views/1)
    - Build your application primarily with TypeScript. (3%)

