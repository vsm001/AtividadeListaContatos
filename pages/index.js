import React, {useState, useEffect, useRef} from 'react';
import {Text, View, FlatList, Keyboard} from 'react-native';
import styles from '../style';
import ContatoInput from '../components/ContatoInput';
import ContatoItem from '../components/ContatoItem';

const PageIndex = (props) => {

  const {navigation} = props;

  const [contatos, setContatos] = useState([]);

  const [contadorContatos, setContadorContatos] = useState(10);

  const atualizaShowingPageDetail = (key, nome, telefone) => {
    navigation.navigate('TelaDetalhes', {key: key, nome: nome, telefone: telefone, onEditarContato: editarContato});
  }
  

  const adicionarContato = (nome, telefone) => {
    Keyboard.dismiss();
    setContatos (contatos => {
      if(contatos.length >= 0) {
        setContadorContatos((contadorContatos + 2));
      }
      return [
        {
          key: contadorContatos.toString(),
          value: {nome: nome, telefone: telefone}
        }, 
        ...contatos
      ];
    });


  }

  const removerContato = (keyASerRemovida) => {
    setContatos(contatos => {
      return contatos.filter(contato => contato.key !== keyASerRemovida);
    })
  }

  const editarContato = (key, nome, telefone) => {
    let arr = [...contatos];
    let index = arr.findIndex((contato => contato.key === key));
    if(index < 0) {
      alert('nao existe esse contato para ser editado por favor tente novamente');
    }else {
      let objeto = arr[index];

      console.log(objeto);
      

      objeto.value.nome = nome;
      objeto.value.telefone = telefone;
    
      arr[index] = objeto;

      setContatos([...arr]);
    }
  }



 

  return ( 
    <View style={styles.container}>
      <View style={styles.welcome}>
        <Text style={styles.welcomeTitle}>Cadastre um nome e um telefone!</Text>
      </View>
      <ContatoInput 
        onAdicionarContato={adicionarContato}
      />
      <FlatList 
        style={{height: '50%'}}
        data={contatos}
        renderItem={
          contato => (
            <ContatoItem 
              contato={contato.item.value}
              chave={contato.item.key}
              onDelete={removerContato}
              onShowPageDetail={atualizaShowingPageDetail}
            />
          )
        }
      />
    </View>
  );
}



export default PageIndex;