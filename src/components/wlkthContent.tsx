/* eslint-disable prettier/prettier */
import React from "react"
import { ImageBackground, View } from "react-native"
import { GpButton, GpImage, GpText } from "./elements"
import styles from "./common/styles"
import { btnTypes, txtHead } from "./common/constants"
import { COLORS } from "./common/colors"
import GpIcons from "./elements/GpIcons"
import { IMAGES } from "../assets"

export default function WkContainer(props) {
  return (
    <>
      <ImageBackground
        source={IMAGES.BGIMG}
        resizeMode="cover"
        style={styles.logo}
      >
        {props?.currentScreen >= 1 ? (
          <GpIcons
            onPress={props?.handlePrevious}
            type={"Feather"}
            name={"chevron-left"}
            color={COLORS.PRIMARY_TXT}
            style={[styles.mt15, styles.pl20, styles.wt20]}
            size={30}
          />
        ) : null}
      </ImageBackground>
      <View
        style={{
          ...styles.viewFlex,
          ...styles.gap4,
          ...styles.p10,
        }}
      >
        <GpImage
          style={styles.logo}
          resizeMode="contain"
          source={props?.image}
        />
        <GpText type={txtHead.heading2} style={styles.description}>
          {props?.title}
        </GpText>
        <GpText type={txtHead.heading6} style={styles.description}>
          {props?.description}
        </GpText>
      </View>
      <View style={styles.walkthroughContainer}>
        <GpButton
          type={btnTypes.contained}
          onPress={props?.handleNext}
          style={{
            ...styles.nextBtn,
            color: COLORS.WHITE,
            backgroundColor: COLORS.SUCCESS,
          }}
        >
          <GpText style={styles.wkTxt}>{props.buttonText}</GpText>
        </GpButton>
      </View>
    </>
  )
}
