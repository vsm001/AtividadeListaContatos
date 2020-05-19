import React from 'react';
import {View, TouchableOpacity, Text, Alert, Image} from 'react-native';
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
        onPress: props.onDelete.bind(this, props.contato.id),
      }
    ],
    {cancelable: false}

  );

  // console.log(props.contato.imagemURI);

  return (
    <Cartao estilos={styles.itemNaLista}>
      <TouchableOpacity 
        onLongPress={deleteAlert}
        style={{width: '100%'}}
        onPress={() => props.onShowPageDetail(props.contato.id, props.contato.nome, 
          props.contato.telefone, props.contato.imagemURI)}
      >
        <View style={styles.itemContainer}>
          <View source={styles.listaImagemContainer}>
            <Image 
              style={styles.listaImagem}
              source={{uri: props.contato.imagemURI}}
              resizeMode="cover"
            />
          </View>
          <View>
            <Text style={styles.listaTitle}>{"Nome: " + props.contato.nome}</Text>
            <Text style={styles.listaPhone}>{"Telefone: " + props.contato.telefone}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Cartao>
    
  );
}

export default ContatoItem;