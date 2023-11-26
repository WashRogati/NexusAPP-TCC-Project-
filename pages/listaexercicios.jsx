import React from 'react';
import { View, Text, TextInput, Image, FlatList, StyleSheet } from 'react-native';
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

export default function ListaExercicios() {
    return (
        <View style={styles.container}>

            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Pesquisar"
                />
                <Icon name="search" size={20} color="black" />
            </View>

            <FlatList
                data={data}
                numColumns={2}
                contentContainerStyle={styles.cardList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={item.image} style={styles.cardImage} />
                        <Text style={styles.cardText}>{item.text}</Text>
                    </View>
                )}
            />
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
    card: {
        width: '45%',
        backgroundColor: 'white',
        margin: 5,
        padding: 10,
        alignItems: 'center',
        borderRadius: 12
    },
    cardImage: {
        width: 100,
        height: 100,
    },
    cardText: {
        marginTop: 10,
        fontSize: 16,
    },
});
