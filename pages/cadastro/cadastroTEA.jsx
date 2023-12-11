import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Button, TextInput } from 'react-native';
import { Footer } from '../../components/footer';
import { InputP } from '../../components/input';
import { useStateContext } from '../../context/ProfissionalContext';
import axios from 'axios';

export default function CadastroTEA({ navigation }) {

  const { userLoginState, setUserLoginState } = useStateContext();

  const salvarPortador = async (portadorData) => {
    try {
      const portadorData = {
        nm_portador: 'Joao',
        dt_nascimento : '2020-02-20',
        nm_escola : 'Escola Teste',
        hr_escola : '10:00', 
        ds_medicacoes : 'Medicações teste',
        ds_diagnostico : 'Diagnostico teste',
        ds_historico : 'Historico teste'
      }
      const response = await axios.post('http://192.168.43.213:8000/salvarPortador', portadorData, {
        headers: {
          access_token: userLoginState.access_token
        }
      });
      console.log('response status: ', response.status);
      console.log('response: ', response.data);
      if (response.status == 200) {
        navigation.navigate('Menu');  
      }
    }
    catch (e) {
      console.error('error: ', e.message);
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={-50}
      style={styles.container}
    >
      <ScrollView>
        <Text style={styles.title}>Cadastre-se</Text>
        <InputP placeholder="Nome completo" />
        <InputP placeholder="DD/MM/AA" />
        <InputP placeholder="CPF" />
        <InputP placeholder="Nome da Escola" />
        <InputP placeholder="Horario da terapia" />
        <InputP placeholder="Grau" />
        <View style={styles.checkboxContainer}>
          <View
            style={styles.checkbox}
          />
          <Text style={styles.checkboxText}>Aceitar termos e condições</Text>
        </View>
        <Button title="CADASTRAR" style={styles.button} onPress={salvarPortador}></Button>
      </ScrollView>
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
    height: 70,
    width: '60%', // Use '60vw' para largura relativa à tela
    alignSelf: 'center',
    borderRadius: 12,
    backgroundColor: '#001845',
  },
});
