import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native'
import { auth, db } from '../../config/firebase'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../conts/colors';

const ProfileScreen = (item) => {
    const [usersData, setUsersData] = useState([]);
    const navigation = useNavigation()
    const currentUserEmail = auth.currentUser.email;

    useEffect(() => {
        fetchData();
      }, []);

        const fetchData = async () => {
            try {
                const snapshot = await db.collection('users')
                    .where('email', '==', currentUserEmail)
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

    // console.log(JSON.stringify(usersData))

    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.popToTop()
            })
            .catch(error => alert(error.message))
    }

    const showButton = currentUserEmail === '3angle.photographyy@gmail.com'
    let adminButton = null;
    if (showButton) {
        adminButton = (
            <View style={{ marginTop: 20 }}>
                <TouchableOpacity onPress={() => navigation.navigate("AdminScreen")} activeOpacity={0.7} style={{
                    backgroundColor: COLORS.lightBlue,
                    width: '60%',
                    padding: 15,
                    borderRadius: 10,
                    flexDirection: 'row',
                    paddingHorizontal: 63,
                }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Admin</Text>
                </TouchableOpacity>
            </View>
        );
    }



    return (
        <SafeAreaView style={{ backgroundColor: "white", height: '100%' }}>
            <View style={{ flexDirection: 'row', marginTop: 45, }}>
                <Icon
                    onPress={() => navigation.navigate("HomeScreen")}
                    name="keyboard-backspace"
                    style={styles.icon}
                />
                <Text style={{ marginTop: 3, marginLeft: 5, fontSize: 18, fontWeight: 'bold' }}>Profilku</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{
                    backgroundColor: "black",
                    marginLeft: 30,
                    marginTop: 10,
                    borderRadius: 70,
                    width: 40,
                    height: 40

                }}>
                    {usersData.map((item) => (
                        <View key={item.id} >
                            <Text style={{
                                //position:'absolute',
                                fontSize: 26,
                                fontWeight: 'bold',
                                marginTop: 3,
                                marginLeft: 8,
                                color: 'white',
                                letterSpacing: 8,
                                textTransform: 'capitalize'
                            }}>
                                {item.data.name}</Text>
                        </View>
                    ))}
                </View>
                <View style={styles.container}>
                    {usersData.map((item) => (
                        <View key={item.id} >
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.data.name}</Text>
                            <Text style={{ fontSize: 15, fontWeight: '400', color: "#444444" }}>{auth.currentUser.email}</Text>
                            <Text style={{ fontSize: 16, fontWeight: '400', color: "#444444" }}>{item.data.phone}</Text>
                        </View>
                    ))}
                </View>
                <Icon
                    onPress={() => navigation.navigate("EditProfileScreen")}
                    name="pencil"
                    style={{ fontSize: 26, paddingLeft: 320, position:'absolute' }}
                />
            </View>
            <View style={{ alignItems: 'center', height: '100%', }}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={handleSignOut}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Sign out</Text>
                    <Icon2
                        name="logout"
                        style={{ color: 'white', fontSize: 20, marginLeft: 10 }}
                    />
                </TouchableOpacity>
                {adminButton}
            </View>
        </SafeAreaView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        width: 250
    },
    button: {
        backgroundColor: '#ED2B2A',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        marginTop: 40,
        flexDirection: 'row',
        paddingHorizontal: 63,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    icon: {
        marginLeft: 20,
        color: '#111111',
        width: 35,
        fontSize: 32,
        marginBottom: 20,
        //backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: 20
    }
})