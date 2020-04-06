import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from '../style';

const ContatoItem = (props) => {
  return (
    <TouchableOpacity 
      onLongPress={props.onDelete.bind(this, props.chave)}
    >
      <View style={styles.itemNaLista}>
        <Text style={styles.listaTitle}>{"Nome: " + props.contato.nome}</Text>
        <Text style={styles.listaPhone}>{"Telefone: " + props.contato.telefone}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default ContatoItem;