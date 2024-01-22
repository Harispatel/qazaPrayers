import React from "react";
import { StyleSheet, View } from "react-native";

import { QpModalT } from "../../utility/types/type";
import { COLORS } from "../common/colors";
import Modal from "react-native-modal";
export default function QpModal({
  children,
  containerStyle,
  isModalVisible,
  modalStyles,
  onBackButtonPress,
  onBackdropPress,
  style,
}: QpModalT) {
  const props = {
    containerStyle,
    isModalVisible,
    modalStyles,
    onBackButtonPress,
    onBackdropPress,
    style,
  };

  return (
    <Modal
      animationIn="fadeInUpBig"
      isVisible={isModalVisible}
      contentContainerStyle={containerStyle}
      {...props}
    >
      <View style={[{ ...styles.modalContainer }, modalStyles]}>
        {children}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: COLORS.WHITE,
    alignItems: "center",
    width: "90%",
    borderRadius: 20,
    alignSelf: "center",
    padding: 20,
  },
});
