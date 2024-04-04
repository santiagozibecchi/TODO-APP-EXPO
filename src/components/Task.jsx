import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { globalColors } from "../constants/global.styles";
import { FAB } from "react-native-paper";
import { useState } from "react";

export const Task = ({ task, handleTaskPress }) => {
  const [taskCheck, setIsTaskFinished] = useState({
    isComplete: false,
    isUnfinished: false,
  });

  const checktaskComplete = () => {
    if (!taskCheck.isComplete) {
      setIsTaskFinished((state) => ({
        ...state,
        isComplete: !state.isComplete,
        isUnfinished: false,
      }));
    } else {
      setIsTaskFinished((state) => ({
        ...state,
        isComplete: !state.isComplete,
      }));
    }
  };

  const checktaskFinished = () => {
    if (!taskCheck.isUnfinished) {
      setIsTaskFinished((state) => ({
        ...state,
        isUnfinished: !state.isUnfinished,
        isComplete: false,
      }));
    } else {
      setIsTaskFinished((state) => ({
        ...state,
        isUnfinished: !state.isUnfinished,
        isComplete: false,
      }));
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => handleTaskPress()}
      >
        <View>
          <Text style={styles.text}>{task.title}</Text>
          <View>
            <Text numberOfLines={4} style={styles.textDescription}>
              {task.description}
            </Text>
          </View>
        </View>
        <View></View>
      </TouchableOpacity>

      <View style={styles.checkButton}>
        <FAB
          style={[
            styles.fab,
            taskCheck.isComplete ? styles.completeTask : styles.unDoitTask,
          ]}
          icon="checkmark-circle-outline"
          onPress={checktaskComplete}
        />

        <FAB
          style={[
            styles.fab,
            !taskCheck.isUnfinished ? styles.unDoitTask : styles.uncomplete,
          ]}
          icon="close-circle-outline"
          onPress={checktaskFinished}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",

    width: "95%",
    height: 120,
    alignSelf: "center",
    borderRadius: 15,
    marginVertical: 5,
    backgroundColor: "#1D3557",
  },
  touchable: {
    padding: 15,
    width: "85%",
    borderRadius: 15,
  },
  checkButton: {
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    right: 10,
  },
  text: {
    color: globalColors.white,
    fontWeight: "bold",
  },
  textDescription: {
    color: globalColors.white,
    marginTop: 4,
  },
  fab: {
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: globalColors.white,
    color: globalColors.blue,
  },
  completeTask: {
    backgroundColor: "green",
  },
  uncomplete: {
    backgroundColor: globalColors.red,
  },
  unDoitTask: {
    backgroundColor: globalColors.lightBlueLight,
  },
});
