import React from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { hideGlobalAlert } from "../store/slices/globalAlertSlice";
import colors from "../styles/colors";

const GlobalAlert = () => {
  const dispatch = useDispatch();
  const { showAlert, alertMessage } = useSelector((state: RootState) => state.globalAlert);

  if (!showAlert) return null;

  return (
    <Modal transparent visible={showAlert} animationType="fade">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>{alertMessage}</Text>
          <TouchableOpacity style={styles.confirmButton} onPress={() => dispatch(hideGlobalAlert())}>
            <Text style={styles.buttonText}>확인</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default GlobalAlert;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    height: 150,
    paddingHorizontal: 50,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "white",
    alignItems: "center",
  },
  modalText: {
    marginTop: 10,
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "500",
  },
  confirmButton: {
    position: "absolute", 
    bottom: 0, 
    left: 0, 
    right: 0, 
    height: 50, 
    backgroundColor: colors.black,
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 10,  
    borderBottomRightRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});