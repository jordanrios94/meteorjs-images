// Any JS in here is automatically ran for us

// Import the React Library
import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/image_list';

// Create a component
const App = () => (
  <div>
    <ImageList />
  </div>
);

// Render this component to the screen
Meteor.startup(() => {
  ReactDOM.render(<App />, window.document.querySelector('.container'));
});
