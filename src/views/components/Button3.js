import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import COLORS from '../../conts/colors';
const Button = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        marginHorizontal: 5,
        height: 27,
        width: 27,
        borderColor:COLORS.lightBlue ,
        borderWidth: 2,
        backgroundColor: "#111111",
        borderRadius: 50,
        
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf : 'center'
      }}>
      <Text style={{color: COLORS.lightBlue, fontWeight: 'bold', fontSize: 16,}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;