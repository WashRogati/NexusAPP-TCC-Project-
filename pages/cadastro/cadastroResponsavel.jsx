import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Button} from 'react-native';
import { Footer } from '../../components/footer';

export default function App() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={-50}
      style={styles.container}
    >
      <ScrollView>
        <Text style={styles.title}>Cadastre-se</Text>
        <TextInput style={styles.input} placeholder="Nome completo" />
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Senha" />
        <TextInput style={styles.input} placeholder="Confirmar Senha" />
        <TextInput style={styles.input} placeholder="Cep" />
        <TextInput style={styles.input} placeholder="DD/MM/AA" />
        <TextInput style={styles.input} placeholder="Celular" />
        <TextInput style={styles.input} placeholder="Cidade" />
        <TextInput style={styles.input} placeholder="Bairro" />
        <TextInput style={styles.input} placeholder="Rua" />
        <TextInput style={styles.input} placeholder="Nº" />
        <View style={styles.checkboxContainer}>
          <View
          style={styles.checkbox}
          />
          <Text style={styles.checkboxText}>Aceitar termos e condições</Text>
        </View>
        <Button title="CADASTRAR" style={styles.button} />
      </ScrollView>
      <Footer/>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginBottom: 16,
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
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
    height: 80,
    width: '60%', // Use '60vw' para largura relativa à tela
    alignSelf: 'center',
    borderRadius: 12
  },
});
