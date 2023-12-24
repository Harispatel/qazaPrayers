import { Pressable, View } from "react-native"
import React from "react"
import styles from "../../../components/common/styles"
import { GpImage, GpText } from "../../../components/elements"
import Feather from "react-native-vector-icons/Feather"
import GpIcons from "../../../components/elements/GpIcons"
import { COLORS } from "../../../components/common/colors"
export type profileViewT = {
  item: any
  handleNavigation: any
}
const ProfileListView = ({ item, handleNavigation }: profileViewT) => {
  return (
    <Pressable onPress={() => handleNavigation(item.navigateTo)}>
      <View style={[styles.flex, styles.gap3, styles.mt15]}>
        <GpIcons
          style={styles.mrH20}
          type={"MaterialIcons"}
          name={item?.icon}
          color={COLORS.GREEN}
          size={30}
        />
        <GpText
          style={{
            ...styles.viewFlex,
            ...styles.textBlack,
            ...styles.textLG,
            ...styles.semiBold,
            color: COLORS.DARK_GREY,
          }}
        >
          {item?.title}
        </GpText>
        <GpIcons
          style={{
            color: COLORS.DARK_GREY,
          }}
          type={"MaterialIcons"}
          name={"chevron-right"}
          color={COLORS.PRIMARY_TXT}
          size={30}
        />
      </View>
    </Pressable>
  )
}

export default ProfileListView
