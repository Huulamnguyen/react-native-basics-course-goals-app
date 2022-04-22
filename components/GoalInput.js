import { Button, View, StyleSheet, TextInput, Modal} from 'react-native';
import { useState } from 'react';

function GoalInput({onAddGoal, visible}){

    const [enteredGoalText, setEnterGoalText] = useState("");
    
    function goalInputHandler(enteredText){
        setEnterGoalText(enteredText);
    };

    function addGoalHandler(){
        onAddGoal(enteredGoalText);
        setEnterGoalText('');
    }

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput 
                style={styles.textInput} 
                placeholder="Your course goal!"
                onChangeText={goalInputHandler}
                value={enteredGoalText} // Reset text input to empty
                />

                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" />
                    </View>
                </View>
                
            </View>
        </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
      },
      textInput: {
        borderWidth: 2,
        borderColor: '#cccccc',
        width: '100%',
        padding: 8,
      },
      buttonContainer: {
          flexDirection: "row",
          marginTop: 16,
      },
      button:{
        width: 100,
        marginHorizontal: 8
      }
})