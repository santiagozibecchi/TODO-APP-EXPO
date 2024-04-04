import { FlatList, StyleSheet, View } from "react-native";

import { Task } from "./Task";
import { globalColors } from "../constants/global.styles";

export const TaskList = ({ handleOpenModal, taskList }) => {
  const handleTaskPress = (task) => {
    handleOpenModal(task);
  };

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={taskList}
        renderItem={({ item }) => (
          <Task task={item} handleTaskPress={() => handleTaskPress(item)} />
        )}
        keyExtractor={(item) => item.id}
        style={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: globalColors.lightBlueHard,
    borderRadius: 15,
  },
  flatList: {
    marginTop: 5,
  },
});
