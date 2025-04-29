import { StyleSheet, Text, View, TouchableOpacity,  } from 'react-native'
import {Picker} from '@react-native-picker/picker';
import React,  { useState } from 'react'
import COLORS from '../../conts/colors';

const SelectTime = ({data,  onPress = () => {}}) => {
    const [selected, setSelected] = useState(false);
    const [time, setTime] = useState("");



    const handlePress = () => {
        setSelected(!selected);
  };

    
  return (
   <View>
    <Picker selectedValue={time} onValueChange= {setTime}>
        <Picker.item label="09.00" value="09.00"/>

    </Picker>
   </View>
  )
}

export default SelectTime

const styles = StyleSheet.create({})