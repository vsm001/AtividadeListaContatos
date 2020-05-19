import { ADD_CONTATO, DELETE_CONTATO, EDIT_CONTATO } from "./contatos-actions";
import Contato from "../model/Contato";

const estadoInicial = {
  contatos: []
};

export default (estado = estadoInicial, action) => {
  switch (action.type) {
    case ADD_CONTATO:
      let l = new Contato(new Date().toString(), 
        action.dadosContato.nomeContato,
        action.dadosContato.telContato,
        action.dadosContato.imagemURI
      );
      return {
        contatos: estado.contatos.concat(l)
      }
    
    case DELETE_CONTATO:
      l = estado.contatos.filter(contato => contato.id !== action.idContato);
      return {
        contatos: l
      }

    case EDIT_CONTATO:
      l = new Contato
      (
        action.dadosContato.idContato, 
        action.dadosContato.nomeContato,
        action.dadosContato.telContato,
        action.dadosContato.imagemURI
      );
      let arr = [...estado.contatos];
      let index = arr.findIndex((contato => contato.id === l.id));
      if(index < 0) {
        alert('nao existe esse contato para ser editado por favor tente novamente');
      }
      else { 
        arr[index] = l;
        return {
          contatos: arr
        }
      }


    default:
      return estado;

  }
}