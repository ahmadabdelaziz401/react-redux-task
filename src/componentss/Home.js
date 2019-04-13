import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import ConfPage from '../ConfPage';
import {Redirect} from 'react-router';
import reducer from '../reducers/reducer';
import * as actions from "../actions/actions";
import { connect } from "react-redux";
import { Button, notification } from 'antd';
import 'antd/dist/antd.css';


class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      isValid:false,
      toConfPage: false,
      firstNameError:"",
      lastNameError:"",
      ageError:""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);

  }

  handleChange(event){
      const {name, value, type, checked} = event.target
      type==="checkbox" ?
          this.setState({
                  [name] : checked
              }) :
          this.setState({[name]:value})
  }

validate = () =>{
  let firstNameError="";
  let lastNameError="";
  let ageError="";
  let genderError="";
  if(this.props.firstName === "")
  {
    firstNameError = "firstName empty";
  }
  if (this.props.lastName === "") {
    lastNameError = "lastName empty";
  }
  if(this.props.age === ""){
    ageError = "age empty";
  }
  if(this.props.gender === ""){
    genderError = "gender empty";
  }
  if(firstNameError){
    this.setState({firstNameError});
  }
  if(lastNameError){
    this.setState({lastNameError});
  }
  if(ageError){
    this.setState({ageError});
  }
  if(genderError){
    this.setState({genderError});
  }
  if(firstNameError || lastNameError || ageError || genderError){
    return false;
  }
  return true;
}

handleSubmit(event){
  event.preventDefault();
  const isValid=this.validate();
  if(isValid){
    this.openNotification();

    this.props.history.push('/confPage')

  }
}
openNotification = () => {
  console.log("show notification")
  notification.open({
    message: 'Sign Up Successful',
    description: 'Your account has been registered successfully!',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};

  render(){
    return(
      <div>
            <div>
                <h1 style={{ color: 'navy', marginLeft: 550 }}> Welcome</h1>
            </div>

            <form  align="center" onSubmit={(event)=>{this.handleSubmit(event)}}>
                <input
                    type="text"
                    placeholder="First Name"
                    value={this.props.firstName}
                    name="firstName"
                    onChange={e => this.props.handleChangeFirstName(e.target.value)}
                 />
                 <div style={{fontSize: 12, color:"red"}}>{this.state.firstNameError}</div>
                 <br />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={this.props.lastName}
                    name="lastName"
                    onChange={e => this.props.handleChangeLastName(e.target.value)}
                />
                <div style={{fontSize: 12, color:"red"}}>{this.state.lastNameError}</div>
                <br />
                <input
                type="text"
                    placeholder="Age"
                    value={this.props.age}
                    name="age"
                    onChange={e => this.props.handleChangeAge(e.target.value)}
                />
                <div style={{fontSize: 12, color:"red"}}>{this.state.ageError}</div>
                <br />
                <label>Gender:</label>
                <br/>
                <label >
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={this.props.gender==="male"}
                        onChange={e => this.props.handleChangeGender(e.target.value)}
                    />
                    Male
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={this.props.gender==="female"}
                        onChange={e => this.props.handleChangeGender(e.target.value)}
                    />
                    Female
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="other"
                        checked={this.props.gender==="other"}
                        onChange={e => this.props.handleChangeGender(e.target.value)}
                    />
                    Other
                </label>
                <div style={{fontSize: 12, color:"red"}}>{this.state.genderError}</div>
                <br />
                <div>
                  <input
                    type="button"
                    name="signup"
                    value="Sign Up"
                    onClick={(event)=>{this.handleSubmit(event)}}
                  />
                </div>
              </form>
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
    handleChangeFirstName: value => dispatch(actions.onChangeFirstName(value)),
    handleChangeLastName: value => dispatch(actions.onChangeLastName(value)),
    handleChangeAge: value => dispatch(actions.onChangeAge(value)),
    handleChangeGender: value => dispatch(actions.onChangeGender(value))

  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
