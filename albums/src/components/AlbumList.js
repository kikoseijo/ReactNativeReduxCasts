import React, { Component } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import axios from 'axios';

export default class AlbumList extends Component {

    state = {
        albums: [],
    }

    componentWillMount() {
        console.log('componentWillMount in AlbumList');
        axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(res => {
            console.log(res);
            this.setState({
                albums: res.data
            });
        }).catch(error => {
            console.log(error);
        });
    }

    renderAlbums = () => this.state.albums.map((album) =>
        <Text key={album.title}>{album.title}</Text>)


    render() {
        console.log('this.state', this.state);
        return (
            <View style={styles.container}>
                {this.renderAlbums()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
