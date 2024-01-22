/* eslint-disable prettier/prettier */
import React from "react";
import { StyleSheet } from "react-native";
import { QpButton, QpText } from "./elements";
import styles from "./common/styles";
import { btnTypes } from "./common/constants";

import { DOBManagerT } from "../utility/types/type";
import QpModal from "./elements/QpModal";
import DateTimePicker from "react-native-ui-datepicker";
import { COLORS } from "./common/colors";

export default function DOBManager({
  isModalVisible,
  handleAction,
  dateValue,
  setDateValue,
}: DOBManagerT) {
  let maxDate = new Date();

  return (
    <>
      <QpModal
        isModalVisible={isModalVisible}
        // onBackButtonPress={() => close(false)}
        // onBackdropPress={() => close(false)}
        modalStyles={styles.modalStyle}
      >
        <DateTimePicker
          mode="date"
          selectedItemColor={COLORS.GREEN}
          maximumDate={maxDate}
          value={dateValue}
          onValueChange={(date) => setDateValue(date)}
        />

        <QpButton
          type={btnTypes.text}
          style={[styles.buttonDark, styles.mt15]}
          onPress={() => handleAction()}
          btnIcon={undefined}
          disabled={false}
          isUpperCase={false}
        >
          <QpText
            style={{
              ...styles.textBlack,
              ...styles.buttonDarkText,
              ...styles.textLG,
              ...styles.semiBold,
              ...styles.textUP,
            }}
          >
            Done
          </QpText>
        </QpButton>
      </QpModal>
    </>
  );
}
const style = StyleSheet.create({
  container: {
    alignItems: "flex-end",
  },
  profileCard: {
    paddingHorizontal: 20,
    flexDirection: "row",
  },

  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  text: {
    fontSize: 18,
    marginBottom: 12,
  },
  editButton: {
    backgroundColor: "#3498db",
    padding: 12,
    borderRadius: 8,
  },
  editButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
