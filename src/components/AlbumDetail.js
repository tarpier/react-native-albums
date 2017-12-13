import React from 'react';
import { Text, View, Image, StyleSheet, Linking } from 'react-native';
import PropTypes from 'prop-types';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const {
    title, artist, thumbnail_image, image, url,
  } = album;

  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image style={styles.thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image source={{ uri: image }} style={styles.artwork} />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          <Text style={styles.buttonTextStyle}>Buy {title} on Amazon</Text>
        </Button>
      </CardSection>
    </Card>
  );
};

AlbumDetail.propTypes = {
  album: PropTypes.shape({
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    thumbnail_image: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  artwork: {
    height: 300,
    flex: 1,
    width: null,
  },
  buttonTextStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default AlbumDetail;
