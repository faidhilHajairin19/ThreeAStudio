import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Alert} from 'react-native';
import InputData from '../components/input2';
import { auth, db } from '../../config/firebase'



export default class BookingScreen extends Component {
  constructor(props) {
    super(props);
    

    this.state = {
      nama: '',
      nomorHP: '',
      jumlahOrang: '',
    };
  }
  
  

  onChangeText = (namaState, value) => {
    this.setState({
      [namaState]: value,
    });
  };

  onSubmit = () => {
    if(this.state.nama && this.state.nomorHP && this.state.jumlahOrang) {
      
      // const users = db.collection('users')
      // .get()
      // .then((usersSnapshot) => {
      //   const users = usersSnapshot.docs.map((doc) => doc.data());
      //   users.then((data) => {
      //     data.name;
      //   })
      // })
      
      const currentUserId = auth.currentUser.uid;
      const currentUserEmail = auth.currentUser?.email;
      const dataCollection = db.collection('dataBooking')
      const orders = {
        userId: currentUserId,
        email: currentUserEmail,
        // userName: users,
        nama: this.state.nama,
        nomorHP: this.state.nomorHP,
        jumlahOrang: this.state.jumlahOrang
      }

      dataCollection
        .doc(auth.uid)
        .set({orders})
        .then(() => {
            Alert.alert('Sukses', 'Booking Tersimpan');
            this.props.navigation.replace('HomeScreen');
          })
        .catch((error) => {
          console.log("Error : ", error);
        })


    }else {
      Alert.alert('Error', 'Nama, Nomor HP, dan Jumlah orang wajib diisi');
    }
    
  };

  render() {
    return (
      <View style={styles.pages}>
        <InputData
          label="Nama"
          placeholder="Masukkan Nama"
          onChangeText={this.onChangeText}
          value={this.state.nama}
          namaState="nama"
        />
        <InputData
          label="No. HP"
          placeholder="Masukkan No. HP"
          keyboardType="number-pad"
          onChangeText={this.onChangeText}
          value={this.state.nomorHP}
          namaState="nomorHP"
        />

        <InputData
          label="Jumlah Orang"
          placeholder="Masukkan Jumlah Orang"
          isTextArea={true}
          onChangeText={this.onChangeText}
          value={this.state.jumlahOrang}
          namaState="jumlahOrang"
        />

        <TouchableOpacity style={styles.tombol} onPress={() => this.onSubmit()}>
          <Text style={styles.textTombol}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    padding: 30,
  },
  tombol: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  textTombol: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});