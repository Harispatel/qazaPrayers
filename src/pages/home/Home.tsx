import {ScrollView, TouchableOpacity, View} from 'react-native';
import React from 'react';

// !other import
import {GpCard, GpImage, GpText} from '../../components/elements';
import {carCard, carCardT} from '../../utility/carCard';
import {iconCard} from '../../utility/iconCard';
import IconCard from './iconCard/IconCard';
import styles from '../../components/common/styles';
import VendorCard from './vendor/VendorCard';
import {vendorCard, vendorCardT} from '../../utility/vendorCard';

export default function Home() {
  return (
    <View style={[styles.contentContainer]}>
      <ScrollView>
        <ScrollView horizontal={true} style={[styles.flex]}>
          {carCard.map(({url, name}: carCardT, index: number) => {
            return (
              <GpCard
                imageStyle={[styles.homeCarCard, styles.ml10]}
                width={150}
                height={200}
                key={index}
                url={url}
                iconText={name}
              />
            );
          })}
        </ScrollView>
        <View style={[styles.mt15, styles.flex, styles.justifyContentEvenly]}>
          {iconCard.map(({image, name}, index: number) => {
            return (
              <IconCard
                key={index}
                imageStyle={[styles.shadowMd]}
                width={70}
                height={70}
                url={image}
                iconText={name}
              />
            );
          })}
        </View>
        <View style={[]}>
          <GpText
            style={[
              styles.textBlack,
              styles.textMD,
              styles.semiBold,
              styles.p10,
            ]}>
            Recommended Vendor
          </GpText>
          <ScrollView>
            {vendorCard.map((item: vendorCardT, index: number) => {
              return <VendorCard key={index} />;
            })}
          </ScrollView>
        </View>
        <View>
          <GpText
            style={[
              styles.textBlack,
              styles.textXL,
              styles.semiBold,
              styles.p10,
            ]}>
            Find the easiest
            <GpText> recruitment of people</GpText>
            <GpText> with us</GpText>
          </GpText>
          <GpText
            style={[
              styles.textBlack,
              styles.semiBold,
              styles.mb10,
              styles.mt5,
            ]}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
            dolorem iure eum, culpa sed error maiores dicta adipisci ipsum hic
            quam enim consequatur odio eius deleniti quis veniam. Tempora, ab.
          </GpText>
          <View>
            <TouchableOpacity>
              <GpText
                style={[styles.semiBold, styles.textBlack, styles.textRight]}>
                Know More
              </GpText>
            </TouchableOpacity>
          </View>
          <GpImage
            style={[styles.becomeVendor, styles.mb10, styles.mt5]}
            source={{
              uri: 'https://i.postimg.cc/cHmVhFQ4/Wavy-Tech-14-Single-07-Photo-Room-png-Photo-Room.png',
            }}
            accessibilityLabel="AppleStore"
          />
        </View>
      </ScrollView>
    </View>
  );
}
