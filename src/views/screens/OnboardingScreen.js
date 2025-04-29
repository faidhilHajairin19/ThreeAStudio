import { StyleSheet, Text, Image, ImageBackground, SafeAreaView, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import Button2 from '../components/Button2';
import COLORS from '../../conts/colors';
import Loader from '../components/Loader';

import { LinearGradient } from 'expo-linear-gradient';


const OnboardingScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);



  const login = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('LoginScreen')
    }, 1000)
  };

  const register = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('RegistrationScreen')
    }, 1000)
  };

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <Loader visible={loading} />
      <View style={{ paddingTop: 20, paddingHorizontal: 0 }}>
        <Image
          source={require('../../../assets/logo.png')}
          style={{
            height: 72,
            width: 72,
            marginLeft: 20,
            marginTop: 45,
            marginBottom: 100,
            // alignSelf : 'center',
          }} />
        <LinearGradient
          style={{
            height: 5000,
            width: 360,
            paddingHorizontal: 20,
            alignSelf: 'center'
          }}
          colors={['transparent', 'rgba(0,0,0,0.4))']}
        >
          <Image source={require('../../../assets/imagee.png')} resizeMode="contain"
            style={{
              height: 280,
              //width: 300,
              alignSelf: 'center',
              marginBottom: 50,
            }} />
          <Button title="Masuk" onPress={(login)} />
          <Button2 title="Daftar" onPress={(register)} />
        </LinearGradient>

      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;