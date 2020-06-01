import React, { useState } from 'react';
import {TextInput, TouchableOpacity, Text} from 'react-native';
import Cartao from './Cartao'
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

  const handleAdicionarContatos = () => {
    props.onAdicionarContato(nome, telefone);
    setNome("");
    setTelefone("");
  }

  return (
    <Cartao estilos={styles.contatoView}>
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
          onPress={handleAdicionarContatos}
        >
          <Text style={styles.detailsButtonText}>Cadastrar</Text>
        </TouchableOpacity>
    </Cartao>
  );
}

export default ContatoInput;