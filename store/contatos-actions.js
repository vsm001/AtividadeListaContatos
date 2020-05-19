export const ADD_CONTATO = 'ADD_CONTATO';
export const DELETE_CONTATO = 'DELETE_CONTATO';
export const EDIT_CONTATO = 'EDIT_CONTATO';

export const addContato = (nome, telefone, imagemURI) => {
  return {
    type: ADD_CONTATO, 
    dadosContato: 
    {
      nomeContato: nome, 
      telContato: telefone, 
      imagemURI: imagemURI
    }
  }
}
export const deleteContato = (id) => {
  return {
    type: DELETE_CONTATO, 
    idContato: id
  }
}
export const editContato = (id, nome, telefone, imagemURI) => {
  return {
    type: EDIT_CONTATO, 
    dadosContato: {
      idContato: id, 
      nomeContato: nome, 
      telContato: telefone, 
      imagemURI: imagemURI
    }
  }
}