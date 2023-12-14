import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Button, TextInput } from 'react-native';
import { Footer } from '../../components/footer';
import { InputP } from '../../components/input';
import { useStateContext } from '../../context/ProfissionalContext';
import axios from 'axios';

export default function CadastroTEA({ navigation }) {

  const { userLoginState, setUserLoginState } = useStateContext();

  const [formData, setFormData] = useState({
    nome: '',
    dataNascimento: '',
    escola: '',
    hrescola: '',
    grau: '',
  })

  const salvarPortador = async (portadorData) => {
    try {
      const portadorData = {
        nm_portador: formData.nome,
        dt_nascimento : formData.dataNascimento,
        nm_escola : formData.escola,
        hr_escola : formData.hrescola, 
        ds_medicacoes : ' ',
        ds_diagnostico : '',
        ds_historico : formData.grau
      }
      const response = await axios.post('http://192.168.43.213:8000/salvarPortador', portadorData, {
        headers: {
          access_token: userLoginState.access_token
        }
      });
      console.log('response status: ', response.status);
      console.log('response: ', response.data);
      console.log('dados: ', formData.data )
      if (response.status == 200) {
        navigation.navigate('Menu');  
      }
    }
    catch (e) {
      console.error('error: ', e.message);
    }
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
        <Text style={styles.title}>Cadastre-se</Text>
        <InputP placeholder="Nome completo" onChangeText={(value) => handleChange('nome', value)} value={formData.nome} />
        <InputP placeholder="Nascimento: Ano-Mês-Dia" onChangeText={(value) => handleChange('dataNascimento', value)} value={formData.dataNascimento} />
        <InputP placeholder="Horario Escola" onChangeText={(value) => handleChange('hrescola', value)} value={formData.hrescola}/>
        <InputP placeholder="Nome da Escola" onChangeText={(value) => handleChange('escola', value)} value={formData.escola} />
        <InputP placeholder="Horario da terapia" onChangeText={(value) => handleChange('hrterapia', value)} value={formData.hrterapia}/>
        <InputP placeholder="Grau" onChangeText={(value) => handleChange('grau', value)} value={formData.grau} />
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
