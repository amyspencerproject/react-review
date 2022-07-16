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

> return (
>    <p>Silly ASI this is just some JSX</p>
> )

> Use <React.Fragment> to allow multiple elements/children elements in a return

> return (
>    <React.Fragment>
>        <h2>Thing one</h2>
>        <h2>Thing two</h2>
>        <p>All the Things are present!</p>
>    </React.Fragment>
> )

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

### React Routing
There are three things that need to be routed. Inital page is the Store Picker (url is xxx.com/), after a Store is selected then the App component pulls up that store's page (url is xxx.com/store/store-name), and then we need a 404 error page for any other non-existent url (xxx.com/abjklmno). React does not come with a built in router so you need to add an external component to handle this. React Router and Next.js are two popular add ins. In this project React Router is used.

The Router component has to be mounted to the DOM so it is imported into the index.js component. It becomes the only time we touch the DOM in this project. This component has some specific structure with BrowserRouter > Switch > Route.

The form/event handler in the StorePicker component grabs and stores the user selected store name. Uisng this.props.history.push(`${}`) this data is push back to the parent component Router and the url is changed with out doing a page refresh.

### Event Handlers
Just a reminder that in React events are handled in-line in the JSX. So a button in the return would be <button onClick="this.handleClick"> and then there is a secondary method in the component called handleClick() { alert('Hey!!')}. You do not want to put the () on the end of this.handleClick because it will run automatically on page load.

Forms will have onSubmit event handlers. The default is to refresh the page after a submit event. This is often no what you want and especially for the store-picker form in this project where the store names are generated in JS not form a server. You must add event.preventDefault() in the event handler function with event as the argument, see StorePicker compnent for example.

Accessing _this_ from a custom method is not so easy. This is due to binding or lack of binding to the React.Component. For a default method like render() you can use _this_ to console.log values from a component. But you cannot do this with the goToStore function that is handling the form being submitted/input text. You do not want to directly touch the DOM so you do a crazy thing with ref and sometimes using constructors with a super() funtion inside. Or you can do what was done in this project; add ref={this.myInput} to form, define myInput as a variable that equals React.createRef(), make event handler function and arrow function, and then really skull down on the exact path in the component object where the input text lives.

