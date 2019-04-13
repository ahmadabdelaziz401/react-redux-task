import { handleActions } from "redux-actions";
import * as actions from "../actions/actions";

let defaultState ={
  firstName:"",
  lastName:"",
  gender:"",
  age:""
}

const reducer = handleActions(
  {
    [actions.updateFirstName]:(state, data) => {
      console.log(data);
      return {
        ...state,
        firstName: data.payload
      }
  },
    [actions.updateLastName]:(state, data) => {
      console.log(data);
      return {
        ...state,
        lastName: data.payload
  }
  },
    [actions.updateAge]:(state, data) => {
      console.log(data);
      return {
        ...state,
        age: data.payload
  }
  },
    [actions.updateGender]:(state, data) => {
      console.log(data);
      return {
        ...state,
        gender: data.payload
      }
    }
  },
  defaultState
);
export default reducer;
