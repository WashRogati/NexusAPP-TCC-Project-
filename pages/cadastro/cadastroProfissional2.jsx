import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Button, TouchableOpacity } from 'react-native';
import { Footer } from '../../components/footer';
import { InputP } from '../../components/input';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useStateContext } from '../../context/ProfissionalContext';
import axios from 'axios';


const salvarProfissional = async (sharedState) => {

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
      sg_uf: 'SP',
      nm_cidade: sharedState.cidade,

      nr_cpf: sharedState.cpf,
      nr_rg: sharedState.rg,
      sg_genero: 'M',
      nr_registro_profissional: sharedState.registro,
      nm_formacao_academica: sharedState.formacao,
      nm_instituicao_ensino: sharedState.faculdade,
      dt_conclusao: sharedState.conclusao,
      ds_experiencia: sharedState.descricao
    };
    console.log('profissional: ', profissional)
    const response = await axios.post('http://192.168.120.127:8000/salvarprofissional', profissional);
    console.log("deu certo");
    console.log('response: ', response);
  } catch (e) {
    console.error('error: ', e.message);
  }
}


export default function CadastroProfissional2({ navigation }) {

  const { sharedState, setSharedState } = useStateContext();

  const [formData, setFormData] = useState({
    cpf: '',
    rg: '',
    genero: '',
    formacao: '',
    faculdade: '',
    conclusao: '',
    descricao: '',
    registro: ''
  })

  const handleSubmit = () => {
    setSharedState({ ...sharedState, ...formData })
    try {
      salvarProfissional(sharedState);
    } catch (e) { console.error('salvar erro: ', e.message) }
    navigation.navigate('Profissional')
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
        <Text style={styles.title}>Dados Profissionais</Text>
        <InputP placeholder="CPF" onChangeText={(value) => handleChange('cpf', value)} value={formData.cpf} />
        <InputP placeholder="RG" onChangeText={(value) => handleChange('rg', value)} value={formData.rg} />
        <InputP placeholder="Código CBO" onChangeText={(value) => handleChange('registro', value)} value={formData.registro} />
        <InputP placeholder="Área de Especialização" onChangeText={(value) => handleChange('formacao', value)} value={formData.formacao} />
        <InputP placeholder="Instituição de Ensino" onChangeText={(value) => handleChange('faculdade', value)} value={formData.faculdade} />
        <InputP placeholder="Ano de Conclusão" onChangeText={(value) => handleChange('conclusao', value)} value={formData.conclusao} />
        <InputP placeholder="Habilidades " onChangeText={(value) => handleChange('descricao', value)} value={formData.descricao} />
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
    height: 80,
    width: 80, // Use '60vw' para largura relativa à tela
    alignSelf: 'center',
    borderRadius: 50,
    backgroundColor: '#001845',
    justifyContent: 'center',
    textAlign: 'center',
    paddingLeft: 32,
    marginBottom: 30,
    backgroundColor: '#001845',
  },
});
