import React, { useState, useRef } from 'react';
import {TextInput, TouchableOpacity, Text} from 'react-native';
import Cartao from './Cartao'
import styles from '../style';
import TirarFoto from './TirarFoto';

const ContatoInput = (props) => {
  const[nome, setNome] = useState ("");
  const[telefone, setTelefone] = useState ("");
  const [imagemURI, setImagemURI] = useState();

  const fotoRef = useRef(null);

  const capturarNome = (textoDigitado) => {
    setNome(textoDigitado)
  }

  const capturarTelefone = (textoDigitado) => {
    setTelefone(textoDigitado)
  }

  const fotoTirada = imagemURI => {
    setImagemURI(imagemURI);
  }

  const handleAdicionarContatos = () => {
    props.onAdicionarContato(nome, telefone, imagemURI);
    setNome("");
    setTelefone("");
    fotoRef.current.resetImage();
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
        <TirarFoto 
          onFotoTirada={fotoTirada}
          imagemURI={imagemURI}
          ref={fotoRef}
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