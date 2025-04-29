import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import COLORS from '../../conts/colors';
const Button2 = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity
      onPress={onPress}

      style={{
        height: 55,
        width: '100%',
        backgroundColor: COLORS.white,
        borderColor: COLORS.black,
        borderWidth: 2,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf : 'center'
      }}>
      <Text style={{color: COLORS.black, fontWeight: 'bold', fontSize: 18}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button2;