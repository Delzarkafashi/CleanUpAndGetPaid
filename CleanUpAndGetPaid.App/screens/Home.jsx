import React from 'react';
import { View, Text, Button } from 'react-native';
import Navbar from '../components/Navbar';

const Home = ({ navigation }) => {
  return (
    <View>
      <Navbar />
      <Text>Welcome to Clean Up and Get Paid!</Text>
    </View>
  );
};

export default Home;
