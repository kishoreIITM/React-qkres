import React, { Component } from 'react';
import Navbar from './nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './footer';
import Content from './content';
import Details from './details';
import { Route, Switch, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Spring } from 'react-spring/renderprops';

class main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
    this.error = this.error.bind(this);

  }
  error(){
    return(
      <div>
        <h2>Oops!! Page not found </h2>
      </div>
    )
  }
  

  render() {
    
    console.log(this.props.location.pathname);
    return (
      <div className="body">
        <Navbar />
        <div className="land animated fadeIn slower d-flex align-items-center">
          <Spring
            from={{ opacity: 0, fontSize: '0%' }}
            to={{ opacity: 1, fontSize: '200%' }}
            config={{ duration: 2000 }}
          >
            {props => (
              <div style={props} className="head d-flex text-center justify-content-center">
                Hi There!!<br></br>
                Welcome to the CHEMICAL section<br></br>
                Check our stocks below
              </div>
            )}
          </Spring>
        </div>
        <div className="list">
          <h2 className="shop text-center">Shop By category</h2>
        <Switch>
            <Route exact path='/' render={()=> <Content/>} />
            <Route exact path='/Oscilloscope' render={() => (<Details type="osc" />)} />
            <Route exact path='/1'  render={() => (<Details type="1" />)} />
            <Route exact path='/2'  render={() => (<Details type="2" />)} />
            <Route exact path='/3'  render={() => (<Details type="3" />)} />
            <Route exact path='/4'  render={() => (<Details type="4" />)} />
            <Route exact path='/5'  render={() => (<Details type="5" />)} />
            <Route exact path='/6'  render={() => (<Details type="6" />)} />
            <Redirect to='/' />
        </Switch>
        </div>
        
        <Footer />
      </div>


    );
  }
}

export default withRouter(main);