import React, {useState, useEffect, useRef} from 'react';
import {Text, View, FlatList } from 'react-native';
import styles from './style';
import PageIndex from './pages/index';
import PageDetail from './pages/PageDetail'
import Rotas from './navegacao/Rotas'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import contatosReducer from './store/contatos-reducer';

const rootReducer = combineReducers({
  contatos: contatosReducer
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default function App() {


  return (
    <Provider store={store}>
      <Rotas />
    </Provider>
  );
}