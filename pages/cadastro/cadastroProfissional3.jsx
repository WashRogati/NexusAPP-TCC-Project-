import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Button, TouchableOpacity} from 'react-native';
import { Footer } from '../../components/footer';
import { InputP } from '../../components/input';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useStateContext } from '../../context/ProfissionalContext';
import axios from 'axios';



const salvarProfissional = async ( sharedState ) => {

  try {
    const profissional = {
      nm_profissional: sharedState.nome,
      nm_email: sharedState.email,
      nm_senha: sharedState.senha,
      nr_telefone: sharedState.celular,
      dt_nascimento: sharedState.dataNascimento,
      nr_cep: sharedState.cep,
      nm_rua: sharedState.rua,
      nm_bairro: sharedState.bairro,
      nm_estado: 'saopaulo',
      nm_cidade: sharedState.cidade,
  
      nr_cpf: sharedState.cpf,
      nr_rg: sharedState.rg,
      id_genero: sharedState.genero,
      nr_registro_profissional: sharedState.registro,
      nm_formacao_academica: sharedState.formacao,
      nm_instituicao_ensino: sharedState.faculdade,
      dt_conclusao: sharedState.conclusao,
      ds_experiencia: sharedState.descricao
    };
    const response = await axios.post('http://10.0.0.173:8000/salvarprofissional', profissional);
    console.log("deu certo");
    console.log('response: ', response);
  } catch (e) {
    console.error('error: ', e.message);
  }
}


export default function CadastroProfissional3( { navigation } ) {

  const {sharedState, setSharedState} = useStateContext();

  const handleSubmit = () => {
    try{
      salvarProfissional(sharedState);
    }catch(e){console.error('salvar erro: ', e.message)}
    navigation.navigate('Profissional')
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={-50}
      style={styles.container}
    >
      <ScrollView>
        <Text style={styles.title}>Dados da empresa</Text>
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
        <Button title="CADASTRAR" style={styles.button}  onPress = {handleSubmit} />
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
