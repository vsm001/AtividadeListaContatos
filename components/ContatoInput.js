import React, { useState } from 'react';
import {View, TextInput, Button, TouchableOpacity, Text} from 'react-native';
import styles from '../style';

const ContatoInput = (props) => {
  const[nome, setNome] = useState ("");
  const[telefone, setTelefone] = useState ("");

  const capturarNome = (textoDigitado) => {
    setNome(textoDigitado)
  }

  const capturarTelefone = (textoDigitado) => {
    setTelefone(textoDigitado)
  }

  return (
    <View style={styles.contatoView}>
        { /*Usuário irá inserir lembretes aqui */}
        <TextInput 
          placeholder="Nome..."
          style={styles.contatoTextInput}
          onChangeText={capturarNome}
          value={nome}
        />
        <TextInput 
          placeholder="Telefone..."
          style={styles.contatoTextInput}
          onChangeText={capturarTelefone}
          value={telefone}
        />
        <TouchableOpacity
          style={styles.datailsButton}
          onPress={() => {props.onAdicionarContato(nome, telefone)}}
        >
          <Text style={styles.detailsButtonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
  );
}

export default ContatoInput;