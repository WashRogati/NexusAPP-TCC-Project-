import React from 'react';
import { View,TextInput, StyleSheet, props } from 'react-native';

export const InputP = (props) => {
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder={props.placeholder}
            />
        </View>
    );

}

const styles = StyleSheet.create({
    button: {
        width: '100%', // Botões ocupam toda a largura do contêiner
        height: 60,    // Altura dos botões em pixels
        backgroundColor: '#001845', // Cor de fundo do botão
        borderRadius: 10, // Borda arredondada
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10, // Espaçamento vertical entre os botões
      },
})
