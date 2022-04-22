import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList} from 'react-native';

export default function App() {

  const [enteredGoalText, setEnterGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  
  function goalInputHandler(enteredText){
    setEnterGoalText(enteredText);
  };

  function addGoalHandler(){
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, { text:enteredGoalText, id: Math.random().toString() }]);
  };
  
  return (
    <>
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          />
        <Button 
          title="Add Goal"
          onPress={addGoalHandler}
          />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList 
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalItemText}>{itemData.item.text}</Text>
              </View>
            )
          }}
          keyExtractor={(item, index) => {
            return item.id
          }}
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
    paddingTop: 30,
    marginHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc'
  },
  goalItemText: {
    color: '#ffffff'
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
