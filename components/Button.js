import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    buttonContainer: {
        borderColor: '#0dbab1',
        borderWidth: 1,
        backgroundColor: '#0dbab1',
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 9,
    },
    buttonText: {
        fontSize: 15,
        color: '#fff',
        lineHeight: 35,
    },
})

const Button = props => <TouchableOpacity
    {...props}
    style={styles.buttonContainer}>
    <Text style={styles.buttonText}>{ props.children }</Text>
</TouchableOpacity>

export default Button