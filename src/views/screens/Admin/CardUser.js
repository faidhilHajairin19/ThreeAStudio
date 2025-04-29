import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import COLORS from '../../../conts/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/core'
import { auth, db } from '../../../config/firebase'

const CardUser = ({ item }) => {
    const navigation = useNavigation()
    const userName = (item.data.name)
    // console.log(userName)

 

    return (<View>
        <View
            style={styles.container}
        >
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{
                    backgroundColor: "black",
                    marginLeft: 10,
                    borderRadius: 70,
                    width: 40,
                    height: 40,
                }}>
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
                </View>
                <View key={item.id} style={{ width: 250, marginLeft: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.data.name}</Text>
                    <Text style={{ fontSize: 16, fontWeight: '400', color: "#444444" }}>{item.data.email}</Text>
                    <Text style={{ fontSize: 16, fontWeight: '400', color: "#444444" }}>{item.data.phone}</Text>
                </View>
                <View>
                    {/* <Icon
                        onPress={() => navigation.navigate('AdminEditProfileScreen', {
                            paramKey: userName
                        })}
                        name="pencil"
                        style={{ fontSize: 26, paddingLeft: 20, marginBottom:50 }}
                    /> */}
                    {/* <Icon
                        onPress={dfd}
                        name="trash-can"
                        style={{ fontSize: 26, paddingLeft: 20, marginTop: 15, color: 'red' }}
                    /> */}
                </View>
            </View>
        </View>
        <View style={styles.garis1}></View>
    </View>
    );
};

export default CardUser;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 0,
        marginBottom: 0,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    paket: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5

    },
    nama: {
        fontWeight: 'regular',
        fontSize: 14,
        color: COLORS.lightBlue
    },
    tanggal: {
        fontWeight: '500',
        fontSize: 13,
        color: 'black'
    },
    jam: {
        fontWeight: 'bold',
        fontSize: 13,
        color: COLORS.lightBlue
    },
    jumlah: {
        fontSize: 13,
        color: '#444444',
    },
    garis: {
        borderWidth: 0.5,
        borderColor: "rgba(0, 0, 0, 0.1)",
        borderRadius: 5
    },
    garis1: {
        borderWidth: 0.5,
        borderColor: "rgba(0, 0, 0, 0.1)",
        width: '85%',
        alignSelf: 'center'
    },
    // icon: {
    //   flexDirection: 'row',
    //   flex: 1,
    //   justifyContent: 'flex-end',
    //   alignItems: 'center',
    // },
});