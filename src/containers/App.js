import React, {Component} from 'react';
import {Navigation}  from '../components/Navigation/Navigation';
import {Signin} from '../components/Signin/Signin';
import {Register} from '../components/Register/Register';
import CardList from '../components/robofriends/CardList';
import {robots} from './robots'; // robots are not default to be exported
import SearchBox from '../components/robofriends/SearchBox';
import Scroll from '../components/robofriends/Scroll';
import ErrorBoundry from '../components/robofriends/ErrorBoundry';

import './App.css';

import { setSearchField } from '../actions'; // returns a object
import { connect } from 'react-redux';


class App extends Component {
  constructor(){
    super();
    this.state = {
      route: 'signin',// static
      isSignedIn: false,
      robots: robots,
    }
    // later on React Router is applied on Routing React
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }
  
  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home'){
      this.setState({isSignedIn: true})
    }
     this.setState({route: route});
  }
    
  render() {
        const { robots } = this.state;
        const {searchField, onsearchChange } = this.props;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
       })
    return (
    <div className="App">
      <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
        { this.state.route === 'home' ? 
          (
            !robots.length ?
            <h1>Loading Please Wait</h1>:
            (
              <div className='tc'>
                    <h1 className='f2'>RoboFriends</h1>
                    <SearchBox onsearchChange={onsearchChange}/>
                    <Scroll>
                       <ErrorBoundry>
                          <CardList robots={filteredRobots}/>
                       </ErrorBoundry>
                    </Scroll>
              </div>
            )
           )
           :
           (
              this.state.route === 'signin'?
              <Signin onRouteChange={this.onRouteChange}/>
              : 
              <Register onRouteChange={this.onRouteChange}/>
            )
        }
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField,
  }
}

const mapDispatchToProps = (dispatch) => {
  // mapDispatchToProps will return an object that contains all of our action
    return {  
      onsearchChange: (event) => dispatch(setSearchField(event.target.value)),
    }
  }


export default connect(mapStateToProps,mapDispatchToProps)(App);
