import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  Modal,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const Emocoes = ( { navigation } ) => {
  const [cards, setCards] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [detailsModalVisible, setDetailsModalVisible] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newImage, setNewImage] = useState(null);

  const addCard = () => {
    if (newTitle && newImage) {
      setCards([...cards, { title: newTitle, description: newDescription, image: newImage.uri }]);
      setNewTitle('');
      setNewDescription('');
      setNewImage(null);
      setModalVisible(false);
    }
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setNewImage(result);
    }
  };

  return (
    <View style={styles.container}>
                <Image source={require('../image/emocoes.png')} style={styles.topImage} />
    <ScrollView>
      <Button title="Adicionar Card" onPress={() => setModalVisible(true)} />

      <FlatList
        data={cards}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setDetailsModalVisible(true);
              setNewTitle(item.title);
              setNewDescription(item.description);
              setNewImage({ uri: item.image });
            }}
          >
            <View style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.cardImage} />
              <Text style={styles.Title}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      </ScrollView>

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modal}>
          <TextInput style={styles.TextInput} placeholder="Nome da Emoção" value={newTitle} onChangeText={(text) => setNewTitle(text)} />
          <TextInput style={styles.TextInputDesc} multiline={true}
            placeholder="Insira uma Descrição sobre a Emoção"
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

      <Modal visible={detailsModalVisible} animationType="slide">
        <View style={styles.modal}>
          {newImage && <Image source={newImage} style={styles.cardImageModal} />}
          <Text>Nome da Emoção:</Text>
          <Text style={styles.Title}>{newTitle}</Text>
          <Text>Descrição:</Text>
          <Text style={styles.TextInputDesc}>{newDescription}</Text>
          <Button title="Fechar" onPress={() => setDetailsModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  containerScroll: {
    flex: 1,
    gap: 5,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  topImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  TextInput:{
    borderWidth: 1,
    borderColor: 'grey',
    width: 250,
    padding: 5,
    borderRadius: 5
  },
  TextInputDesc:{
    backgroundColor: '#CECECE',
    width: 250,
    height: 150,
    padding: 5,
    borderRadius: 5,
    textAlignVertical: "top",
    textAlign : "left",
  },
  card: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: 150,
    height: 150,
    alignItems: 'center',
    gap: 5
  },
  cardImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  cardImageModal: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    marginLeft: 'auto',
    marginRight: 'auto',
    gap: 5
  },
  imagePickerButton: {
    marginTop: 10,
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
  },
  Title: {
    textTransform: 'uppercase',
    fontWeight: '500'
  },
});

export default Emocoes;
