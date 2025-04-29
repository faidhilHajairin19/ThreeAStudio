import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core'
import { View, Text, Button } from 'react-native';
import { auth, db } from '../../config/firebase';

const HomeS = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const checkAdminStatus = async () => {
      const user = auth.currentUser;
      if (user) {
        // Periksa atribut isAdmin dalam profil pengguna
        const userSnapshot = await db.collection('users').doc(user.uid).get();
        const userData = userSnapshot.data();
        if (userData && userData.isAdmin) {
          setIsAdmin(true);
        }
      }
    };

    checkAdminStatus();
  }, []);

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("LoginScreen")
      })
      .catch(error => alert(error.message))
  }
  console.log(isAdmin)

  return (
    <View>
      <Text style={{marginTop:100}}>Selamat datang di aplikasi!</Text>
      {isAdmin ? (
        <Text>Anda adalah admin.</Text>
      ) : (
        <Text>Anda adalah pengguna biasa.</Text>
      )}
      <Button title="Logout" onPress={handleSignOut} />
    </View>
  );
};

export default HomeS;
