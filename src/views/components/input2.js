import React from 'react';
import {StyleSheet, Text, TextInput} from 'react-native';

const InputData = ({
  label,
  placeholder,
  placeholderTextColor,
  keyboardType,
  isTextArea,
  onChangeText,
  namaState,
  value
}) => {
  // if (isTextArea) {
  //   return (
  //     <>
  //       <Text style={styles.label}>{label} :</Text>
  //       <TextInput
  //         multiline={true}
  //         numberOfLines={4}
  //         placeholder={placeholder}
  //         style={styles.textInput}
  //         keyboardType={keyboardType}
  //         value={value}
  //         onChangeText={(text) => onChangeText(namaState, text)}
  //       />
  //     </>
  //   );
  // }

  return (
    <>
    
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={styles.textInput}
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
      />
    </>
  );
};

export default InputData;

const styles = StyleSheet.create({
  label: {
    color: 'black',
    fontSize: 12,
    marginBottom: 5,
    marginTop:20
  },
  textInput: {
    color: 'black',
    borderWidth: 1,
    borderColor:'white',
    borderBottomColor:'rgba(0, 0, 0, 0.7)',
    borderRadius: 5,
    padding: 5,
    fontSize: 15,
    fontWeight:'bold'
  },
  // textInputArea: {
  //   textAlignVertical: 'top',
  //   borderWidth: 1,
  //   borderColor: 'gray',
  //   borderRadius: 5,
  //   padding: 10,
  //   marginBottom: 10,
  // },
});