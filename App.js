import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function App() {
  const [exerciseData, setExerciseData] = useState({
    title: 'Titulo do Exercício',
    description: 'Carregando descrição...',
    category: 'Carregando categoria...',
  });

  useEffect(() => {
    // Simulando a chamada de um JSON com os dados do exercício
    fetch('URL_DO_SEU_JSON')
      .then((response) => response.json())
      .then((data) => setExerciseData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Header</Text>
      </View>

      <Text style={styles.title}>{exerciseData.title}</Text>

      <Image
        source={require('./image/exercicio.jpeg')}
        style={styles.image}
      />

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Descrição:</Text>
        <Text style={styles.cardText}>{exerciseData.description}</Text>
        <Text style={styles.cardTitle}>Categoria:</Text>
        <Text style={styles.cardText}>{exerciseData.category}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  header: {
    height: 60,
    width: '100%',
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    marginTop: 10,
  },
  image: {
    width: '90%',
    height: 200,
    marginTop: 10,
  },
  card: {
    width: '90%',
    backgroundColor: 'white',
    marginTop: 10,
    padding: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardText: {
    fontSize: 14,
  },
});
