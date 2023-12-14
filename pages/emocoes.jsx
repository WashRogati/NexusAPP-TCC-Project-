// Importando os componentes necessários do React Native e react-native-image-picker
import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, Modal, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const Emocoes = ( { navigation } ) => {
  // Estado para armazenar a lista de cards
  const [cards, setCards] = useState([]);

  // Estados para controlar o modal de adição e exibição de detalhes
  const [modalVisible, setModalVisible] = useState(false);
  const [detailsModalVisible, setDetailsModalVisible] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newImage, setNewImage] = useState('');

  // Função para adicionar um novo card à lista
  const addCard = () => {
    if (newTitle && newImage) {
      setCards([...cards, { title: newTitle, description: newDescription, image: newImage }]);
      setNewTitle('');
      setNewDescription('');
      setNewImage('');
      setModalVisible(false);
    }
  };

  // Função para selecionar uma imagem da galeria
  const pickImage = () => {
    ImagePicker.showImagePicker({ title: 'Selecione uma imagem' }, (response) => {
      if (!response.didCancel && !response.error) {
        setNewImage(response.uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      {/* Botão para abrir o modal de adição */}
      <Button title="Adicionar Card" onPress={() => setModalVisible(true)} />

      {/* Lista de cards */}
      {cards.map((card, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            setDetailsModalVisible(true);
            setNewTitle(card.title);
            setNewDescription(card.description);
            setNewImage(card.image);
          }}
        >
          <View style={styles.card}>
            <Image source={{ uri: card.image }} style={styles.cardImage} />
            <Text>{card.title}</Text>
          </View>
        </TouchableOpacity>
      ))}

      {/* Modal de adição */}
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modal}>
          <TextInput
            placeholder="Título"
            value={newTitle}
            onChangeText={(text) => setNewTitle(text)}
          />
          <TextInput
            placeholder="Descrição"
            value={newDescription}
            onChangeText={(text) => setNewDescription(text)}
          />
          <TouchableOpacity onPress={pickImage} style={styles.imagePickerButton}>
            <Text>Selecionar Imagem</Text>
          </TouchableOpacity>
          <Button title="Adicionar" onPress={addCard} />
          <Button title="Cancelar" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>

      {/* Modal de detalhes */}
      <Modal visible={detailsModalVisible} animationType="slide">
        <View style={styles.modal}>
          <Image source={{ uri: newImage }} style={styles.cardImage} />
          <Text>{newTitle}</Text>
          <Text>{newDescription}</Text>
          <Button title="Fechar" onPress={() => setDetailsModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  cardImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePickerButton: {
    marginTop: 10,
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
  },
});

export default Emocoes;
