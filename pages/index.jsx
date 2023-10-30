import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Footer } from './components/footer';

const Inicio = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../image/nexus.png')}
        style={styles.logo}
      />
      <Text style={styles.welcomeText}>BEM VINDO</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Profissional</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Responsável</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 0,
    gap: 20,
    backgroundColor: "#ADD7F6"
  },
  logo: {
    width: 150, // Largura da logo em pixels
    height: 150, // Altura da logo em pixels
  },
  welcomeText: {
    fontSize: 15, // Tamanho da fonte para o texto de boas-vindas
  },
  buttonContainer: {
    width: '70%', // Largura dos botões (70% da largura da tela)
    alignItems: 'center',
  },
  button: {
    width: '100%', // Botões ocupam toda a largura do contêiner
    height: 60,    // Altura dos botões em pixels
    backgroundColor: '#001845', // Cor de fundo do botão
    borderRadius: 10, // Borda arredondada
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10, // Espaçamento vertical entre os botões
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  }
})

export default Inicio;
