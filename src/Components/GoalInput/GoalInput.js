//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Modal} from 'react-native';

// create a component
const GoalInput = ({AddGaols, show}) => {
  const [enterGoal, setEnterGoal] = useState('');

  const onInputGoalHandler = enterText => {
    setEnterGoal(enterText);
  };

  return (
    <Modal visible={show}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goals"
          style={styles.inputField}
          value={enterGoal}
          onChangeText={onInputGoalHandler}
        />
        <Button title="ADD" onPress={AddGaols.bind(this, enterGoal)} />
      </View>
    </Modal>
  );
};

// define your styles
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    width: '80%',
    borderWidth: 1,
    marginBottom: 10,
  },
});

//make this component available to the app
export default GoalInput;
