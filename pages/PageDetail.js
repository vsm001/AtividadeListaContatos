import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation'
import Cartao from '../components/Cartao';
import styles from '../style';
import Cores from '../colors/colors';
import Medidas from '../measures/measures';

const PageDetail = (props) => {
  const {navigation} = props;
  const {params} = props.navigation.state;
  const [editable, setEditable] = useState(false);
  const name = navigation.getParam('nome');
  const tel = navigation.getParam('telefone');
  const chave = navigation.getParam('key');
  const [nome, setNome] = useState(name);
  const [telefone, setTelefone] = useState(tel);

  const capturarNome = (textoDigitado) => {
    setNome(textoDigitado)
  }

  const capturarTelefone = (textoDigitado) => {
    setTelefone(textoDigitado)
  }



  const atualizarContatoOnIndex = () => {
    params.onEditarContato(chave, nome, telefone)
    navigation.navigate('TelaInicial');
  }

  return (
    <View style={styles.container}>
      <View style={estilo.containerBotaoVoltar}>
        <TouchableOpacity 
          style={estilo.touchableVoltar}
          onPress={() => navigation.goBack()}
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
              onPress={atualizarContatoOnIndex}
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