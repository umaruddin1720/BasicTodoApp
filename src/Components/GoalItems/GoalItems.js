//import liraries
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// create a component
const GoalItems = ({title, onDelete, id}) => {
  return (
    <TouchableOpacity style={styles.listView} onPress={onDelete.bind(this, id)}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  listView: {
    backgroundColor: '#ccc',
    marginVertical: 5,
    padding: 10,
  },
});

//make this component available to the app
export default GoalItems;
