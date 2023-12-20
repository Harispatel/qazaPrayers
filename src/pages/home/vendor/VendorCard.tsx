import {View} from 'react-native';
import React from 'react';
import styles from '../../../components/common/styles';
import {GpImage, GpText} from '../../../components/elements';
import Feather from 'react-native-vector-icons/Feather';

const VendorCard = () => {
  return (
    <View
      style={[
        styles.roundedLG,
        styles.vendorCard,
        styles.gary300,
        styles.mb10,
      ]}>
      <View style={[styles.flex, styles.gap3]}>
        <GpImage
          style={styles.vendorIcon}
          source={{
            uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
          }}
          accessibilityLabel="AppleStore"
        />
        <View>
          <GpText style={[styles.textBlack, styles.textLG, styles.semiBold]}>
            Jebifer Jana
          </GpText>
          <GpText style={[styles.textBlack]}>Toyota Camry</GpText>
        </View>
      </View>
      <View
        style={[styles.borderBottom, styles.flex, styles.gap3, styles.mt15]}>
        <View style={[styles.verfiy, styles.flex]}>
          <Feather
            style={styles.textWhite}
            name="check-circle"
            size={15}
            color="#EFEFEF"
          />
          <GpText style={[styles.semiBold]}>Toyota Camry</GpText>
        </View>
        <View style={[styles.verfiy]}>
          <GpText style={[styles.semiBold, styles.textMD]}>Toyota Camry</GpText>
        </View>
      </View>
      <View>
        <View style={[styles.flex, styles.gap1]}>
          <GpImage
            style={styles.vendorBottomIcon}
            source={{
              uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
            }}
            accessibilityLabel="AppleStore"
          />
          <GpText style={[styles.textBlack, styles.semiBold]}>
            Toyota Camry
          </GpText>
        </View>
        <GpText
          style={[
            styles.textBlack,
            styles.mt5,
            styles.textSM,
            styles.semiBold,
          ]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cum,
          impedit maiores aliquam natus accusantium debitis sed iste
        </GpText>
      </View>
    </View>
  );
};

export default VendorCard;
