import React, { Component } from 'react';
import { ScrollView, StyleSheet, } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

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
        <AlbumDetail key={album.title} album={album} />
    )


    render() {
        console.log('this.state', this.state);
        return (
            <ScrollView style={styles.container}>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
