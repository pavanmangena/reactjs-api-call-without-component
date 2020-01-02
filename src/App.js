import React from 'react';
// import logo from './logo.svg';
import './App.css';
class App extends React.Component   {
  constructor(props)
  {
    super(props);
    this.state={
      countries:[]
    }
  }
  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(result=>result.json())
    .then(result=>
      this.setState({  countries:result   }))
  }
  render()   {
     return   (
      <div>
        <div>
          {this.state.countries.map((keys) => (
            <div>
              <div>
                <h3>{keys.name}</h3>
                <h3>{keys.email}</h3>
                <h3>{keys.username}</h3>
                <br/>
              </div>
            </div>
          ))}
        </div>
      </div>
     );
  }
}
export default App;
