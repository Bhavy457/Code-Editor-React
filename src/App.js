import React from 'react';
import './App.css'; 
import CodeEditor from './Component/CodeEditor'; 

const App = () => {
  return (
      <div className="App">
          <h1>Simple Code Editor</h1>
          <CodeEditor />
      </div>
  );
};

export default App;