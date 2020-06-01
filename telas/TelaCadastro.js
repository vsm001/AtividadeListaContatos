import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Keyboard} from 'react-native';
import UsuarioInput from '../components/LembreteInput';
import UsuarioItem from '../components/LembreteItem';

const TelaCadastro = (props) => {
    const [usuarios, setUsuarios] = useState([]);
    let [contadorUsuarios, setContadorUsuarios] = useState(10);

    const removerLembrete = (keyASerRemovida) => {
        setUsuarios(usuarios =>{
          return usuarios.filter(nome => nome.key !== keyASerRemovida);
        })
    }

    const adicionarNome = (nome,telefone) => {
        setUsuarios (usuarios => {
          console.log (usuarios);
          //setContadorUsuarios(contadorUsuarios + 2);

        if(contadorUsuarios % 2 == 1){
            setContadorUsuarios(contadorUsuarios+1); 
        }else{
            setContadorUsuarios(contadorUsuarios+2); 
        }

          return [{key: contadorUsuarios, vNome: nome, vTelefone: telefone}, ...usuarios];
     });
     Keyboard.dismiss();
    }

    

    return (
        <View style={estilos.tela}>
            <UsuarioInput onAdicionarUsuario={adicionarNome}/>
            <FlatList
            data={usuarios}
            renderItem={
                ({item}) => (
                <UsuarioItem
                    nome={item.vNome}
                    telefone={item.vTelefone}
                    chave={item.key}
                    onDelete={removerLembrete}
                    onSelecionaUsuarioId={props.onSelecionaUsuarioId}
                    onSelecionaUsuarioNome={props.onSelecionaUsuarioNome}
                    onSelecionaUsuarioTelefone={props.onSelecionaUsuarioTelefone}
                    onSelecionaEditarTelaUsuario={props.onEditarTelaUsuario}
                />
                )          
            }
            />
        </View>
    );
}

const estilos = StyleSheet.create({
    tela: {
        padding: 25
    }
})

export default TelaCadastro;