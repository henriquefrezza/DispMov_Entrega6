export const ADD_CONTATO = 'ADD_CONTATO';

export const addContato = (nome, numero, imagemURI) => {
    return {
        type: ADD_CONTATO, dadosContato: {nome: nome, numero: numero, imagemURI: imagemURI}
    }
} 