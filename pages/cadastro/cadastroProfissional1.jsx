import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Button, TouchableOpacity} from 'react-native';
import { Footer } from '../../components/footer';
import { InputP } from '../../components/input';
import Icon from 'react-native-vector-icons/FontAwesome';



export default function CadastroProfissional1( { navigation } ) {
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
        <TouchableOpacity style={styles.button}  onPress = {() => navigation.navigate('CadastroProfissional2')}>
        <Icon name="angle-right" size={40} color="white"/>
      </TouchableOpacity>
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
    height: 80,
    width: 80, // Use '60vw' para largura relativa à tela
    alignSelf: 'center',
    borderRadius: 50,
    backgroundColor: '#001845',
    justifyContent: 'center',
    textAlign:'center',
    paddingLeft: 32
  },
});
