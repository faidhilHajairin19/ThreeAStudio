import React from 'react';
import {StyleSheet, Text, TextInput} from 'react-native';

const Input3 = ({
  label,
  placeholder,
  placeholderTextColor,
  keyboardType,
  isTextArea,
  onChangeText,
  namaState,
  value,
  onFocus
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
        onFocus={onFocus}
        style={styles.textInput}
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
      />
    </>
  );
};

export default Input3;

const styles = StyleSheet.create({
  label: {
    color: 'white',
    fontSize: 12,
    marginBottom: 5,
    marginTop:0
  },
  textInput: {
    color: 'white',
    borderWidth: 1,
    borderColor:'#111111',
    borderBottomColor:'rgba(255, 255, 255, 0.7)',
    borderRadius: 5,
    padding: 5,
    fontSize: 15,
    
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