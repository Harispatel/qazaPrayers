import { Text, View } from "react-native"
import React from "react"
import { GpImage } from "../../../components/elements"
import styles from "../../../components/common/styles"

export default function BuyMembership() {
  return (
    <View>
      <GpImage
        style={[styles.becomeVendor, styles.mb10, styles.mt5]}
        source={{
          uri: "https://i.postimg.cc/cHmVhFQ4/Wavy-Tech-14-Single-07-Photo-Room-png-Photo-Room.png",
        }}
        accessibilityLabel="AppleStore"
      />
    </View>
  )
}
