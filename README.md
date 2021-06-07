# Getting Started with Fliq-payout

This Project simulates an app that allows you send money to someone in multiple currencies.

You can view this project [Here](https://olatade.github.io/).

## Getting started 

run  `npm install` to install dependencies


## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

### `npm run test`

Launches the test runner in the interactive watch mode. Testing is done with jest


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run coverage`

Generates code coverage report

## Limitations (Fixer.io)

The app intends to use Fixer API to generate live conversion rates but currently fixer API shows errors
when request are made on an account with a free subscription plan


**Note: A mock response from fixer.io has been created to enable the app work**



# Tools 
### Form validation
[Formik](https://formik.org/) was used for form validation 


# To do 
- regEx form validation for inputs like fullname, IBAN ans Swift code
- end-to-end testing with cypres
- More Advanced component testing woth jest




