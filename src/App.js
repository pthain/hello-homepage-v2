import React from 'react';

// React Components
import Header from './components/Header'
import Content from './components/Content'

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
    </div>
  );
}

export default App;


/*
  Header
    Nav-Header
    Photo-Header
    Name-Header
  Content
    About-Content
      TextComponent
    Project-Content
      Project
      e.g.
        <Project name='Chess'>
        ===
        <div>
          <TextContent>
          <Game> <--- this is the actual game
    Contact-Content
      EmailForm


*/
