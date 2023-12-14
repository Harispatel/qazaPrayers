import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import GpImage from './GpImage';



const getIcon = (type, props) => {
  switch (type) {
    case 'AntDesign':
      return <AntDesign accessibility={true} {...props} />;
    case 'Entypo':
      return <Entypo accessibility={true} {...props} />;
    case 'EvilIcons':
      return <EvilIcons accessibility={true} {...props} />;
    case 'Feather':
      return <Feather accessibility={true} {...props} />;
    case 'FontAwesome':
      return <FontAwesome accessibility={true} {...props} />;
    case 'FontAwesome5':
      return <FontAwesome5 accessibility={true} {...props} />;
    case 'Fontisto':
      return <Fontisto accessibility={true} {...props} />;
    case 'Foundation':
      return <Foundation accessibility={true} {...props} />;
    case 'Ionicons':
      return <Ionicons accessibility={true} {...props} />;
    case 'MaterialIcons':
      return <MaterialIcons accessibility={true} {...props} />;
    case 'MaterialCommunityIcons':
      return <MaterialCommunityIcons accessibility={true} {...props} />;
    case 'Octicons':
      return <Octicons accessibility={true} {...props} />;
    case 'SimpleLineIcons':
      return <SimpleLineIcons accessibility={true} {...props} />;
    case 'Zocial':
      return <Zocial accessibility={true} {...props} />;
    case 'Image':
      return props.onPress ? (
        <TouchableWithoutFeedback
          accessibility={true}
          {...props}
          onPress={() => {
            props.onPress ? props.onPress() : () => {};
          }}>
          <GpImage
            source={props.name}
            // resizeMode="contain"
            style={[
              {
                width: 20,
                height: 20,
                resizeMode: 'contain',
                marginHorizontal: 10,
                marginVertical: 4,
              },
              props.leftIconStyle,
            ]}
          />
        </TouchableWithoutFeedback>
      ) : (
        <GpImage
          source={props.name}
          // resizeMode="contain"
          style={[
            {
              width: 80,
              height: 20,
              resizeMode: 'contain',
              marginHorizontal: 10,
              marginVertical: 4,
            },
            props.leftIconStyle,
          ]}
        />
      );

    default:
      return;
  }
};
const PtIcons = props => {
  return getIcon(props.type, props);
};

export default PtIcons;
