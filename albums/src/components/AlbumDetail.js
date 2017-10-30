import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AlbumDetail = (props) => (
    <View style={styles.container}>
        <Text key={props.title}>{props.title}</Text>
    </View>
);

export default AlbumDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
