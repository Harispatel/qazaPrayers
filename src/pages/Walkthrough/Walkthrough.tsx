/* eslint-disable prettier/prettier */
import React, { useState } from "react"
import { ScrollView, View } from "react-native"
import { CommonActions } from "@react-navigation/native"

// Components
import { STACK } from "../../components/common/stackNames"
import styles from "../../components/common/styles"
import { IMAGES } from "../../assets"
import WkContainer from "../../components/wlkthContent"

interface WalkthroughScreenProps {
  navigation: any
}

const Walkthrough: React.FC<WalkthroughScreenProps> = ({ navigation }) => {
  const [currentScreen, setCurrentScreen] = useState(0)

  const handleNext = (direction: number) => {
    if (currentScreen >= 2) {
      handleSkip()
    } else {
      setCurrentScreen(currentScreen + direction)
    }
  }
  const handlePrevious = (direction: number) => {
    if (currentScreen >= 1) {
      setCurrentScreen(currentScreen - direction)
    }
  }
  const handleSkip = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: STACK.LOGIN }],
      })
    )
  }
  const screens = [
    {
      id: 0,
      title: "Welcome to My App!",
      description:
        "This is a simple app to show you how a walkthrough screen can be designed in React Native.",
      buttonText: "Next",
      image: IMAGES.COMMUNITY,
    },
    {
      id: 1,
      title: "This is Screen 2",
      description:
        "You can add more screens if you want to showcase more features of your app.",
      buttonText: "Next",
      prevBtnText: "Previous",
      image: IMAGES.COMMUNITY,
    },
    {
      id: 2,
      title: "This is Screen 3",
      description:
        "This is the last screen. Here you can explain a final feature or tell the user to start using the app.",
      buttonText: "Get Started",
      prevBtnText: "Previous",
      image: IMAGES.COMMUNITY,
    },
  ]
  return (
    <ScrollView style={{ ...styles.viewFlex }}>
      {screens?.map((screen, index) => {
        return (
          <View key={screen.id}>
            {currentScreen === index && (
              <>
                <WkContainer
                  image={screen.image}
                  title={screen.title}
                  description={screen.description}
                  handleNext={() => handleNext(1)}
                  handleSkip={handleSkip}
                  handlePrevious={() => handlePrevious(1)}
                  currentScreen={currentScreen}
                  buttonText={screen.buttonText}
                />
              </>
            )}
          </View>
        )
      })}
    </ScrollView>
  )
}

export default Walkthrough
