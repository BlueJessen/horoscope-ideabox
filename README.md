# Please Read Before Starting

## Setup Instructions

- Fork this repository.
- Clone the repository down to your machine.
- CD into the project
- npm install
- npm install cypress --save-dev

Happy Coding!

## Prompt

Today you will be making a horoscope App! We reccommend you time yourself 3 hours for this practice.
Here are some user stories we are looking for this app:

Iteration 1: 
- When a user pulls up the application they should see a form asking for their zodiac sign with a drop down menu of options
- The user should be able to enter their name

Iteration 2: 
- Create an apiCall so when the user submits their zodiac sign results should show replacing the form with zodiac and name
- The user should be able to press a button and return to a new empty form to request another horoscope

Iteration 3: 
- Test that your app follows the above user stories here are some ideas of what your testing suite should test
    - The user can select an option from the drop down menu and have it show in the Input field
    - The user can type their name and have the value be shown in the input field
    - When the user puts in their horoscope the apropriate horoscope is shown for the day. (remember to stub your api call) 


Possible Extensions!

- Add options for today, tomorrow, or yesterday for the horoscope in the form of radio buttons
- User can enter birthday instead of zodiac sign and it should still return the correct zodiac!
- Install Router and make the page change when a horoscope is calculated

*Some icons have been provided in the folder src/zodiac-symbols*

*An App Cypress File has been inserted as a starting point*

## API

Here is the API you can use:
https://aztro.sameerkumar.website
Endpoint : 'https://aztro.sameerkumar.website/?sign=aries&day=today'

example post:

const URL = 'https://aztro.sameerkumar.website/?sign=aries&day=today';
fetch(URL, {
    method: 'POST'
})
.then(response => response.json())
.then(json => {
    const date = json.current_date;
    console.log(date);
});



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run cypress`

Starts cypress for your application.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
