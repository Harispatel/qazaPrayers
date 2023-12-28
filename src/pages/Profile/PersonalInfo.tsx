/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import styles from "../../components/common/styles";
import { GpButton, GpText, GpTextInput } from "../../components/elements";
import { btnTypes, width } from "../../components/common/constants";
import { COLORS } from "../../components/common/colors";

interface OnPersonalInfoScreenProps {
  navigation: any;
}

const PersonalInfo: React.FC<OnPersonalInfoScreenProps> = ({ navigation }) => {
  const [phoneNum, setPhoneNum] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editMode, setEditMode] = useState(false);

  const EditProfile = () => {
    setEditMode(!editMode);
  };
  useEffect(() => {
    let data = { name: "User", email: "user@gmail.com", phone: "9876543210" };
    setEmail(data.email);
    setName(data.name);
    setPhoneNum(data.phone);
  }, []);

  return (
    <View
      style={{
        ...styles.viewFlex,
        ...styles.gap4,
        ...styles.p10,
        ...styles.ph20,
      }}
    >
      <View
        style={{
          ...styles.flex,
          justifyContent: "flex-end",
        }}
      >
        <GpButton
          disabled={false}
          btnIcon={editMode ? "eye" : "pencil"}
          type={btnTypes.outlined}
          onPress={EditProfile}
          isUpperCase={false}
          style={undefined}
        >
          <GpText style={{ ...styles.wkTxt, color: COLORS.DARK_GREY }}>
            {editMode ? "View" : "Edit"} profile
          </GpText>
        </GpButton>
      </View>
      <View style={[styles.viewFlex]}>
        <GpTextInput
          textContentType="name"
          value={phoneNum}
          disabled={editMode ? false : true}
          keyboardType="number-pad"
          label={"Mobile Number"}
          onChangeText={(text: any) => setPhoneNum(text)}
          style={style.textBoxWidth}
        />
        <GpTextInput
          value={name}
          disabled={editMode ? false : true}
          label={"Enter Name"}
          onChangeText={(text: any) => setName(text)}
          style={style.textBoxWidth}
        />
        <GpTextInput
          value={email}
          disabled={true}
          label={"Email id"}
          onChangeText={(text: any) => setEmail(text)}
          style={style.textBoxWidth}
        />
      </View>
    </View>
  );
};

export default PersonalInfo;

const style = StyleSheet.create({
  textBoxWidth: {
    width: width / 1.2,
  },
});
