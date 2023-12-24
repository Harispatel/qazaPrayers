import React, { useState } from "react"
import { ScrollView, View } from "react-native"
import { IMAGES } from "../../assets"
import ProfileHeader from "../../components/profileHeader"
import { GpText } from "../../components/elements"
import { txtHead } from "../../components/common/constants"
import styles from "../../components/common/styles"
import { profileList, profileListT } from "../../utility/profileList"
import ProfileListView from "./options/ProfileListView"

const Profile: React.FC = ({ navigation }: any) => {
  const [visible, setVisible] = useState(false)

  const openMenu = () => setVisible(true)

  const closeMenu = () => setVisible(false)
  const userData = {
    name: "Haris Patel",
    designation: "Designation here",
    image: IMAGES.FACEBOOK,
  }
  const handleNavigation = (to) => {
    console.log("Navigating to", to)
    navigation.navigate(to)
  }
  return (
    <ScrollView>
      <ProfileHeader
        visible={visible}
        closeMenu={closeMenu}
        openMenu={openMenu}
        userData={userData}
      />
      <View style={styles.contentContainer}>
        {profileList.map((item: profileListT, index: number) => {
          return (
            <ProfileListView
              key={index}
              item={item}
              handleNavigation={handleNavigation}
            />
          )
        })}
      </View>
    </ScrollView>
  )
}

export default Profile
