import React, { useState } from "react";
import { Text, View } from "react-native";
import DATA from "../Data/data";
import ToDoItem from "../component/ToDoItemComponent";
import styles from "../Style/styl";


const Page = ({ tasks, setTasks, filter }) => {
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "complete") return task.completed;
    return true; // "all"
  });

  return (
    <View style={styles.page}>
      {filteredTasks.map((task) => (
        <ToDoItem key={task.id} task={task} deleteTask={deleteTask} setTasks={setTasks} />
      ))}
    </View>
  );
};



export default Page;