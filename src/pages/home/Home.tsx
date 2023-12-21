import { ScrollView, View } from "react-native"
import React from "react"

// !other import
import { GpCard, GpText } from "../../components/elements"
import { carCard, carCardT } from "../../utility/carCard"
import { iconCard } from "../../utility/iconCard"
import IconCard from "./iconCard/IconCard"
import styles from "../../components/common/styles"
import VendorCard from "./vendor/VendorCard"
import { vendorCard, vendorCardT } from "../../utility/vendorCard"
import BecomeVendor from "./vendor/BecomeVendor"

export default function Home({ navigation }: any) {
  return (
    <ScrollView>
      <View style={[styles.contentContainer]}>
        <ScrollView horizontal={true} style={[styles.flex]}>
          {carCard.map(({ url, name }: carCardT, index: number) => {
            return (
              <GpCard
                imageStyle={[styles.homeCarCard, styles.ml10]}
                width={150}
                height={200}
                key={index}
                url={url}
                iconText={name}
              />
            )
          })}
        </ScrollView>
        <View style={[styles.mt15, styles.flex, styles.justifyContentEvenly]}>
          {iconCard.map(({ image, name }, index: number) => {
            return (
              <IconCard
                key={index}
                imageStyle={[styles.shadowMd]}
                width={70}
                height={70}
                url={image}
                iconText={name}
              />
            )
          })}
        </View>
        <View>
          <GpText
            style={[
              styles.textBlack,
              styles.textMD,
              styles.semiBold,
              styles.p10,
            ]}
          >
            Recommended Vendor
          </GpText>
          <ScrollView>
            {vendorCard.map((item: vendorCardT, index: number) => {
              return <VendorCard key={index} />
            })}
          </ScrollView>
        </View>
        <View>
          <BecomeVendor navigation={{ navigation }} />
        </View>
      </View>
    </ScrollView>
  )
}
