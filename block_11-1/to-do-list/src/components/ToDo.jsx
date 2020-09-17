import React from 'react';

class ToDo extends React.Component {

  render() {
    const ToDo = () => {
      let tasks = ["Varrer a casa", "Passar pano", "Fazer o almoço", "Ir no banco"];
    
      return (
        <ul>{tasks.map(value => <li>{ value }</li>)}</ul>
      );
    }
    
    return ToDo()
  }
}

export default ToDo;
