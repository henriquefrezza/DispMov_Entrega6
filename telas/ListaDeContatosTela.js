import React from 'react';
import { StyleSheet, Button , FlatList } from 'react-native';
import {useSelector} from 'react-redux';
import ContatoItem from '../componentes/ContatoItem';

const ListaDeContatosTela = (props) => {
  const contatos = useSelector(estado => estado.contatos.contatos);
  return (
    <FlatList
    data={contatos}
    keyExtractor={contato => contato.id}
    renderItem={
      contato => (
        <ContatoItem
          nome={contato.item.nome}
          numero={contato.item.numero}
          imagem={contato.item.imagemURI}
        />
      )
    }
/>
  )
};

ListaDeContatosTela.navigationOptions = dadosNavegacao => {
    return {
        headerTitle: "Lista de Contatos",
        headerRight: () => {
            return(
    <Button
    title="Adicionar Contato"
    onPress={() => dadosNavegacao.navigation.navigate("NovoContato")}
    />
  )
}
}
}

const estilos = StyleSheet.create({

});

export default ListaDeContatosTela;