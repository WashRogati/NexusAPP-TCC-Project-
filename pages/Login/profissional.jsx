import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Footer } from '../../components/footer';

export default function LoginProfissional( { navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>NEXUS</Text>
      <Text style={styles.subtitle}>Login Profissional</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
      />

      <TouchableOpacity style={styles.loginButton} onPress = {() => navigation.navigate('Menu')}>
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.bottomLinks} >
        <Text onPress = {() => navigation.navigate('CadastroProfissional1')}>Não possui conta? Cadastre-se</Text>
        <Text onPress = {() => navigation.navigate('RedefinirSenha')} >Esqueceu a senha?</Text>
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
    padding: 10,
    backgroundColor: 'white'
  },
  loginButton: {
    width: '70%',
    height: 60,
    marginTop: 20,
    backgroundColor: '#001845',
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
