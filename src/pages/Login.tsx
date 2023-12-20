import React, { useState } from "react"
import { View, Pressable } from "react-native"
import { TextInput } from "react-native-paper"

// Components
import { STACK } from "../components/common/stackNames"
import { GpButton, GpText, GpTextInput, GpImage } from "../components/elements"
import { btnTypes, emailRegex, txtHead } from "../components/common/constants"
import styles from "../components/common/styles"
import { IMAGES } from "../assets"

const LoginScreen: React.FC = ({ navigation }: any) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [secureText, setSecureText] = useState(true)

  const [error, setError] = useState({
    emailError: false,
    passwordError: false,
  })

  const handleLogin = () => {
    // Authentication logic
    // Validation Temporary Commented
    // if (!username || emailRegex.test(username) === false) {
    //   setError({...error, emailError: true});
    //   console.log('PLESE ENTER USER NAME');
    //   return;
    // }
    console.log("Logging in with:", { username, password })
    navigation.navigate(STACK.PROFILE)
  }
  const handleNavigate = () => {
    navigation.navigate(STACK.SIGN_UP)
  }

  return (
    <View style={styles.contentContainer}>
      <GpText
        type={txtHead.heading3}
        style={{ ...styles.semiBold, ...styles.textBlack, ...styles.textLG }}
      >
        Welcome {"\n"}back!
      </GpText>
      <View style={[styles.mt45]}>
        <GpTextInput
          // keyboardType="number-pad"
          style={[styles.textInput, styles.mt15]}
          label={"Enter Email id"}
          onChangeText={(text: any) => setUsername(text)}
        />
        <GpTextInput
          style={styles.textInput}
          label={"Enter Password"}
          // value={state.password}
          returnKeyType="done"
          // error={error.passwordError}
          right={
            // state.secureText ? (
            <TextInput.Icon
              icon={{ uri: secureText ? IMAGES.EYE_OFF : IMAGES.EYE_ON }}
              onPress={() => setSecureText(!secureText)}
            />
          }
          secureTextEntry={secureText}
          onChangeText={(text: any) => {
            setPassword(text)
          }}
        />
        <GpButton type={btnTypes.text} onPress={handleNavigate}>
          <GpText style={styles.colorSuccess}>Forgot Password</GpText>
        </GpButton>
        <GpButton
          type={btnTypes.text}
          style={[styles.buttonDark, styles.mt15]}
          onPress={handleLogin}
        >
          <GpText
            style={{
              ...styles.textBlack,
              ...styles.buttonDarkText,
              ...styles.textLG,
              ...styles.semiBold,
              ...styles.textUP,
            }}
          >
            Login
          </GpText>
        </GpButton>
        <View
          style={[
            styles.mt15,
            styles.flex,
            styles.justifyContentCenter,
            styles.gap4,
          ]}
        >
          <Pressable onPress={() => console.log("Clicked Google Icon")}>
            <GpImage
              style={styles.loginIcon}
              source={IMAGES.GOOGLE}
              accessibilityLabel="AppleStore"
            />
          </Pressable>
          <Pressable onPress={() => console.log("Clicked Facebook Icon")}>
            <GpImage
              style={styles.loginIcon}
              source={{ uri: IMAGES.FACEBOOK }}
              accessibilityLabel="AppleStore"
            />
          </Pressable>
        </View>
        <GpButton type={btnTypes.text} onPress={handleNavigate}>
          <GpText style={styles.colorGrey}>New User? SIGNUP</GpText>
        </GpButton>
      </View>
    </View>
  )
}

export default LoginScreen
