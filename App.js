//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Button} from 'react-native';
import GoalInput from './src/Components/GoalInput/GoalInput';
import GoalItems from './src/Components/GoalItems/GoalItems';

// create a component
const App = () => {
  const [courseGoal, setCourseGoal] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const OnAddGoalHandler = text => {
    setCourseGoal(currentGoal => [
      ...currentGoal,
      {id: Math.random().toString(), value: text},
    ]);
    setShowModal(false);
  };

  const onDeleteHandler = goalId => {
    setCourseGoal(currentGoal => {
      return currentGoal.filter(goal => goal.id !== goalId);
    });
  };
  console.log(courseGoal);
  return (
    <View style={styles.mainContainer}>
      <Button title="ADD Goals" onPress={() => setShowModal(true)} />
      <GoalInput show={showModal} AddGaols={OnAddGoalHandler} />
      <View>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoal}
          renderItem={itemData => {
            return (
              <GoalItems
                id={itemData.item.id}
                onDelete={onDeleteHandler}
                title={itemData.item.value}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  mainContainer: {
    padding: 30,
  },
});

//make this component available to the app
export default App;
