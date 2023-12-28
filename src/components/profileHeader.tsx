/* eslint-disable prettier/prettier */
import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { GpImage, GpText } from "./elements";
import styles from "./common/styles";
import { txtHead } from "./common/constants";
import { COLORS } from "./common/colors";
import { IMAGES } from "../assets";
import { Divider, Menu } from "react-native-paper";
import GpIcons from "./elements/GpIcons";
import { ProfileHeadT } from "../utility/types/type";

export default function ProfileHeader({
  visible,
  closeMenu,
  openMenu,
  userData,
}: ProfileHeadT) {
  return (
    <ImageBackground
      source={IMAGES.BGIMG}
      resizeMode="cover"
      style={styles.logo}
    >
      <View style={{ ...style.container, ...styles.viewFlex }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <GpIcons
              onPress={openMenu}
              type={"MaterialIcons"}
              name={"more-vert"}
              color={COLORS.PRIMARY_TXT}
              style={[styles.mt15, styles.pl20, styles.wt20]}
              size={30}
            />
          }
        >
          <Menu.Item onPress={() => {}} title="Edit Profile" />
          <Menu.Item onPress={() => {}} title="Settings" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Logout" />
        </Menu>
      </View>

      <View style={{ ...style.profileCard, ...styles.viewFlex }}>
        <GpImage
          style={styles.profileIcon}
          source={{ uri: userData?.image }}
          accessibilityLabel="AppleStore"
        />
        <View>
          <GpText
            type={txtHead.heading3}
            style={{ ...styles.ml15, ...styles.mb10 }}
          >
            {userData?.name}
          </GpText>
          <GpText type={txtHead.heading6} style={{ ...styles.ml15 }}>
            {userData.designation}
          </GpText>
        </View>
      </View>
    </ImageBackground>
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
