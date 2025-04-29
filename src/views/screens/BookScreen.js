import { TouchableOpacity, StyleSheet, Text, View, Alert } from 'react-native'
import React, { useState, useLayoutEffect, useEffect } from 'react'
import InputData from '../components/input2';
import { auth, db } from '../../config/firebase'

const BookScreen = ({ navigation }) => {
    const [nama, setNama] = useState('');
    const [nomorHp, setNomorHp] = useState('');
    const [jumlahOrang, setJumlah] = useState('');
    const [usersData, setUsersData] = useState([]);
    const currentUserEmail = auth.currentUser?.email;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const snapshot = await db.collection('users').where('email', '==', currentUserEmail).get();
                const user = [];
                snapshot.forEach((doc) => {
                    user.push({ id: doc.id, data: doc.data() });

                });
                setUsersData(user);
            } catch (error) {
                console.log('Error fetching Firestore data:', error);
            }
        };

        fetchData();
    }, []);



    const createOrders = async () => {
        if (usersData && jumlahOrang) {
            const currentUserId = auth.currentUser.uid;
            // const currentUserEmail = auth.currentUser?.email;

            const nameUser = usersData.map((userName) => (
                ( userName.data.name)
            ))

            const phoneUser = usersData.map((phoneNumber) => (
                ( phoneNumber.data.phone)
            ))

            const emailUser = usersData.map((emailName) => (
                (emailName.data.email)
            ))

            
        
            
            const dataCollection = await db.collection('dataBooking')
            const orders = {
                userId: currentUserId,
                email: emailUser,
                userName: nameUser,
                nomorHP: phoneUser,
                jumlahOrang: jumlahOrang
            }

            console.log(usersData)
            dataCollection
                .doc(auth.uid)
                .set({ orders })
                .then(() => {
                    Alert.alert('Sukses', 'Booking Tersimpan');
                    navigation.replace('HomeScreen');
                }).catch(error => alert(error))
        } else {
            Alert.alert('Error', 'Nama, Nomor HP, dan Jumlah orang wajib diisi');
        }
    }

    return (
        <View style={styles.pages}>
            {usersData.map((userName) => (
                <Text style={styles.nama}>{userName.data.name}</Text>
            ))}
            
            {/* <InputData
                label="Nama"
                placeholder="Masukkan Nama"
                onChangeText={(nama) => setNama(nama)}
                value={nama}
                namaState="nama"
            /> */}
            {/* <InputData
                label="No. HP"
                placeholder="Masukkan No. HP"
                keyboardType="number-pad"
                onChangeText={(nomorHP) => setNomorHp(nomorHP)}
                value={nomorHp}
                namaState="nomorHP"
            /> */}

            <InputData
                label="Jumlah Orang"
                placeholder="Masukkan Jumlah Orang"
                isTextArea={true}
                onChangeText={(jumlahOrang) => setJumlah(jumlahOrang)}
                value={jumlahOrang}
                namaState="jumlahOrang"
            />

            <TouchableOpacity style={styles.tombol} onPress={createOrders}>
                <Text style={styles.textTombol}>SUBMIT</Text>
            </TouchableOpacity>

        </View>
    )
}

export default BookScreen

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        padding: 30,
        marginTop:50
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
})