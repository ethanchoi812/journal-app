import React from 'react';
import AllPosts from './Allposts';
import Editor from './Editor';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Journal App</h1>
      </header>
      <Editor />
      <AllPosts />
    </div>
  );
}

export default App;
