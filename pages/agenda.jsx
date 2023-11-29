import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { useStateContext } from '../context/ProfissionalContext';
import axios from 'axios';

export default function App( { navigation }) {

  const { userLoginState, setUserLoginState } = useStateContext();

  const salvarAgendamento = async (Agendamento) => {
    try {
      const Agendamento = {
        hr_duracao: '2:00',
        dt_consulta: '2023-02-02',
        ds_consulta: 'Testes'
      }
      const response = await axios.post('http://192.168.120.127:8000/salvarAgendamento', Agendamento, {
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

  const onSolicitarAgendamento = () => {
    // Lógica para lidar com o botão "Solicitar Agendamento"
    salvarAgendamento();
    alert('Agendamento solicitado');
  };

  const onSolicitarAlteracao = () => {
    // Lógica para lidar com o botão "Solicitar Alteração"

    alert('Alteração Solicitada');
  };

  return (
    <View style={styles.container}>
      <Agenda
        // Configurações da agenda aqui (consulte a documentação do react-native-calendars)
      />

      <View style={styles.buttonContainer}>
        <Button title="Solicitar Agendamento" onPress={onSolicitarAgendamento} />

        

        <Button title="Solicitar Alteração" onPress={onSolicitarAlteracao} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around', 
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    gap: 30
  },
});
