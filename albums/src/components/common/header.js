import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => (
    <View style={styles.container}>
        <Text style={styles.Text}>{props.title}</Text>
    </View>
);

export { Header };

const styles = StyleSheet.create({
    container: {
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
        backgroundColor: '#F8F8F8',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0.2 },
        shadowOpacity: 0.2,
    },
    Text: {
        color: '#808080',
        fontSize: 20,
    },
});
