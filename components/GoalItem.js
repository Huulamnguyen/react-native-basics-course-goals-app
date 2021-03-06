import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem({text, id, onDeleteItem}){

    return (
        <View style={styles.goalItem}>
          <Pressable 
            android_ripple={{color: '#210644'}} 
            onPress={onDeleteItem.bind(this, id)}
            style={({pressed}) => pressed && styles.pressedItem }>
            
            <Text value={id} style={styles.goalItemText}>{text}</Text>
          </Pressable>
        </View>    
    )
}
export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc'
  },
  pressedItem: {
    opacity: 0.5,
  },  
  goalItemText: {
    color: '#ffffff',
    padding: 8,
  }
})