import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css'
import './App.css';
import Main from './components/main';

import { BrowserRouter} from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }

  
  }

  render() {
    return (
      <BrowserRouter>
        <Main/>
      </BrowserRouter>
      
    );
  }
}

export default App;
