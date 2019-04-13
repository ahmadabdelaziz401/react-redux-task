import React, {Component} from 'react';
import {connect} from 'react-redux';

class WelcomePage extends Component{

  render(){
      return (
          <div>
            <h1>Thank you for registering with us!</h1>
            <hr/>
          <p>Your name: {this.props.firstName} {this.props.lastName}</p>
          <p>Your age: {this.props.age}</p>
          <p>Your gender: {this.props.gender}</p>
          <notification/>
          </div>
      );
    }
  }

  function mapStateToProps(state, props) {
    console.log(state);
    return {
      firstName: state.firstName,
      lastName: state.lastName,
      age: state.age,
      gender: state.gender
      };
  }
  function mapDispatchToProps(dispatch) {
    return {

    };
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(WelcomePage);
