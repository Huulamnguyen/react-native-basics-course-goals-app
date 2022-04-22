import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem({text, id, onDeleteItem}){

    return (
      <Pressable onPress={onDeleteItem.bind(this, id)}>
        <View style={styles.goalItem}>
            <Text value={id} style={styles.goalItemText}>{text}</Text>
        </View>
      </Pressable>
        
    )
}
export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc'
  },
  goalItemText: {
    color: '#ffffff'
  }
})