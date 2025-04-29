import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { auth, db } from '../../config/firebase'

import topTabNavigator from '../../navigations/topTabNavigator';
import TabViewExample from '../../navigations/topTabNavigator';
import OrdersScreen2 from './OrdersScreenAktif';

const OrdersScreen= ({}) => {


  return (

    <View>
    <View style={styles.page}>

      <View style={styles.header}>
        <Text style={styles.title}>Daftar Booking Anda</Text>
      </View>
      <View style={styles.garis} />
      
    </View>
    <View style={{height:'100%'}}>
    <TabViewExample/>
    </View>
    </View>
    
    
  );

};

export default OrdersScreen;

const styles = StyleSheet.create({
  page: {
    
    backgroundColor:'#fff'
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  title: {
    marginTop: 30,
    fontSize: 24,
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