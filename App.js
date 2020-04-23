import React, {useState, useEffect, useRef} from 'react';
import {Text, View, FlatList } from 'react-native';
import styles from './style';
import PageIndex from './pages/index';
import PageDetail from './pages/PageDetail'

export default function App() {
  const [contatos, setContatos] = useState([]);
  const [showPageDetail, setShowPageDetail] = useState(false);

  const newContacts = useRef([]);
  const contatoKey = useRef([]);

  useEffect(() => {
    newContacts.current = [...contatos];
  },[contatos]);
  

  /*Valor e prevContatos são recebido da classe index.js 
  prevContatos é setado no estado de contatos */
  const atualizarShowPageDetail = (valor, key, prevContatos) => {
    setContatos([...prevContatos]);
    setShowPageDetail(valor);
    contatoKey.current = key;
  }

  const pageDetail = (valor) => {
    setShowPageDetail(valor);
  }

  const editarContato = (nome, telefone) => {
    let arr = [...contatos];
    let index = arr.findIndex((contato => contato.key === contatoKey.current));
    if(index < 0) {
      alert('nao existe esse contato para ser editado por favor tente novamente');
    }
    let objeto = arr[index];
    

    objeto.value.nome = nome;
    objeto.value.telefone = telefone;
   
    arr[index] = objeto;

    setContatos([...arr]);
    setShowPageDetail(false);
  }

  const localizarContato = (keyDoContato) => {
    let contact = contatos.filter(contato => contato.key === keyDoContato);
    let objeto = contact.pop();
    return objeto;
}
  
  let conteudo = <PageIndex onShowingPageDetail={atualizarShowPageDetail} onUpdateContatos={newContacts.current}/>;

  if(showPageDetail === true) {
    let objeto = localizarContato(contatoKey.current);
    conteudo = <PageDetail nome={objeto.value.nome} telefone={objeto.value.telefone} onShowPageDetail={pageDetail} onEditarContato={editarContato}/>
  }

  return (
    <View style={styles.container}>
      {conteudo}
    </View>
     
  );
}