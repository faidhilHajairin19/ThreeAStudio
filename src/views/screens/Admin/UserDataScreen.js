import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/core'
import { auth, db } from '../../../config/firebase'
import CardUser from './CardUser';

const UserDataScreen = () => {
    const [usersData, setUsersData] = useState([]);
    const navigation = useNavigation()
    const currentUserEmail = auth.currentUser.email;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const snapshot = await db.collection('users')
                    .get();
                const users = [];
                snapshot.forEach((doc) => {
                    users.push({ id: doc.id, data: doc.data() });

                });
                setUsersData(users);
            } catch (error) {
                console.log('Error fetching Firestore data:', error);
            }

        };



        fetchData();
    }, []);
    return (
        <SafeAreaView style={{ backgroundColor: "white", height: '100%' }}>

            <View style={{ flexDirection: 'row', marginTop: 45, }}>
                <Icon
                    onPress={() => navigation.navigate("ProfileScreen")}
                    name="keyboard-backspace"
                    style={styles.icon}
                />
                <Text style={{
                    marginTop: 3,
                    marginLeft: 5,
                    fontSize: 20,
                    fontWeight: 'bold'
                }}>
                    Halaman Admin</Text>
            </View>
            <View style={styles.header}>
                <Text style={styles.title}>Data Akun</Text>
            </View>
            <View style={styles.garis} />
            <ScrollView style={{ height: 584 }}>
        <View style={styles.listKontak}>
          {usersData.length > 0 ? (
            usersData.map((item) => (
              <CardUser key={item.id} id={item.id} item={item} />
            ))
          ) : (
            <View style={{ alignItems: 'center', justifyContent: 'center', height: 450 }}>
              <View>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18, marginBottom: 5 }}>
                  Data Kosong!</Text>
              </View>
            </View>
          )}
        </View>
      </ScrollView>

        </SafeAreaView>
    )
}

export default UserDataScreen

const styles = StyleSheet.create({
    icon: {
        marginLeft: 20,
        color: '#111111',
        width: 35,
        fontSize: 32,
        marginBottom: 16,
        borderRadius: 20
    },
    header: {
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    garis: {
        marginTop: 10,
        borderWidth: 0.5,
        borderColor: "rgba(0, 0, 0, 0.1)",
    },
    garis1: {
        marginTop: 15,
        borderWidth: 0.5,
        borderColor: "rgba(0, 0, 0, 0.1)",
        width: '85%',
        alignSelf: 'center'
    },
})