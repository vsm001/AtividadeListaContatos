import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const LembreteInput = (props) => {
    const [nome, setNome] = useState('');

    const [telefone, setTelefone] = useState('');

    const capturarNome = (nome) => {
        setNome(nome);
    }

    const capturarTelefone = (telefone) => {
        setTelefone(telefone);
    }

    return (
    <View style={styles.tela}>
    <TextInput 
      placeholder="Nome..."
      style={styles.form}
      onChangeText={capturarNome}
      value={nome}
    />
    <TextInput 
      placeholder="Telefone..."
      style={styles.form}
      onChangeText={capturarTelefone}
      value={telefone}
    />
    <Button 
      title="+"
      onPress={() => {props.onAdicionarUsuario(nome, telefone)}}
    />
    </View>
    );
}

const styles = StyleSheet.create({
    tela:{
      flexDirection: 'row',
      marginBottom: 6,
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    form: { 
      padding: 2,
      marginBottom: 2,
      borderBottomColor: 'black'
    }
})


export default LembreteInput;