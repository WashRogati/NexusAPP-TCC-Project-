import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Button} from 'react-native';
import { Footer } from '../../components/footer';
import { InputP } from '../../components/input';

export default function CadastroResponsavel4( { navigation } ) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={-50}
      style={styles.container}
    >
      <ScrollView>
        <Text style={styles.title}>Cadastre-se</Text>
        <InputP placeholder="Nome completo" />
        <InputP placeholder="Email" />
        <InputP placeholder="Senha" />
        <InputP placeholder="Confirmar Senha" />
        <InputP placeholder="Cep" />
        <InputP placeholder="DD/MM/AA" />
        <InputP placeholder="Celular" />
        <InputP placeholder="Cidade" />
        <InputP placeholder="Bairro" />
        <InputP placeholder="Rua" />
        <InputP placeholder="Nº" />
        <View style={styles.checkboxContainer}>
          <View
          style={styles.checkbox}
          />
          <Text style={styles.checkboxText}>Aceitar termos e condições</Text>
        </View>
        <Button title="CADASTRAR" style={styles.button}  onPress = {() => navigation.navigate('Responsavel')} />
      </ScrollView>
      <Footer/>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 50
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
    margin: 10
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
    borderRadius: 12,
    backgroundColor: '#001845',
  },
});
