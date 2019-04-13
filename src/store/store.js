import {takeEvery, put} from 'redux-saga/effects';

function* createUser(){
  yield put({})
}

function* ageUpAsync(){
  //yield delay(4000);
  yield put({type: 'AGE_UP_ASYNC', value: 1});
}
