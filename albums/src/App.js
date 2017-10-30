import React, { Component } from 'react';
import { View, StyleSheet, } from 'react-native';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';


export default class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCsji0KmTFu_MYn8mfHyzedT7avpxOmoT0',
            authDomain: 'gmalaga-159415.firebaseapp.com',
            databaseURL: 'https://gmalaga-159415.firebaseio.com',
            projectId: 'gmalaga-159415',
            storageBucket: 'gmalaga-159415.appspot.com',
            messagingSenderId: '591265396226'
          });
    }
    render() {
        return (
            <View style={styles.container}>
                <LoginForm />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
