import { useState } from 'react';
import { StyleSheet, View, FlatList, Button} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [modalInvisible, setModalInvisible] = useState(false);

  function startAddGoalHandler(){
    setModalInvisible(true);
  };

  function endAddGoalHandler(){
    setModalInvisible(false);
  };

  function addGoalHandler(enteredGoalText){
    setCourseGoals(currentCourseGoals => 
      [...currentCourseGoals, { text: enteredGoalText, id: Math.random().toString() }]  
    );
    endAddGoalHandler();
  };

  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals => [...currentCourseGoals].filter(goal => goal.id !== id))
  }
  
  return (
    <>
    <StatusBar style="light" />
    <View style={styles.appContainer}>
      <Button title="Add New Goal" onPress={startAddGoalHandler} color="#B589D6" />
      <GoalInput onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} visible={modalInvisible} />
      <View style={styles.goalsContainer}>
        <FlatList 
          data={courseGoals}
          renderItem={(itemData) => <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler} />}
          keyExtractor={(item, index) => item.id}
          alwaysBounceVertical={false}
        />
      </View>
    </View>

    {/* FlexBox Practices
    <View style={styles.flexBoxContainer}>
      <View style={styles.flexBox_1}>
        <Text>1</Text>
      </View>
      <View style={styles.flexBox_2}>
        <Text>2</Text>
      </View>
      <View style={styles.flexBox_3}>
        <Text>3</Text>
      </View>
    </View> */}

    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    paddingTop: 50,
    marginHorizontal: 16
  },
  goalsContainer: {
    flex: 5,
    marginTop: 8
  }

  // flexBoxContainer:{
  //   padding: 20,
  //   flexDirection: 'row',
  //   justifyContent: "space-around",
  //   alignItems: "stretch",
  //   width: '100%',
  //   height: 300,
  // },
  // flexBox_1: {
  //   backgroundColor: 'red',
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // },
  // flexBox_2: {
  //   backgroundColor: 'blue',
  //   flex: 2,
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // },
  // flexBox_3: {
  //   backgroundColor: 'green',
  //   flex: 2,
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // }
});
