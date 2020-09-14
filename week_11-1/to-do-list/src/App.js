import React from 'react';
import './App.css';

const ToDo = () => {
  let tasks = ["Varrer a casa", "Passar pano", "Fazer o almoço", "Ir no banco"];

  return (
    <ul>{ tasks.map(task => <li>{ task }</li>) }</ul>
  );
}

function App() {
  return (
   ToDo()
  );
}

export default App;
