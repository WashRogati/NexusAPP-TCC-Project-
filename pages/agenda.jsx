import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Agenda } from 'react-native-calendars';

export default function App( { navigation }) {
  const onSolicitarAgendamento = () => {
    // Lógica para lidar com o botão "Solicitar Agendamento"
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
