import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import COLORS from '../../conts/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const CardOrder = ({ id, item, kontakItem, navigation, removeData }) => {
  return (<View>
    <View
      style={styles.container}
    >
      <View style={{ flexDirection: 'row', justifyContent:'center', alignItems:'center' }}>
        <Image style={styles.image} source={require('../../images/logo1.png')} />
        <View key={item.id}>
          <Text style={styles.paket}>{item.data.paketFoto}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="account" style={{fontSize:18, marginRight:5}} />
            <Text style={styles.nama}>{item.data.pesananAtasNama}</Text>
          </View>
          <View style={{ flexDirection: 'row' }} >
            <Icon name="account-multiple" style={{fontSize:18, marginRight:5}}/>
          <Text style={styles.jumlah}>Jumlah Orang ({item.data.jumlahOrang})</Text>
          </View>
          <Text style={{fontSize: 13, color: '#444444',marginTop:10}}>Tanggal Foto</Text>
          <View style={{ flexDirection: 'row', marginTop:2 }}>
          <Icon name="calendar-blank" style={{fontSize:18, marginRight:5}}/>
            <Text style={styles.tanggal}>{item.data.tanggalFoto}, </Text>
            <Text style={styles.jam}>{item.data.jamFoto}</Text>
          </View>
        </View>
      </View>

      {/* <View style={styles.icon}>
        <FontAwesomeIcon icon={faEdit} color={'orange'} size={25} onPress={() => navigation.navigate('EditKontak', {id: id})}/>
        <FontAwesomeIcon icon={faTimes} color={'red'} size={25} onPress={() => removeData(id)}/>
      </View> */}
    </View>
    <View style={styles.garis}></View>
  </View>
  );
};

export default CardOrder;

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
    marginBottom:5

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
  image: {
    width: 55,
    height: 55,
    marginRight: 20,
   
    
  }
  // icon: {
  //   flexDirection: 'row',
  //   flex: 1,
  //   justifyContent: 'flex-end',
  //   alignItems: 'center',
  // },
});