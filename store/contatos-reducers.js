import Contato from "../modelo/Contato";
import {ADD_CONTATO} from "./contatos-actions";

const estadoInicial = {
    contatos: []
};

export default (estado = estadoInicial, action) => {
    switch (action.type){
        case ADD_CONTATO:
            const contato = new Contato(
                new Date().toString(), 
                action.dadosContato.nome,
                action.dadosContato.numero,
                action.dadosContato.imagemURI);
            return {
                contatos: estado.contatos.concat(contato)
            }
        default:
            return estado;
    }
}