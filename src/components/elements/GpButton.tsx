import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {COLORS} from '../common/colors';

export default function GpButton(props: any) {
  const {children, type} = props;
  return (
    <Button
      {...props}
      mode={type}
      uppercase={false}
      style={[
        btnStyle.buttonStyle,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          borderWidth: props?.type == 'outlined' ? 1 : 0,
          borderColor: props?.type == 'outlined' ? COLORS.PRIMARY_TXT : null,
          zIndex: 2000,
        },
        props.style,
      ]}>
      {children}
    </Button>
  );
}

const btnStyle = StyleSheet.create({
  buttonStyle: {
    textAlign: 'center',
    justifyContent: 'center',
    // height: 46,
    // borderRadius: 24,
    // margin: normalize(8),
  },
});
