import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Cartao from '../components/Cartao';
import styles from '../style';
import Cores from '../colors/colors';
import Medidas from '../measures/measures';

const PageDetail = (props) => {
  const [editable, setEditable] = useState(false);
  const [nome, setNome] = useState(props.nome);
  const [telefone, setTelefone] = useState(props.telefone);

  const capturarNome = (textoDigitado) => {
    setNome(textoDigitado)
  }

  const capturarTelefone = (textoDigitado) => {
    setTelefone(textoDigitado)
  }

  return (
    <View>
      <View style={estilo.containerBotaoVoltar}>
        <TouchableOpacity 
          style={estilo.touchableVoltar}
          onPress={() => {props.onShowPageDetail(false)}}
        >
          <Text>Voltar</Text>
        </TouchableOpacity>
      </View>
      <View style={estilo.containerCartao}>
        <Cartao estilos={styles.contatoView}>
          <TextInput
            style={styles.contatoTextInput}
            editable={editable}
            value={nome}
            onChangeText={capturarNome}
          />
          <TextInput
            style={styles.contatoTextInput}
            editable={editable}
            value={telefone}
            onChangeText={capturarTelefone}
          />
          <View style={estilo.containerButton}>
            <TouchableOpacity
              style={styles.datailsButton}
              onPress={() => {setEditable(!editable)}}
            >
              <Text>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{...styles.datailsButton, ...estilo.button}}
              onPress={() => {props.onEditarContato(nome, telefone)}}
            >
              <Text>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </Cartao>
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  containerBotaoVoltar: {
    width: '23%',
    marginTop: Medidas.containerMarginT,
  },
  touchableVoltar: {
    borderRadius: Medidas.buttonBorderRadius,
    padding: Medidas.buttonPaddingPrimary,
    paddingLeft: Medidas.buttonPaddingSecondary,
    paddingRight: Medidas.buttonPaddingSecondary,
    backgroundColor: Cores.primary
  },
  containerCartao: {
    height: '70%', 
    justifyContent: 'center',
  },
  containerButton: {
    flexDirection: 'row',
  },
  button: {
    marginLeft: 20,
  }
})


export default PageDetail;