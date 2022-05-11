import React from 'react';

class Fieldset extends React.Component {
  state = {
  nome: '',
  }
  
  handleData = (event) => {
    const { target: value, name } = event;
    this.setState()
  }


  render() {
    return (
      <div>
      <label>Nome</label>
      <input type='text' name='nome' onChange={this.handleData} required maxLength={40}></input>
      </div>
    );
  }
}

export default Fieldset;
