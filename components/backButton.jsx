import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export const BackButton = () => {
    return (
        <TouchableOpacity style={styles.backButton}>
            <Icon name="ios-arrow-back" size={30} color="#000" />
        </TouchableOpacity>
    );

}


const styles = StyleSheet.create({
    backButton: {
        position: 'absolute',
        top: 30,
        right: 10,
    }
})