import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import COLORS from '../../conts/colors';
const Button = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        height: 35,
        width: 100,
        backgroundColor: COLORS.white,
        // borderColor: COLORS.white,
        // borderWidth: 2,
        borderRadius: 10,
        marginVertical:10,
        marginLeft: 110,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf : 'center'
      }}>
      <Text style={{color: "#111111", fontWeight: 'bold', fontSize: 16}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;