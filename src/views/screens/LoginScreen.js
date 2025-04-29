import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, SafeAreaView, Keyboard, Alert } from 'react-native';
import { auth } from '../../config/firebase'
import COLORS from '../../conts/colors';
import Button from '../components/Button';
import Input from '../components/Input';
import Loader from '../components/Loader';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      
      if (user && user.emailVerified) {
        navigation.replace("HomeScreen");
      }
      // else {
      //   auth.signOut()
      // }
    });

    return unsubscribe;
  }, [])

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!email) {
      handleError('Mohon masukkan email', 'email');
      isValid = false;
    }
    if (!password) {
      handleError('Mohon masukkan kata sandi', 'password');
      isValid = false;
    }
    if (isValid) {
      login();
    }
  };

  const login = () => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
          const check = userCredentials.user;
          console.log('Login with:', check.email)
          if (userCredentials.user.emailVerified) {

            navigation.replace("HomeScreen")

          }
          else {
            Alert.alert(
              'Email belum diverifikasi', 'Verifikasi email anda terlebih dahulu!'
            )
            auth.signOut()
          }
        })
        .catch((error) => {
          if (error.code === 'auth/user-not-found') {
            Alert.alert(
              'Email tidak ditemukan', 'Anda bisa mendaftar terlebih dahulu'
            )
          }
          else if (error.code === 'auth/wrong-password') {
            Alert.alert(
              'Kata sandi salah', 'Email dan password anda tidak cocok'
            )
          }
          else {
            Alert.alert(error.code)
          }
        })

    }, 3000);
  }

  const handleError = (error, input) => {
    setErrors(prevState => ({ ...prevState, [input]: error }));
  };
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <Loader visible={loading} />
      <View style={{ paddingTop: 50, paddingHorizontal: 20 }}>
        <Icon
          onPress={() => navigation.navigate('OnboardingScreen')}
          name="close"
          style={{ color: COLORS.black, fontSize: 32, marginBottom: 30 }}
        />

        <Text style={{ color: COLORS.black, fontSize: 40, fontWeight: 'bold' }}>
          Masuk
        </Text>

        <View style={{ marginVertical: 10 }}>
          <Input
            onChangeText={text => setEmail(text)}
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            label="Email"
            placeholder="Masukkan email"
            error={errors.email}
          />
          <Input
            onChangeText={text => setPassword(text)}
            onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            label="Kata Sandi"
            placeholder="Masukkan kata sandi kamu"
            error={errors.password}
            password
          />
          <Button title="Masuk" onPress={validate} />
          <Text
            onPress={() => navigation.navigate('RegistrationScreen')}
            style={{
              color: COLORS.black,
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 14,
            }}>
            Belum punya akun Threeangle? Daftar
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;