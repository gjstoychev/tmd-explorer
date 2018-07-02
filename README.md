## Intro
This project was created with [Create React App](https://github.com/facebookincubator/create-react-app) starter kit. It sets up the development environment enabling the latest JavaScript features and uses build tools like Babel and webpack under the hood, but works with zero configuration.


## Getting started

1. Clone or download the project
```
git clone https://github.com/gjstoychev/tmd-explorer.git
```

2. Enter the project directory
```
cd tmd-explorer
```

3. Install the node_modules
```
npm install
```

4. Start the project or run the tests

```
npm start
```

5. Run the tests
```
npm test
```


## Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


#### `npm test`

Launches the test runner in the interactive watch mode.<br>
On Linux or Mac OS there is a max number of system<br>
watchers that eventually need to be increased for larger<br>
projects if Jest is trying to watch too many files. Fix here:
````
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```` 


#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.


## Technical Approach and Libraries Used

* Redux: one State to rule them all

* axios, redux-thunk, redux-axios-middleware: fetch like a boss

* react-router: so you never get lost

* react-bootstrap: who doesn't like responsive Apps?

* enzyme, enzyme-adapter-react-16, redux-mock-store: TTD until the victory

* moment: don't be late

* proptypes: eye on props

* reselect: i just like this one, no matter what


## Folder Structure

The project structure look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    components/
    containers/
    reducers/
    scripts/
    store/ 
    index.css
    index.js
  build/
    index.html
    static/
      js/
      css/
      media/
```


## Build and Deploy

There is an optimized production build compiled in the **/build** folder.

You may serve it with a static server:

```
npm install -g serve
serve -s build
```

Find out more about deployment [here:](http://bit.ly/2vY88Kr)
