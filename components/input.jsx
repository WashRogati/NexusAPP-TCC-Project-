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
    input: {
        width: '100%',
        height: 60,
        marginTop: 20,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 12,
        padding: 10
      }
})
