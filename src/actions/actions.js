import { createAction } from "redux-actions";

export const updateFirstName = createAction('SET_FIRSTNAME');
export const updateLastName = createAction('SET_LASTNAME');
export const updateAge = createAction('SET_AGE');
export const updateGender = createAction('SET_GENDER');

export const onChangeFirstName = value => dispatch => {
  dispatch(updateFirstName(value));
};
export const onChangeLastName = value => dispatch => {
  dispatch(updateLastName(value));
};
export const onChangeAge = value => dispatch => {
  dispatch(updateAge(value));
};
export const onChangeGender = value => dispatch => {
  dispatch(updateGender(value));
};
