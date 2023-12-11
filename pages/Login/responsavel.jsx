import React , { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Footer } from '../../components/footer';
import { useStateContext } from '../../context/ProfissionalContext';
import axios from 'axios';

export default function LoginResponsavel( {navigation} ) {
  const { userLoginState, setUserLoginState } = useStateContext();

  const [formData, setFormData] = useState({
    email: '',
    senha: ''
  })



  const handleChange = (key, value) => {
    setFormData(prevState => ({
      ...prevState,
      [key]: value
    }))
  }


  const handleSubmit = () => {
    logar(formData);
  }

  const logar = async (credenciais) => {
    try {
      const response = await axios.post('http://192.168.43.213:8000/loginResponsavel', credenciais);
      console.log('response status: ', response.status);
      console.log('response: ', response.data);
      if(response.status == 200){
      setUserLoginState({ logado: true, access_token: response.data.access_token  , tipo: response.data.type});
      navigation.navigate('Menu');
      }
    }
    catch (e) {
      console.error('error: ', e.message);
    }
  }


  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
      </TouchableOpacity>
      <Text style={styles.title}>NEXUS</Text>
      <Text style={styles.subtitle}>Login Responsável</Text>

      <TextInput
        style={styles.input}
        placeholder="Email" onChangeText={(value) => handleChange('email', value)} value={formData.email}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha" onChangeText={(value) => handleChange('senha', value)} value={formData.senha}
      />

      <TouchableOpacity style={styles.loginButton}  onPress = {handleSubmit}>
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.bottomLinks}>
      <Text onPress = {() => navigation.navigate('Cadastro Responsavel')}>Não possui conta? Cadastre-se</Text>
        <Text onPress = {() => navigation.navigate('RedefinirSenha')} >Esqueceu a senha?</Text>
      </View>
      <Footer/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 30,
    right: 10,
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  input: {
    width: '70%',
    height: 60,
    marginTop: 20,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 12,
    padding: 10
  },
  loginButton: {
    width: '70%',
    height: 60,
    marginTop: 20,
    backgroundColor: '#001845',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  loginButtonText: {
    color: 'white',
  },
  bottomLinks: {
    alignItems: 'center',
    marginTop: 20,
  },
});
