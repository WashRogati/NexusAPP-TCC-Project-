import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Button, TouchableOpacity } from 'react-native';
import { Footer } from '../../components/footer';
import { InputP } from '../../components/input';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { useStateContext } from '../../context/ProfissionalContext';



const listarProfissionais = async () => {
  try {
    const profissionais = await axios.get('http://10.0.0.173:8000/minharotaget',);

    console.log('profissionais: ', profissionais.data);

  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log('response.data: ', error.response.data);
      console.log('response.status: ', error.response.status);
      console.log('response.headers: ', error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // error.request is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log('request: ', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
  }
}


export default function CadastroProfissional1({ navigation }) {
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
    console.log('nome: ', nome)
    setSharedState({ ...sharedState, ...formData })
    /* salvarProfissional(nome) */
    navigation.navigate('CadastroProfissional2')
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
