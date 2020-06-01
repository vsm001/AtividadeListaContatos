import React from 'react';
import {View, TouchableOpacity, Text, Alert} from 'react-native';
import Cartao from './Cartao'
import styles from '../style';

const ContatoItem = (props) => {
  

  const deleteAlert = () => Alert.alert(
    "Excluir Contato",
    "Você deseja realmente excluir este contato?",
    [
      {
        text: 'Não',
        style: 'cancel'
      },
      {
        text: 'Sim',
        onPress: props.onDelete.bind(this, props.chave),
      }
    ],
    {cancelable: false}

  );

  return (
    <Cartao estilos={styles.itemNaLista}>
      <TouchableOpacity 
        onLongPress={deleteAlert}
        style={{width: '100%'}}
        onPress={() => props.onShowPageDetail(props.chave, props.contato.nome, 
          props.contato.telefone)}
      >
        <View>
          <Text style={styles.listaTitle}>{"Nome: " + props.contato.nome}</Text>
          <Text style={styles.listaPhone}>{"Telefone: " + props.contato.telefone}</Text>
        </View>
      </TouchableOpacity>
    </Cartao>
    
  );
}

export default ContatoItem;