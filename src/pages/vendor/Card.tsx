import { Text, View } from "react-native"
import React from "react"
import Icon from "react-native-vector-icons/FontAwesome6"

// !other import
import styles from "../../components/common/styles"
import { GpImage, GpText } from "../../components/elements"

export default function Card() {
  return (
    <View
      style={[
        styles.gary300,
        styles.mt12,
        styles.vendoListCard,
        styles.roundedLG,
        styles.flex,
        styles.gap4,
      ]}
    >
      <GpImage
        style={styles.vendorIcon}
        source={{
          uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
        }}
        accessibilityLabel="AppleStore"
      />
      <View style={[]}>
        <GpText style={[styles.textBlack, styles.textMD, styles.semiBold]}>
          Zaheer Shaikh
        </GpText>
        <GpText
          style={[
            styles.mt5,
            styles.textBlack,
            styles.textMD,
            styles.semiBold,
            styles.flex,
          ]}
        >
          <Icon name="star" style={[styles.primaryColor]} size={20} />
          <Icon name="star" style={[styles.primaryColor]} size={20} />
          <Icon name="star" style={[styles.primaryColor]} size={20} /> 3
        </GpText>
      </View>
    </View>
  )
}
