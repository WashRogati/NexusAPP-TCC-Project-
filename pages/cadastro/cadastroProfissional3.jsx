import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Button, TouchableOpacity} from 'react-native';
import { Footer } from '../../components/footer';
import { InputP } from '../../components/input';
import Icon from 'react-native-vector-icons/FontAwesome';



export default function CadastroProfissional3( { navigation } ) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={-50}
      style={styles.container}
    >
      <ScrollView>
        <Text style={styles.title}>Cadastre-se</Text>
        <InputP style={styles.inputa} placeholder="Número de Registro" />
        <Text style={styles.checkboxText}>Histórico de Trabalho</Text>
        <InputP style={styles.input} placeholder="Nome da Empresa" />
        <InputP style={styles.input} placeholder="Cargo" />
        <InputP style={styles.input} placeholder="Data de Inicio" />
        <InputP style={styles.input} placeholder="Data de Término" />
        <View style={styles.checkboxContainer}>
          <View
          style={styles.checkbox}
          />
          <Text style={styles.checkboxText}>Aceitar termos e condições</Text>
        </View>
        <Button title="CADASTRAR" style={styles.button}  onPress = {() => navigation.navigate('Profissional')} />
      </ScrollView>
      <Footer/>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    margin: 20
  },
  checkbox: {
    width: 20,
    height: 20,
    borderColor: 'black',
    borderStyle: "solid",
    borderWidth: 1
  },
  checkboxText: {
    fontSize: 16,
    marginLeft: 10,
  },
  button: {
    width: '70%',
    height: 60,
    marginTop: 20,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: '#001845',
  },
});
