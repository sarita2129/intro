import React , { Component } from 'react';

class HelloUser extends Component {
  render(){
    return(
      <h2>Hello { this.props.name || 'Mystery User'}</h2>
      // <select>
      //   <option value="Groucho">Volvo</option>
      //   <option value="Harpo">Saab</option>
      //   <option value="Chikko">Mercedes</option>
      //   <option value="Zeppo">Audi</option>
      // </select>
    )
  }
}

export default HelloUser;
