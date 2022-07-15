# Review of React Project Cactch of the Day

### Top Level Reminders
node.js used to handle all the tooling needed for local dev tooling. Using node.js v16.13.2
Using npm v8.1.2
Using react-scripts to complile javascript for web browser. It handles all the Webpack for the developer but also you can get around it and change a few things in Webpack. Also using create React app which does all the Webpack config for this app and handles the hot update features in local dev. 
 
There are two ways of importing packages and methods 

import React from 'react';
class StorePicker extends React.Component {};

or

import { Component } from 'react';
class StorePicker extends Component {};

Sometimes you only need one specific method from a package and other times you want many methods in a package so you import the whole thing. It doesn't make any difference in the size of your bundler.js file how you do it. Just be consistent.

In the index.html file you can designate a div where the React will go. In this project is is <div id="main">. This is where React will be mounted to the DOM. As a rule you should not directly change/touch anything in the DOM. Mounting is the exception. If you had multiple people working on a project this becomes really important! Don't touch the DOM!

The render method takes two arguments, JSX and the mounting point is how you mount to the DOM.

render( <ReactClass />, document.querySelector('#main'))

### JSX Reminders
Use className not class for styling elements. This is made super easy with Emmet extension in VSC.

Use paranthesis to overcome ASI when returning and remember that return in a keyword not a function so put a space before ()

return (
    <p>Silly ASI this is just some JSX</p>
)

Use <React.Fragment> to allow multiple elements/children elements in a return

return (
    <React.Fragment>
        <h2>Thing one</h2>
        <h2>Thing two</h2>
        <p>All the Things are present!</p>
    </React.Fragment>
)

Anytime { } are used you are tell JSX that you are doing some Javascript stuff. Curly brackets not just for commenting in JSX.

### Adding CSS to React
For integrating React into an existing web app you can just add the CSS styling with <link> in the head of the index.html file or what ever file has the mounting point for React.

Another way is inline CSS or component CSS where only the CSS used for a component is imported into the component. This keeps everything tightly bound and you don't have one big compiled style file. The css is imported directy into the js component. This avoids a big css file that must be compiled.

In this project the style.css is imported into the index.js file and the create-React-App knows deals with css updates for local dev. When this app is deployed then the css will need to be compiled.

### App.js 
Created the App.js file and will consider this to be the mother component that all the other components such as fish, inventory, order, etc will be under.

Reminder to always start components with the imports, exports, class extends React.Component, and render() { return () }. Starting everytime with these basic elemements will save you debugging headaches.

### Header.js
This component is a stateless component in that it only returns some HTML. Therefore it can be simplified to an arrow function/implicit return with no need for extending the class and have a render method inside the class. Because there is no longer a class the props can be passed into the function as an argument and the "this" is unnecessary and can be removed from inside the HTML element.

Made the header tagline "Fresh Seafood Market" dynamic by passing tagline as data into Header component in App.js and then passing it as a prop into Header.js. This was mostly as a teaching example since there is really no reason to not hard code the tagline. 