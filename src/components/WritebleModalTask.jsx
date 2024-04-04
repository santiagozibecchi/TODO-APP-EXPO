import {
  View,
  Modal,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { globalColors } from "../constants/global.styles";
import { IconButton, MD3Colors } from "react-native-paper";
import { useEffect, useState } from "react";

export const WritebleModalTask = ({
  isModalVisible,
  title: initialTitle,
  description: initialDescription,
  selectedTask: selectedTask,
  // Methods
  onHandleCancelModal,
  onHandleTitle,
  onHandleTextDescription,
  onHandleSaveModal,
  onHandleDeleteTask,
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);

  useEffect(() => {
    setTitle(initialTitle);
    setDescription(initialDescription);
  }, [initialTitle, initialDescription]);

  return (
    <Modal visible={isModalVisible} animationType="fade" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View>
            <View style={styles.headerContainer}>
              <TextInput
                placeholder="Ingrese el título de la tarea..."
                numberOfLines={1}
                onChangeText={(title) => {
                  setTitle(title);
                  onHandleTitle(title);
                }}
                value={title}
              />

              <IconButton
                icon="trash-outline"
                iconColor={MD3Colors.error50}
                size={20}
                onPress={onHandleDeleteTask}
                style={{ marginRight: 0 }}
              />
            </View>

            <View>
              <TextInput
                style={styles.textinputarea}
                multiline={true}
                placeholder="Descripción..."
                numberOfLines={1}
                onChangeText={(desc) => {
                  setDescription(desc);
                  onHandleTextDescription(desc);
                }}
                value={description}
              />
            </View>
          </View>

          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.button}
              onPress={onHandleCancelModal}
            >
              <Text>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                onHandleSaveModal(selectedTask);
              }}
            >
              <Text>Guardar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: globalColors.lightBlueLight,
    borderRadius: 15,
    width: "80%",
    height: "50%",
    justifyContent: "space-between",
    padding: 15,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  button: {
    width: "40%",
    alignItems: "center",
  },
  textinputarea: {
    padding: 5,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
