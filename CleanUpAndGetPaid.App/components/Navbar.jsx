import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Add Item" onPress={() => navigation.navigate('AddItem')} />
      <Button title="View Items" onPress={() => navigation.navigate('ViewItems')} />
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    paddingTop: 5,  // Lägger till 5 i padding från toppen
    backgroundColor: '#9c27b0',
  },
});

export default Navbar;
