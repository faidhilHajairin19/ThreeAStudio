import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';



import TabViewPesanan from './TopTabNavigatorPesanan';


const PesananScreen= ({}) => {


  return (

    <View>
    <View style={styles.page}>

      <View style={styles.header}>
        <Text style={styles.title}>Pesanan</Text>
      </View>
      <View style={styles.garis} />
      
    </View>
    <View style={{height:'100%'}}>
    <TabViewPesanan/>
    </View>
    </View>
    
    
  );

};

export default PesananScreen;

const styles = StyleSheet.create({
  page: {
    
    backgroundColor:'#fff'
  },
  header: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  garis: {
    marginTop:10,
    borderWidth: 0.5,
    borderColor: "rgba(0, 0, 0, 0.1)" ,
  },
  listKontak: {
    paddingHorizontal: 10,
    marginTop: 20,
  },

  // wrapperButton: {
  //   flex: 1,
  //   position: 'absolute',
  //   bottom: 0,
  //   right: 0,
  //   margin: 30,
  // },

});