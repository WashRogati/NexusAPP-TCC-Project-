import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import { BackButton } from '../../components/backButton';
import { MyTheme } from '../../Theme';
import { InputP } from '../../components/button';

export default function NovaSenha( {navigation }) {
  return (
    <View style={MyTheme.container}>
      <Text style={styles.title}>NEXUS</Text>
      <Card style={styles.card}>
        
        <Text style={styles.cardTitle}>NOVA SENHA</Text>

       <TextInput style={styles.input} placeholder="Senha"/>
       <TextInput style={styles.input} placeholder="Confirme a Senha"/>
      </Card>

      <TouchableOpacity
        style={styles.button}
      >
        <Text style={styles.buttonText} onPress={ () => navigation.navigate('Inicio')} >Enviar</Text>
      </TouchableOpacity>

      <Text style={styles.cancelText} onPress={ () => navigation.navigate('Inicio')}>Cancelar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  MyTheme,
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
  },
  title: {
    fontSize: 55,
  },
  card: {
    width: '70%',
    padding: 20,
    marginTop: 20,
  },
  cardTitle: {
    fontSize: 20,
    textAlign: 'center',
  },
  cardText: {
    textAlign: 'center',
    marginTop: 10,
  },
  input: {
    width: '100%',
    height: 60,
    marginTop: 20,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 12,
    padding: 10
  },
  button: {
    width: '70%',
    height: 60,
    backgroundColor: '#001845',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 12,
  },
  buttonText: {
    color: 'white',
  },
  cancelText: {
    marginTop: 20,
    fontSize: 20,
  },
});
