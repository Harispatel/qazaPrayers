/* eslint-disable prettier/prettier */
import React from "react"
import { CommonActions } from "@react-navigation/native"
import { ImageBackground, Text, View } from "react-native"

// Components
import { STACK } from "../../components/common/stackNames"
import styles from "../../components/common/styles"
import GpButton from "../../components/elements/GpButton"
import { IMAGES } from "../../assets"
import WkContainer from "../../components/wlkthContent"
import Ionicons from "react-native-vector-icons/Ionicons"
import GpIcons from "../../components/elements/GpIcons"
import { COLORS } from "../../components/common/colors"

interface WalkthroughScreenProps {
  navigation: any
}

const Walkthrough3: React.FC<WalkthroughScreenProps> = ({ navigation }) => {
  const handleNext = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: STACK.LOGIN }],
      })
    )
  }
  const handlePrevious = () => {
    navigation.navigate(STACK.WALKTHROUGH2)
  }
  const handleSkip = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: STACK.LOGIN }],
      })
    )
  }
  return (
    <View style={styles.viewFlex}>
      <ImageBackground
        source={IMAGES.BGIMG}
        resizeMode="cover"
        style={styles.logo}
      >
        <GpIcons
          onPress={handlePrevious}
          type={"Feather"}
          name={"chevron-left"}
          color={COLORS.PRIMARY_TXT}
          style={[styles.mt15, styles.pl20, styles.wt20]}
          size={30}
        />
      </ImageBackground>
      <WkContainer
        image={IMAGES.COMMUNITY}
        text={"Some Content Walkthrough 3"}
        handleNext={handleNext}
        handleSkip={handleSkip}
        handlePrevious={handlePrevious}
      />
    </View>
  )
}

export default Walkthrough3
