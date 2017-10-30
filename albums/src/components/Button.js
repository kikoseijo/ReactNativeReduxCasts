import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = (props) =>
        <TouchableOpacity style={styles.buttonStyle} onPress={props.clicked}>
            <Text style={styles.textStyle}>
                {props.children}
            </Text>
        </TouchableOpacity>
    ;

export default Button;

const styles = StyleSheet.create({
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '900',
        paddingTop: 10,
        paddingBottom: 10,

    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
    },
});
