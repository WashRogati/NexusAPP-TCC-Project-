import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, TextInput, Image, FlatList, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';







const data = [
    { id: '1', text: 'Práticas Esportivas', image: require('../image/exercicio.jpeg') },
    { id: '2', text: 'Natação', image: require('../image/exercicio2.jpeg') },
    { id: '3', text: 'Exercício com Obstaculos ', image: require('../image/exercicio3.jpeg') },
    { id: '4', text: 'Exercício com Obstaculos', image: require('../image/exercicio4.jpeg') },
    { id: '5', text: 'Apresentação ao espaço', image: require('../image/exercicio5.jpeg') },
    { id: '6', text: 'Dicas de Exercícios', image: require('../image/exercicio6.jpeg') },
    { id: '7', text: 'Exercícios em Turma', image: require('../image/exercicio7.jpeg') },
    { id: '8', text: 'Ginástica ', image: require('../image/exercicio8.jpeg') },
    { id: '9', text: 'Ginástica Laboral', image: require('../image/exercicio9.jpeg') },
    { id: '10', text: 'Exercício Físico', image: require('../image/exercicio10.jpeg') },
];

export default function PesquisarProfissional({ navigation }) {
    const [useDados, setUseDados] = useState([]);

    const listarProfissionais = async () => {
        try {
            const profissionais = await axios.get('http://10.0.0.173:8000/listarProfissionais',);

            console.log('profissionais: ', profissionais.data.data);

            setUseDados(profissionais.data.data);


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

    const handleSubmit = async () => {
        await listarProfissionais();
    }

    return (
        <View style={styles.container}>

  {/*           <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Pesquisar"
                />
                <Icon name="search" size={20} color="black" />
            </View> */}

            <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
                <Text style={styles.loginButtonText}>Listar</Text>
            </TouchableOpacity>
            {useDados.map((i, index) => {

                return (
                    <Card key={index} style={styles.perfilprofissional}>
                        <Image source={data.image} style={styles.cardImage} />
                        <Text> Nome: {i.nm_profissional} </Text>
                        <Text> Especialização: { i.nm_formacao_academica }  </Text>
                        <Text> E-Mail: {i.nm_email} </Text>
                        <Text> Contato: {i.nr_telefone} </Text>

                    </Card>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    header: {
        height: 60,
        width: '100%',
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    searchContainer: {
        width: '90%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 12
    },
    searchInput: {
        flex: 1,
        height: 50,
        paddingLeft: 10,
    },
    searchIcon: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    cardList: {
        marginTop: 10,
    },
    perfilprofissional: {

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
    }
});
