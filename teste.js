import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Footer } from './components/footer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginProfissional from './pages/Login/profissional';
import LoginResponsavel from './pages/Login/responsavel';
import Inicio from './pages';
import CadastroReponsavel from './pages/cadastro/cadastroResponsavel';
import PerfilProfissional from './pages/perfil/perfilprofissional';
import RedefinirSenha from './pages/recuperar/senha';
import NovaSenha from './pages/recuperar/novasSenha';
import Menu  from './pages/menu';
import ListaExercicios from './pages/listaexercicios';
import CadastroProfissional1 from './pages/cadastro/cadastroProfissional1';
import CadastroTEA from './pages/cadastro/cadastroTEA';
import AgendaP from './pages/agenda';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Profissional" component={LoginProfissional}/>
        <Stack.Screen name="Responsável" component={LoginResponsavel} />
        <Stack.Screen name="CadastroResponsavel" component={CadastroReponsavel} />
        <Stack.Screen name="PerfilProfissional" component={PerfilProfissional} />
        <Stack.Screen name="RedefinirSenha" component={RedefinirSenha} />
        <Stack.Screen name="NovaSenha" component={NovaSenha} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="ListaExercicios" component={ListaExercicios} />
        <Stack.Screen name="CadastroProfissional1" component={CadastroProfissional1} />
        <Stack.Screen name="CadastroTEA" component={CadastroTEA} />
        <Stack.Screen name="Agenda" component={AgendaP} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
