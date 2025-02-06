import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, FlatList,  TouchableOpacity} from "react-native";
import TabBarComponent from "../navigation/TabBarComponent";
import ToDoItem from "./ToDoItemComponent";
import { NavigationContainer } from '@react-navigation/native';
import TopBar from "../navigation/TopBar";
import DATA from "../Data/data";
import datas from "../Data/data";
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';


const ToDoComponent = () => {
   
    const [tasks, setTasks] = useState(DATA)
    
    function deleteTask(id){
        setTasks(tasks.filter(task => task.id !== id))
    }

    const [title, setTitle] = useState('');
    function addTask() {
        if (!title.trim()) return; // Évite d'ajouter des tâches vides
        const newTask = { id: Date.now().toString(), title, completed: false };
        setTasks([...tasks, newTask]);
        setTitle("");
      }
    

    return (
        <View style={styles.container}>
            <Text style={styles.text}>TO-DO LIST</Text>
            <View style={styles.write}>
                <TextInput style={styles.input} value={title} onChangeText={setTitle} placeholder="  What needs to be done? " />
                <TouchableOpacity style={styles.add} onPress={addTask}>
                    <MaterialIcons name="add-circle-outline" size={40} color="green" />
                </TouchableOpacity>
                
            </View> 
      {/* <TabBarComponent /> */}
      <NavigationContainer>
      <TopBar tasks={tasks} setTasks={setTasks}/>
      </NavigationContainer>
      
               {/* <View>
                <FlatList data={tasks} renderItem={({ item }) => <Item title={item.title} task={item} deleteTask={deleteTask}/>} keyExtractor={item => item.id} />
               {tasks.map(task => (
                <ToDoItem key={task.id} task={task} deleteTask={deleteTask}/>
              ))} 
             
            </View>  */}
            </View>   
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E9F4FA',
        marginTop: Constants.statusBarHeight
    },
    text: {
        marginTop: 25,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: '600',
        borderBottomWidth: 0.2,
        
    },
    input: {
        backgroundColor: 'white',
        width: 310,
        borderRadius: 10,
        elevation: 8,
        marginLeft: 16
    },
    write:{
        alignItems: 'center',
        marginTop: 15,
        flexDirection: 'row',
        
        marginBlockEnd: 12
    },
    add:{
        marginRight: 20
    },
    tab: {
        backgroundColor: 'lightgrey',
        width: 380,
        height: 35,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginHorizontal: 6,
        alignItems: 'center',
        paddingEnd: 3,
        paddingStart: 3,
        marginBottom: 8,
    },
    touchtext:{
        backgroundColor: 'white',
        width: 125,
        height: 30,
        borderRadius: 8,
        borderEndWidth: 0.2,
        
    },
   
    tabtext:{
        textAlign: 'center',
        marginTop: 4.5,
        fontWeight: '600',

    },
    texte:{
        textDecorationLine: 'line-through'
    },
    tab_view: {
        marginTop: 10

    }


})

export default ToDoComponent ;