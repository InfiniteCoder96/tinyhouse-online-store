import React, { Component } from 'react';
import {Switch,Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from'./components/Navbar'
import ProductList from'./components/ProductList'
import Details from'./components/Details'
import Cart from'./components/Cart'
import Default from'./components/Default'
import Create from'./components/create.component'
import Edit from'./components/edit.component'
import Index from'./components/index.component'

class App extends Component {
  render() {
    return (
        <React.Fragment>
          <Navbar/>
            <Switch>
                <Route exact path="/" component={ProductList}/>
                <Route path="/details" component={Details}/>
                <Route path="/cart" component={Cart}/>
                <Route exact path='/create' component={ Create } />
                <Route path='/edit/:id' component={ Edit } />
                <Route path='/index' component={ Index } />
                <Route  component={Default }/>
            </Switch>

        </React.Fragment>

    );
  }
}


export default App;
