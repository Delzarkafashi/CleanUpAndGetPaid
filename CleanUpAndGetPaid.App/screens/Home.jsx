import React from 'react';
import { View, Text, Button } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to Clean Up and Get Paid!</Text>
      <Button title="Add Item" onPress={() => navigation.navigate('AddItem')} />
      <Button title="View Items" onPress={() => navigation.navigate('ViewItems')} />
    </View>
  );
};

export default Home;
