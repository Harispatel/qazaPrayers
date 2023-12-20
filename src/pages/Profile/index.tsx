import React, { useState } from "react"
import { GpButton, GpImage, GpText } from "../../components/elements"
import { txtHead } from "../../components/common/constants"
import styles from "../../components/common/styles"
import { View, StyleSheet, ImageBackground } from "react-native"
import { IMAGES } from "../../assets"
import { Divider, Menu } from "react-native-paper"

const Profile: React.FC = ({ navigation }: any) => {
  const [visible, setVisible] = useState(false)

  const openMenu = () => setVisible(true)

  const closeMenu = () => setVisible(false)
  return (
    <View>
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
              <GpButton onPress={openMenu}>
                <GpText type={txtHead.heading1}>...</GpText>
              </GpButton>
            }
          >
            <Menu.Item onPress={() => {}} title="Item 1" />
            <Menu.Item onPress={() => {}} title="Item 2" />
            <Divider />
            <Menu.Item onPress={() => {}} title="Item 3" />
          </Menu>
        </View>

        <View style={{ ...style.profileCard, ...styles.viewFlex }}>
          <GpImage
            style={styles.profileIcon}
            source={{ uri: IMAGES.FACEBOOK }}
            accessibilityLabel="AppleStore"
          />
          <View>
            <GpText
              type={txtHead.heading3}
              style={{ ...styles.description, ...styles.ml15, ...styles.mb10 }}
            >
              Haris Patel
            </GpText>
            <GpText type={txtHead.heading6} style={{ ...styles.ml15 }}>
              (Designation)
            </GpText>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
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
})
export default Profile
