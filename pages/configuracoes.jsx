import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Footer } from '../components/footer';
import { useStateContext } from '../context/ProfissionalContext';
import { Button, Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';


export const Configuracoes = ({ navigation }) => {

    return (
        <View>
            <Card style={styles.container}>
                 
                <Button style={styles.button}>
                    Modo escuro/Modo Claro
                </Button>
                <Button>
                    SAIR
                </Button>
            </Card>
        </View>
    )
}


const styles = StyleSheet.create({
     container: {
        flex: 1,
     },
     button:{
        margin: 10
     }
})