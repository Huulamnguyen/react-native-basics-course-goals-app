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
                <Button 
                title="Add Goal"
                onPress={addGoalHandler}
                />
            </View>
        </Modal>
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