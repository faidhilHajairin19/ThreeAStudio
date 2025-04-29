import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native';
import { auth, db } from '../../config/firebase'
import CardOrder from '../components/CardOrder';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const OrdersScreenAktif = ({ navigation }) => {
  const [ordersData, setOrdersData] = useState([]);
  const currentUserId = auth.currentUser.uid;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await db.collection('dataBooking')
          .where('userId', '==', currentUserId)
          .where('statusPesanan', '==', true)
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
  //console.log(JSON.stringify(ordersData))
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
            <View style={{ alignItems: 'center', justifyContent: 'center', height: 584 }}>
              <View style={{}}>
                <Image style={styles.image} source={require('../../images/PesanFoto.png')} />
              </View>
              <View style={{}}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18, marginTop: 20, marginBottom: 5 }}>
                  Pesan Sesi Foto, yuk!</Text>
                <Text style={{ textAlign: 'center', paddingHorizontal: 30 }}>
                  Pilih dan pesan berbagai macam paket foto dari kami yang menarik. </Text>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>


  );

};

export default OrdersScreenAktif;

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