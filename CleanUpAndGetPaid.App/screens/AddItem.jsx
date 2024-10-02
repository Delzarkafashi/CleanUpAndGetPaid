import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const AddItem = () => {
  return (
    <View>
      <Text>Add a new item</Text>
      <TextInput placeholder="Item Name" />
      <TextInput placeholder="Description" />
      <Button title="Submit" onPress={() => { /* Handle submit logic */ }} />
    </View>
  );
};

export default AddItem;
