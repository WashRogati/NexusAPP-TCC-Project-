import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Button, TouchableOpacity } from 'react-native';
import { Footer } from '../../components/footer';
import { InputP } from '../../components/input';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { useStateContext } from '../../context/ProfissionalContext';



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
    }}
    catch(e){
      console.log('erro: ' , e.message)

    }
  }

export default function CadastroResponsavel({ navigation }) {
  const { sharedState, setSharedState } = useStateContext();

  const [nome, setNome] = useState('');

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    celular: '',
    dataNascimento: '',
    cep: '',
    cidade:'',
    bairro: '',
    rua: '',
    numeroCasa: ''
  })

  const handleSubmit = () => {
    setSharedState({ ...sharedState, ...formData })
    /* salvarProfissional(nome) */
    navigation.navigate('LoginResponsavel')
  }

  const handleChange = (key, value) => {
    setFormData(prevState => ({
      ...prevState,
      [key]: value
    }))
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={-50}
      style={styles.container}
    >
      <ScrollView>
        <Text style={styles.title}>Dados Pessoais</Text>
        <InputP placeholder="Nome completo" onChangeText={(value) => handleChange('nome', value)} value={formData.nome} />
        <InputP placeholder="Email" onChangeText={(value) => handleChange('email', value)} value={formData.email} />
        <InputP placeholder="Senha" onChangeText={(value) => handleChange('senha', value)} value={formData.senha}/>
        <InputP placeholder="Confirmar Senha" />
        <InputP placeholder="Celular" onChangeText={(value) => handleChange('celular', value)} value={formData.celular} />
        <InputP placeholder="DD/MM/AA" onChangeText={(value) => handleChange('dataNascimento', value)} value={formData.dataNascimento} />
        <InputP placeholder="Cep" onChangeText={(value) => handleChange('cep', value)} value={formData.cep} />
        <InputP placeholder="Cidade" onChangeText={(value) => handleChange('cidade', value)} value={formData.cidade} />
        <InputP placeholder="Bairro" onChangeText={(value) => handleChange('bairro', value)} value={formData.bairro} />
        <InputP placeholder="Rua" onChangeText={(value) => handleChange('rua', value)} value={formData.rua} />
        <InputP placeholder="Nº" onChangeText={(value) => handleChange('numeroCasa', value)} value={formData.numeroCasa} />
        <View style={styles.checkboxContainer}>
          <View
            style={styles.checkbox}
          />
          <Text style={styles.checkboxText}>Aceitar termos e condições</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Icon name="angle-right" size={40} color="white" />
        </TouchableOpacity>
      </ScrollView>
      <Footer />
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
    textAlign: 'center',
    paddingLeft: 32
  },
});
