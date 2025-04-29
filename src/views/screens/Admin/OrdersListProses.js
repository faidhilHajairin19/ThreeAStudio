import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native';
import { auth, db } from '../../../config/firebase'
import CardOrder from './CardOrderAdmin';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const OrdersListProses = ({ navigation }) => {
    const [ordersData, setOrdersData] = useState([]);
    const currentUserId = auth.currentUser.uid;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const snapshot = await db.collection('dataBooking')
                    .where('statusPesanan', '==', false)
                    .where('statusSelesai', '==', false)
                    .orderBy('tanggalFoto', 'asc')
                    .get();
                const orders = [];
                snapshot.forEach((doc) => {
                    orders.push({ id: doc.id, data: doc.data() });

                });
                setOrdersData(orders);
            } catch (error) {
                console.log('Error fetching Firestore data:', error);
            }
        };

        fetchData();
    }, []);
    //   console.log(JSON.stringify(ordersData))
    // console.log(currentUserId)

    return (

        <SafeAreaView style={styles.page}>
            <ScrollView style={{ height: 584 }}>
                <View style={styles.listKontak}>
                    {ordersData.length > 0 ? (
                        ordersData.map((item) => (
                            <CardOrder key={item.id} id={item.id} item={item} />
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


    );

};

export default OrdersListProses;

const styles = StyleSheet.create({
    page: {

        backgroundColor: '#fff'
    },
    header: {
        paddingHorizontal: 20,
        paddingTop: 30,
    },
    title: {
        marginTop: 40,
        fontSize: 20,
        fontWeight: 'bold',
    },
    garis: {
        marginTop: 10,
        borderWidth: 0.5,
        borderColor: "rgba(0, 0, 0, 0.1)",
    },
    listKontak: {
        paddingHorizontal: 10,
        marginVertical: 20,

    },
    image: {
        borderRadius: 60,
        width: 265,
        height: 250,

    }

    // wrapperButton: {
    //   flex: 1,
    //   position: 'absolute',
    //   bottom: 0,
    //   right: 0,
    //   margin: 30,
    // },

});