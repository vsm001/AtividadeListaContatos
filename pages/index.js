import React, {useState, useEffect, useRef} from 'react';
import {Text, View, FlatList, Keyboard} from 'react-native';
import styles from '../style';
import ContatoInput from '../components/ContatoInput';
import ContatoItem from '../components/ContatoItem';

const PageIndex = (props) => {

  const [contatos, setContatos] = useState([]);

  const [contadorContatos, setContadorContatos] = useState(10);
  
  const prevContatos = useRef([]);

  useEffect(() => {
    let newContatos = [...props.onUpdateContatos];
    // console.log('//////////////////////////////////////////////////////////////////////')
    // console.log(newContatos);
    setContatos([...newContatos]);
  },[])
/*useEffect que observa a mudança no estado 
de contato e atribui a useRef de prevContatos */
  useEffect(() => {
    prevContatos.current = [...contatos];
  },[contatos]);

 /*valor de se a pagina de detail deve ser mostrada 
 ou nao é o estado de prevContatos é enviado para classe pai App.js */ 
  const atualizaShowingPageDetail = (valor, key) => {
    props.onShowingPageDetail(valor, key, prevContatos.current);
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
    // console.log (contatos);

  }

  const removerContato = (keyASerRemovida) => {
    setContatos(contatos => {
      return contatos.filter(contato => contato.key !== keyASerRemovida);
    })
  }



 

  return ( 
    <View>
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