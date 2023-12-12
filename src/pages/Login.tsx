/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {STACK} from '../components/common/stackNames';
import GpTextInput from '../components/elements/GpTextInput';
import GpButton from '../components/elements/GpButton';
import GpText from '../components/elements/GpText';
import {btnTypes, emailRegex} from '../components/common/constants';
import {COLORS} from '../components/common/colors';

const LoginScreen: React.FC = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

  const [error, setError] = useState({
    emailError: false,
    passwordError: false,
  });

  const handleLogin = () => {
    // Authentication logic
    if (!username || emailRegex.test(username) === false) {
      setError({...error, emailError: true});
      console.log("PLESE ENTER USER NAME")
      return;
    }
    console.warn('Logging in with:', {username, password});
  };
  const handleNavigate = () => {
    navigation.navigate(STACK.SIGN_UP);
  };

  return (
    <View style={styles.container}>
      {/* <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      /> */}
      <GpTextInput
        style={styles.input}
        label={'Username'}
        onChangeText={text => setUsername(text)}
      />
      <GpTextInput
        style={styles.input}
        label={'Enter Password'}
        // value={state.password}
        returnKeyType="done"
        // error={error.passwordError}
        right={
          // state.secureText ? (
          <TextInput.Icon
            name={secureText ? 'eye' : 'eye-off'}
            onPress={() => setSecureText(!secureText)}
          />
        }
        secureTextEntry={secureText}
        onChangeText={text => {
          setPassword(text);
        }}
      />
      <GpButton
        type={btnTypes.contained}
        onPress={handleLogin}
        style={{
          ...styles.loginBtn,
          color: COLORS.WHITE,
          backgroundColor: COLORS.SUCCESS,
        }}>
        <GpText>login</GpText>
      </GpButton>
      <GpButton type={btnTypes.text} onPress={handleNavigate}>
        <GpText>Dont have account? Sign up here</GpText>
      </GpButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    // height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingVertical: 0,
  },
  loginBtn: {},
});

export default LoginScreen;
