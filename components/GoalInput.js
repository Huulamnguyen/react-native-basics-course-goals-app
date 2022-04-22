import { Button, View, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';

function GoalInput({onAddGoal}){

    const [enteredGoalText, setEnterGoalText] = useState("");
    
    function goalInputHandler(enteredText){
        setEnterGoalText(enteredText);
    };

    function addGoalHandler(){
        onAddGoal(enteredGoalText);
        setEnterGoalText('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
            style={styles.textInput} 
            placeholder="Your course goal!"
            onChangeText={goalInputHandler}
            value={enteredGoalText} // Reset text input to empty
            />
            <Button 
            title="Add Goal"
            onPress={addGoalHandler}
            />
      </View>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
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
})