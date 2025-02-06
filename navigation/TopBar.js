import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styles from '../Style/styl';
import { MaterialIcons } from "@expo/vector-icons";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Text, View } from 'react-native';
import ToDoItem from '../component/ToDoItemComponent';
import Page from '../screen/page1';




const Tab = createMaterialTopTabNavigator()

const TopBar = ({ tasks, setTasks }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: styles.containerStyle,
        tabBarIndicatorStyle: styles.indicator,
        tabBarLabelStyle: styles.label,
  tabBarLabel: ({ focused, color}) => {
          let iconName; let label;

          if (route.name === "All") {
            iconName = focused ? "ballot" : "ballot";
            label = focused ? "All" : "All";
          } else if (route.name === "Active") {
            iconName = focused ? "task" : "task";
            label = focused ? "Active" : "Active";
          } else if (route.name === "Complete") {
            iconName = focused ? "task-alt" : "task-alt";
            label = focused ? "Complete" : "Complete";
          }
          return (
            <View style={styles.tabItem}>
                <MaterialIcons name={iconName} size={20} color={color} />
                <Text style={[styles.label , {color:focused ? "black" : "gray"}]}>{label}</Text>
            </View>

          )
        },
      })}
    >
        <Tab.Screen name="All">
        {() => <Page tasks={tasks} setTasks={setTasks} filter="all" />}
      </Tab.Screen>
      <Tab.Screen name="Active">
        {() => <Page tasks={tasks} setTasks={setTasks} filter="active" />}
      </Tab.Screen>
      <Tab.Screen name="Complete">
        {() => <Page tasks={tasks} setTasks={setTasks} filter="complete" />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};



export default TopBar;