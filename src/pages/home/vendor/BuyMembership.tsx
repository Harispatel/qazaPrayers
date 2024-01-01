import { View } from "react-native"
import React from "react"

// !other import
import { GpImage, GpText } from "../../../components/elements"
import MembershipCard from "./MembershipCard"
import styles from "../../../components/common/styles"
import { ScrollView } from "react-native"
import { memberhsip, membershipT } from "../../../utility/membership"

export default function BuyMembership() {
  return (
    <ScrollView>
      <View style={[styles.contentContainer]}>
        <GpImage
          style={[styles.becomeVendor, styles.mb10, styles.mt5]}
          source={{
            uri: "https://i.postimg.cc/cHmVhFQ4/Wavy-Tech-14-Single-07-Photo-Room-png-Photo-Room.png",
          }}
          accessibilityLabel="AppleStore"
        />
        <GpText
          style={[
            styles.center,
            styles.textBlack,
            styles.textLG,
            styles.semiBold,
            styles.p10,
          ]}
        >
          Become a Vendor
        </GpText>
        <GpText
          style={[
            styles.center,
            styles.textBlack,
            styles.textMD,
            styles.semiBold,
          ]}
        >
          Become a Vendor and start
        </GpText>
        <GpText
          style={[
            styles.center,
            styles.textBlack,
            styles.textMD,
            styles.semiBold,
          ]}
        >
          earning money with us
        </GpText>
        <GpText
          style={[
            styles.textBlack,
            styles.textMD,
            styles.semiBold,
            styles.mt15,
          ]}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Consequuntur, aut? Ipsum nemo dolores voluptatibus, repudiandae maxime
          architecto vitae rem sint veritatis. Maxime a obcaecati sit id
          doloribus voluptatum, quo excepturi!
        </GpText>

        <GpText
          style={[styles.textBlack, styles.textMD, styles.semiBold, styles.mt5]}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Consequuntur, aut? Ipsum nemo dolores voluptatibus, repudiandae maxime
          architecto vitae rem sint veritatis. Maxime a obcaecati sit id
          doloribus voluptatum, quo excepturi!
        </GpText>
        <View>
          {memberhsip.map(
            (
              { base, benifits, button, description, prise, tag }: membershipT,
              index: number
            ) => {
              return (
                <MembershipCard
                  key={index}
                  tag={tag}
                  description={description}
                  prise={prise}
                  base={base}
                  benifits={benifits}
                  button={button}
                />
              )
            }
          )}
        </View>
      </View>
    </ScrollView>
  )
}
