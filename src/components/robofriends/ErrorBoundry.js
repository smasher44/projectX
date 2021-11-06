import React, {Component} from 'react';
// Note this is an example of Application of Error Handling
class ErrorBoundry extends Component {
   constructor(props){
      super(props);
      this.state = {
         hasError: false
      }
   }
   
    componentDidCatch(error, info){
        this.setState( {hasError:true} )
    }
   
    render(){
        if (this.state.hasError){
            return <h1>Oooops. That is not good</h1>
        }
      return this.props.children
    }
}



export default ErrorBoundry;