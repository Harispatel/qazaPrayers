import { View, Text } from "react-native"
import React from "react"
import styles from "../../../components/common/styles"
import { GpButton, GpText } from "../../../components/elements"
import Icon from "react-native-vector-icons/FontAwesome6"
import { btnTypes } from "../../../components/common/constants"
import { membershipT, benifitsT } from "../../../utility/membership"

const MembershipCard = ({
  base,
  benifits,
  button,
  description,
  prise,
  tag,
}: membershipT) => {
  return (
    <View
      style={[
        styles.contentContainer,
        styles.roundedLG,
        styles.membershipCard,
        styles.gary300,
        styles.mt30,
      ]}
    >
      <View>
        <GpText
          style={[
            styles.textXL,
            styles.semiBold,
            styles.mt15,
            styles.textLG,
            styles.primaryBackground,
            styles.p10,
            styles.roundedLG,
            styles.wt20,
          ]}
        >
          {" "}
          {tag}
        </GpText>
      </View>
      <View style={[styles.borderB]}>
        <GpText
          style={[
            styles.semiBold,
            styles.textBlack,
            styles.textLightGray,
            styles.mb5,
          ]}
        >
          {description}
        </GpText>
        <GpText
          style={[
            styles.textXXL,
            styles.mt15,
            styles.semiBold,
            styles.textBlack,
            styles.textSlate,
          ]}
        >
          $ {prise}
          <GpText
            style={[
              styles.textMD,
              styles.semiBold,
              styles.textBlack,
              styles.textLightGray,
            ]}
          >
            / {base}
          </GpText>
        </GpText>
      </View>
      <View style={[styles.borderB, styles.pb15]}>
        {benifits.map(({ name }: benifitsT, index: number) => {
          return (
            <View key={index} style={[styles.flex, styles.mt12, styles.gap3]}>
              <Icon name="check" style={[styles.textBlack]} size={20} />
              <GpText
                style={[styles.textBlack, styles.textMD, styles.semiBold]}
              >
                {name}
              </GpText>
            </View>
          )
        })}
      </View>
      <View style={[styles.p10]}>
        <GpButton style={[styles.primaryBackground, styles.mt15, styles.p10]}>
          <GpText style={[styles.textLG, styles.semiBold, styles.textWhite]}>
            {button}
          </GpText>
        </GpButton>
      </View>
    </View>
  )
}

export default MembershipCard
