import React, { useState } from 'react';
import { auth } from '../../config/firebase'
import { firestore } from 'firebase'
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  ScrollView,
  Alert,
} from 'react-native';

import COLORS from '../../conts/colors';
import Button from '../components/Button';
import Input from '../components/Input';
import Loader from '../components/Loader';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const RegistrationScreen = ({ navigation }) => {

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});


  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!email) {
      handleError('Mohon masukkan email', 'email');
      isValid = false;
    } else if (!email.match(/\S+@\S+\.\S+/)) {
      handleError('Email tidak valid', 'email');
      isValid = false;
    }

    if (!name) {
      handleError('Mohon masukkan nama', 'name');
      isValid = false;
    }

    if (!phone) {
      handleError('Mohon masukkan nomor telepon', 'phone');
      isValid = false;
    }

    if (!password) {
      handleError('Mohon masukkan kata sandi', 'password');
      isValid = false;
    } else if (password.length < 5) {
      handleError('Min password length of 5', 'password');
      isValid = false;
    }

    if (isValid) {
      register(email, password, name, phone);
    }
  };


  register = async (email, password, name, phone) => {
    setLoading(true);
    this.state;
    await auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        auth.currentUser
        .sendEmailVerification({
          handleCodeInApp: true,
          url: 'https://app-auth-bd37f.firebaseapp.com',
        })
          .then(() => {
            alert('Verification email sent')
            navigation.replace("LoginScreen")
          }).catch((error) => {
            alert(error.message)
          })
          .then(() => {
            firestore().collection('users')
              .doc(auth.currentUser.uid)
              .set({
                name,
                email,
                phone,
              })
          })
          .catch((error) => {
            alert(error.message)
          })
      })
      .catch((error => {
        alert(error.message)
      }))
  }
  const handleError = (error, input) => {
    setErrors(prevState => ({ ...prevState, [input]: error }));
  };
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <Loader visible={loading} />
      <ScrollView
        contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20 }}>
        <Icon
          onPress={() => navigation.navigate('OnboardingScreen')}
          name="close"
          style={{ color: COLORS.black, fontSize: 32, marginBottom: 30 }}
        />
        <Text style={{ color: COLORS.black, fontSize: 40, fontWeight: 'bold' }}>
          Daftar Sekarang
        </Text>
        <View style={{ marginVertical: 20 }}>

          <Input
            onChangeText={(email) => setEmail(email)}
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            label="Email"
            placeholder="Masukkan email"
            error={errors.email}
          />
          <Input
            onChangeText={(name) => setName(name)}
            onFocus={() => handleError(null, 'name')}
            iconName="account-outline"
            label="Nama"
            placeholder="Masukkan nama"
            error={errors.name}
          />
          <Input
            keyboardType="numeric"
            onChangeText={(phone) => setPhone(phone)}
            onFocus={() => handleError(null, 'phone')}
            iconName="phone-outline"
            label="Nomor Telepon"
            placeholder="Masukkan nomor telepon"
            error={errors.phone}
          />
          <Input
            onChangeText={(password) => setPassword(password)}
            onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            label="Kata Sandi"
            placeholder="Masukkan kata sandi kamu"
            error={errors.password}
            password
          />
          <Button title="Daftar" onPress={validate} />
          <Text
            onPress={() => navigation.navigate('LoginScreen')}
            style={{
              color: COLORS.black,
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 14,
            }}>
            Sudah punya akun Threeangle? Masuk
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegistrationScreen;