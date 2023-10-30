import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Footer } from '../../components/footer';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Icon name="ios-arrow-back" size={30} color="#000" />
      </TouchableOpacity>
      <Text style={styles.title}>NEXUS</Text>
      <Text style={styles.subtitle}>Login Responsável</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
      />

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.bottomLinks}>
        <Text>Não possui conta? Cadastre-se</Text>
        <Text>Esqueceu a senha?</Text>
      </View>
      <Footer/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 30,
    right: 10,
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  input: {
    width: '70%',
    height: 60,
    marginTop: 20,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 12,
  },
  loginButton: {
    width: '70%',
    height: 60,
    marginTop: 20,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  loginButtonText: {
    color: 'white',
  },
  bottomLinks: {
    alignItems: 'center',
    marginTop: 20,
  },
});
