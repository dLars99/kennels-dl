# Kennels
## NSS Book 4 React Project

This is the project for NSS Book 4, covering the principles of React.JS. This will be updated as more features are added.
The project has built upon itself, and now includes four distinct sections: Animals, Employees, Locations, and Owners. The animals and employees are linked datasets, as are the employees and the locations. There is also a simulated login that the user will need to enter to access the full site. Without that login, the user is limited to only the Locations.

In addition to the features requested in the chapters, I have also added the following features:
- Pictures for the displayed animals, employees, and locations. For each section, a default picture will display if there is no picture in the database.
- On the homepage animal spotlight, I implemented code to avoid duplicates, ensuring a different animal is displayed each time the Reload button is pressed
- Chapter 8 shows some example code, but does not implement it. I implemented the function to make sure input data is capitalized.
- As we run this project on JSON-Server in class, if a deleted object links to a dependent object, that dependent object will delete as well. I implemented a warning to the user to remove or reassign all dependent objects when he/she attempts to delete the master object.

The original requiremenets can be viewed in each chapter [here](https://github.com/nashville-software-school/client-side-mastery/tree/master/book-4-the-apprentice).

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
