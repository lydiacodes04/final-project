# final-project
This is the final project for Triple Ten SE Bootcamp

# React + Vite

* Background: This web app is created by Lydia Lockhart as the final project for the Triple Ten Software Engineering Bootcamp. Though we have learned fullstack web development, the project as it stands right now is frontend only.

* Purpose: This website is designed to help youth search for resources near them. To use, simply enter the zipcode in which you would like to find resources. The app makes a request from Career OneStop API and displays results from that database.

* API being used: https://api.careeronestop.org/v1/youthprogramfinder/{userId}?enableMetaData=true

* Features:
    ** React app created using Vite
    ** JSS Markup
    ** CSS animation of spinning wheel for loading
    ** CSS hover effects 
    ** BEM naming conventions
    ** Flexbox utilization
  

* Link to deployed site on Github Pages: https://lydiacodes04.github.io/final-project/

* Ideas for future improvements: 
Since this is a frontend only application, I would like to make the site more robust by connecting to a different API and creating a backend. To fully build out this website, I would like to connect with a more robust API such as SACRD which has resources relevant to the community I serve in San Antonio, TX. If the full backend were built out, I would allow users to sign up to create their own page of saved resources. They would be able to login, save their favorite resources to their page, and then log out. 

New features:
1. When the user enters a keyword or zipcode in the search bar (ie "housing" or "college advising"), the website will send a request to the [API service options below] and find all the relevant resources.
2. Cards will contain a short description of services provided, contact information, and the links to the org's webpages. 
3. Organizational users will create profiles to share resources, and youth will create profiles to save resources. A youth's profile page will display all resources a user saves on a separate page--a protected route--which will be that user's own page.
4. Data presentation: ideally I would like for data to be presented not only in cards but also on a map with markers.

