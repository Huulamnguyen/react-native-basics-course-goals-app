import { Button, View, StyleSheet, TextInput, Modal, Image} from 'react-native';
import { useState } from 'react';

function GoalInput({onAddGoal, onCancel, visible}){

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
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput 
                style={styles.textInput} 
                placeholder="Your course goal!"
                onChangeText={goalInputHandler}
                value={enteredGoalText} // Reset text input to empty
                />

                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={onCancel} color={'#f31282'} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} color={'#b180f0'} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: '#6A359C',
      },
      image: {
        width: 100,
        height: 100,
        margin: 30
      },
      textInput: {
        borderWidth: 2,
        borderColor: '#e4d0ff',
        borderRadius: 6,
        backgroundColor: '#e4d0ff',
        width: '100%',
        padding: 16,
        color: '#120438'
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