import React from 'react';
import { Text, View, StyleSheet, Image, Linking } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album;
    return (
        <Card key={title}>
            <CardSection>

                <View style={styles.thumbHolder}>
                    <Image
                        style={styles.thumb}
                        source={{ uri: thumbnail_image }}
                    />
                </View>

                <View style={styles.header}>
                    <Text>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image
                    style={styles.mainImage}
                    source={{ uri: image }}
                />
            </CardSection>

            <CardSection>
                <Button clicked={() => Linking.openURL(url)}>
                    Buy now!
                </Button>
            </CardSection>
        </Card>
    );
};

export default AlbumDetail;

const styles = StyleSheet.create({
    thumb: {
        height: 50,
        width: 50,
    },
    thumbHolder: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 0,
        marginRight: 10,
    },
    mainImage: {
        height: 300,
        width: null,
        flex: 1,
    },
    header: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    }
});
