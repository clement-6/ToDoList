import React from "react";
import { StyleSheet,View, Text, TouchableOpacity} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Checkbox from 'expo-checkbox';



const ToDoItem = ({ task, deleteTask, setTasks }) => {

    function toggleTask(id) {
        setTasks((tasks) => tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
      }
  
    return (
      <View style={styles.item}>
      <Checkbox value={task.completed} onValueChange={() => toggleTask(task.id)}/>
      <Text style={[styles.title, { textDecorationLine: task.completed ? 'line-through' : 'none' }]}>{task.title}</Text>
      <TouchableOpacity onPress={() => deleteTask(task.id)}>
          <MaterialIcons name="delete" size={20} color="red" />
      </TouchableOpacity>
  </View>
    );
  };

const styles=StyleSheet.create({
    item: {
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        
      },
      title:{
        textAlign: 'right'
    },

})






export default ToDoItem;