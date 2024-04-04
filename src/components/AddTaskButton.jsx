import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";
import { globalColors } from "../constants/global.styles";

export const AddTaskButton = ({ handleOpenModal, title }) => {
  const handleCreateTask = () => {
    const initialTask = {
      id: Math.random().toString(),
      title: "",
      description: "",
      state: false,
      creationTime: "",
      finishTime: "",
      timeLimit: "",
    };

    handleOpenModal({ ...initialTask, title });
  };

  return (
    <FAB
      style={fabStyle.fab}
      icon="pencil-outline"
      onPress={() => handleCreateTask()}
    />
  );
};

const fabStyle = StyleSheet.create({
  fab: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: globalColors.white,
    color: globalColors.blue,
  },
});
