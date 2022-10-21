## PROJECT OVERVIEW

This is a coding assessment project for a frontend engineer role at Lendsqr. The project entails building four responsive screens from the provided Figma link (https://www.figma.com/file/ZKILoCoIoy1IESdBpq3GNC/FrontendTesting?node-id=5530%3A0 ). 

## PROJECT TASKS

As specified in the assessment documentation, the project tasks includes:
1. Build the 4 pages : Login, Dashboard, User page, User details page.
2. The user pages should pull data from a mock api with 500 records.
3. Use local storage or indexedDB to store and retrieve user details on the user details page.
4. The page must be mobile responsive.

## TECH STACK

The required tech stack for this project is:
- React with TypeScript
- SCSS
This project uses React material ui as a css library.

## DETAILS

1. Login screen (/login) - Fully responsive but not functional as no login API was provided.
2. Dashboard (/users) - Renders the application dashboard which by default displays the table of users fetched from the provided API ( https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users).
This screen also satisfies the filter action and view/change status functionalities specified in the figma 'Users - showing filters' page. 
3. UserDetails (/users/:id) -  Displays Details of a specific user provided in the param section of the url.
4. Button functionalities to Blacklist and Activate user are implemented, and reflect on the user status in users table (/users)
5. Users data is persisted on local storage.

## DEPLOYMENT
The deployed application is available on https://ayaefu-luke-lendsqr-fe-test.herokuapp.com/