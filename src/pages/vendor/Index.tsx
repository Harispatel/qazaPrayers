import { ScrollView, Text, View } from "react-native"
import React from "react"

// ! other import
import styles from "../../components/common/styles"
import { btnTypes } from "../../components/common/constants"
import { GpButton, GpText } from "../../components/elements"
import Card from "./Card"
export default function Vendor() {
  const getVendorByType = (type: string) => {
    console.log(type)
  }

  return (
    <ScrollView>
      <View style={[styles.contentContainer]}>
        <View style={[styles.flex, styles.justifyContentEvenly]}>
          <GpButton
            style={[styles.p5, styles.primaryBackground, styles.roundedfull]}
            type={btnTypes.text}
            onPress={getVendorByType("near")}
          >
            <GpText style={[styles.textWhite, styles.textMD, styles.semiBold]}>
              Near by me
            </GpText>
          </GpButton>
          <GpButton
            style={[styles.p5, styles.primaryBackground, styles.roundedfull]}
            type={btnTypes.text}
            onPress={getVendorByType("near")}
          >
            <GpText style={[styles.textWhite, styles.textMD, styles.semiBold]}>
              Within UAE
            </GpText>
          </GpButton>
        </View>
        <View>
          <Card />
        </View>
      </View>
    </ScrollView>
  )
}
