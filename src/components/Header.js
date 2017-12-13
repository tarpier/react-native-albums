// @flow
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = props => (
  <View style={styles.headerContainer}>
    <Text style={styles.header}>{props.headerText}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
  },
  headerContainer: {
    height: 60,
    paddingTop: 15,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
});

export default Header;
