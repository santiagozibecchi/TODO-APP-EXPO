import { View, StyleSheet } from "react-native";
import { WritableTask } from "./WritableTask";
import { TaskList } from "./TaskList";
import { WritebleModalTask } from "./WritebleModalTask";
import { useState } from "react";

import storage from "../data/storage.json";

const taskStorage = storage;

export const TaskScreen = () => {
  const [taskList, setTaskList] = useState(taskStorage);
  const [selectedTask, setSelectedTask] = useState({});

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [title, setTitleTask] = useState("");
  const [description, setDescriptionTask] = useState("");

  const handleOpenModal = (task) => {
    setIsModalVisible(true);
    setTitleTask(task.title);
    setDescriptionTask(task.description);

    // tarea seleccionada
    setSelectedTask(task);
  };

  const onHandleCancelModal = () => {
    setIsModalVisible(false);
    setTitleTask("");
    setDescriptionTask("");
  };

  const onHandleSaveModal = () => {
    const updatedTask = { ...selectedTask, title, description };
    const taskIndex = taskList.findIndex(({ id }) => id === selectedTask.id);
    const isTaskCreated = taskIndex !== -1;

    if (isTaskCreated) {
      setTaskList((prevTaskList) => {
        const updatedTaskList = [...prevTaskList];
        updatedTaskList[taskIndex] = updatedTask;
        return updatedTaskList;
      });
    } else {
      setTaskList((prevTaskList) => [...prevTaskList, updatedTask]);
    }

    onHandleCancelModal();
  };

  const onHandleDeleteTask = () => {
    const taskIndex = taskList.findIndex(({ id }) => id === selectedTask.id);
    const isTaskCreated = taskIndex !== -1;

    if (isTaskCreated) {
      let auxTaskList = [...taskList];
      auxTaskList.splice(taskIndex, 1);
      setTaskList(auxTaskList);
    }

    onHandleCancelModal();
  };

  const onHandleTitle = (title) => {
    setTitleTask(title);
  };

  const onHandleTextDescription = (description) => {
    setDescriptionTask(description);
  };

  return (
    <View style={styles.screenContainer}>
      <View style={styles.container}>
        <WritableTask
          title={title}
          selectedTask={selectedTask}
          // Methods
          onHandleSaveModal={onHandleSaveModal}
          onHandleTitle={onHandleTitle}
          handleOpenModal={handleOpenModal}
        />
        <TaskList taskList={taskList} handleOpenModal={handleOpenModal} />
      </View>

      <WritebleModalTask
        isModalVisible={isModalVisible}
        title={title}
        description={description}
        taskList={taskList}
        // Methods
        onHandleCancelModal={onHandleCancelModal}
        onHandleSaveModal={onHandleSaveModal}
        onHandleTitle={onHandleTitle}
        onHandleTextDescription={onHandleTextDescription}
        onHandleDeleteTask={onHandleDeleteTask}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: 20,
    padding: "3%",
    gap: 10,
  },
});
