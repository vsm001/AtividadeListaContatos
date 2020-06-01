import React, {useState, useEffect, useRef} from 'react';
import {Text, View, FlatList } from 'react-native';
import styles from './style';
import PageIndex from './pages/index';
import PageDetail from './pages/PageDetail'
import Rotas from './navegacao/Rotas'

export default function App() {


  return (
    <Rotas />
  );
}