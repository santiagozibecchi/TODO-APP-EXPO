import { View, Text, StyleSheet, TextInput } from "react-native";
import { globalColors } from "../constants/global.styles";
import { AddTaskButton } from "./AddTaskButton";

// CreationTask should be a better name
export const WritableTask = ({
  title,

  // Methods
  onHandleTitle,
  handleOpenModal,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.writableContainer}>
        <View>
          <View>
            <Text style={styles.text}>Crear nueva tarea</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Ingrese el título de la tarea..."
              onChangeText={(title) => {
                // setTitle(title);
                onHandleTitle(title);
              }}
              value={title}
            />
          </View>
        </View>
        <View>
          <AddTaskButton handleOpenModal={handleOpenModal} title={title} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: globalColors.lightBlueHard,
    borderRadius: 15,
    height: 90,
  },
  writableContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputContainer: {},
  text: {
    color: globalColors.white,
  },
  textInput: {
    height: 45,
    color: globalColors.white,
  },
});
