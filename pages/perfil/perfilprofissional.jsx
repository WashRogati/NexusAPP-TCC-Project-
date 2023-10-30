import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Cabeçalho</Text>
      </View>

      <View style={styles.circle}>
        <Image
          source={require('./image/nexus.png')} // Substitua pelo caminho correto da sua imagem
          style={styles.circleImage}
        />
        <Text style={styles.professionalText}>Profissional</Text>
        <Text style={styles.infoText}>Nome completo</Text>
        <Text style={styles.infoText}>email@gmail.com</Text>
        <Text style={styles.infoText}>Mongaguá, SP</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Informações Gerais</Text>
        <Text style={styles.groupTitle}>Instituição de Ensino</Text>
        <Text style={styles.groupText}>Exemplo Faculdade</Text>
        <Text style={styles.groupTitle}>Área de Especialização</Text>
        <Text style={styles.groupText}>Neuropsicopedagogia</Text>
        <Text style={styles.groupTitle}>Grau acadêmico</Text>
        <Text style={styles.groupText}>Pós-Graduação</Text>
        <View style={styles.bio}>
          <ScrollView style={styles.bioText}>
            <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </Text>
          </ScrollView>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Mandar Solicitação</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  circle: {
    alignItems: 'center',
  },
  circleImage: {
    width: 130,
    height: 130,
    borderRadius: 65,
  },
  professionalText: {
    marginTop: 10,
    fontSize: 20,
  },
  infoText: {
    marginTop: 10,
    fontSize: 14,
  },
  card: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 10,
    padding: 20,
  },
  cardTitle: {
    fontSize: 20,
  },
  groupTitle: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
  groupText: {
    fontSize: 14,
  },
  bio: {
    marginTop: 20,
    maxHeight: 300,
  },
  bioText: {
    flex: 1,
  },
  button: {
    width: '100%',
    height: 60,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 12,
  },
  buttonText: {
    color: 'white',
  },
});
