Setup .npmrc file under users folder for windows users.

        a. visit oneartifactory & login
        https://oneartifactory.verizon.com/artifactory/webapp/#/home

        b. type npm-remote in "Set Me Up" section and click on "npm-remote" from the list that shows up.

        c. Enter your password in the top right-corner in the screen that pops up.

        d. Open ".npmrc" file under your user folde on your local machine. (eg: C:\Users\V533561\.npmrc)

        e. Copy the 3 lines from the basic authentication section on oneartifactory into .npmrc file.

        f. Copy the below 5 lines from oneartifactory into .npmrc file.

        g. Add the first line in the .npmrc file as below:

        registry = https://oneartifactory.verizon.com/artifactory/api/npm/npm-virtual/

        h. Finally your .npmrc file should look like below after copying the auth and registry lines from oneartifactory.

        registry=https://oneartifactory.verizon.com/artifactory/api/npm/npm-virtual/
        _auth = djUzMzU2MTpBUDMxc1FucnZSVVNjckJlS2c3QTFLaWdNYjk=
        email = rajalingam.p@one.verizon.com
        always-auth = true
        @<SCOPE>:registry=https://oneartifactory.verizon.com/artifactory/api/npm/npm-remote/
        //oneartifactory.verizon.com/artifactory/api/npm/npm-remote/:_password=QVAzMXNRbnJ2UlVTY3JCZUtnN0ExS2lnTWI5
        //oneartifactory.verizon.com/artifactory/api/npm/npm-remote/:username=pra6ahf
        //oneartifactory.verizon.com/artifactory/api/npm/npm-remote/:email=rajalingam.p@one.verizon.com
        //oneartifactory.verizon.com/artifactory/api/npm/npm-remote/:always-auth=true

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

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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
