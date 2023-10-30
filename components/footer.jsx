import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>Desenvolvido por BrainFull</Text>
        </View>
    );

}


const styles = StyleSheet.create({
    footer: {
        minWidth: '100%',
        backgroundColor: '#1E1E1E', // Cor de fundo do rodapé
        padding: 10,
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },
    footerText: {
        color: 'white',
    }
})