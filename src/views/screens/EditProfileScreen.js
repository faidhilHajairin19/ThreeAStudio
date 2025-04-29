import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, SafeAreaView, Keyboard, Alert, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { auth, db } from '../../config/firebase'
import Button from '../components/Button';


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import InputData from '../components/input2';


const EditProfileScreen = ({ navigation }) => {

    const [name, setName] = useState('')

    const [phone, setPhone] = useState('')


    const currentUserEmail = auth.currentUser.email;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const snapshot = await db.collection('users')
                    .where('email', '==', currentUserEmail)
                    .get();
                snapshot.forEach((doc) => {
                    nama = (doc.data().name)
                    noHp = (doc.data().phone)

                });
                setName(nama)
                setPhone(noHp)
                console.log(nama)
                console.log(noHp)
            } catch (error) {
                console.log('Error fetching Firestore data:', error);
            }

        };

        fetchData();
    }, []);



    const updateData = async () => {
        const editName = name
        const editPhone = phone
        const currentUserEmail = auth.currentUser.email;



        try {
            const usersSnapshot = await db.collection('users').where('email', '==', currentUserEmail).get();
            const dataBookingSnapshot = await db.collection('dataBooking').where('email', '==', currentUserEmail).get();
            usersSnapshot.forEach((doc) => {
                const userDocRef = db.collection('users').doc(doc.id);
                const userUpdate = {
                    name: editName,
                    phone: editPhone
                };
                userDocRef.update(userUpdate)
                    .then(() => {
                        Alert.alert('Sukses', 'Data berhasil diubah');
                        navigation.replace('ProfileScreen');
                    })
                    .catch((error) => {
                        alert(error);
                    });
            });


            dataBookingSnapshot.forEach((doc) => {
                const dataBookingDocRef = db.collection('dataBooking').doc(doc.id);
                const dataBookingUpdate = {
                    userNameAkun: editName,
                    nomorHP: editPhone
                    // Field lain yang ingin diperbarui di koleksi 'products'
                };
                dataBookingDocRef.update(dataBookingUpdate)
                // .then(() => {
                //     Alert.alert('Sukses', 'Data berhasil diubah');
                //     navigation.replace('ProfileScreen');
                // })
                // .catch((error) => {
                //     alert(error);
                // });
            });

        } catch (error) {
            console.error('Error updating data:', error);
        }
    };


    
    const deleteData = async () => {
        try {
            const usersSnapshot = await db.collection('users').where('email', '==', currentUserEmail).get();
            usersSnapshot.forEach((doc) => {
                const userDocRef = db.collection('users').doc(doc.id);
                userDocRef.delete()
                    .catch((error) => {
                        alert(error);
                    });
            })
        }
        catch (error) {
            console.error('Error updating data:', error);
        }
    };

    const hapusAkun = async () => {
        // const deleteData = async () => {
        //     try {
        //         const usersSnapshot = await db.collection('users').where('name', '==', myParam).get();
        //         usersSnapshot.forEach((doc) => {
        //             const userDocRef = db.collection('users').doc(doc.id);
        //             userDocRef.delete()
        //                 .then(() => {
        //                     Alert.alert('Sukses', 'Data berhasil dihapus');
        //                     navigation.replace('AdminScreen');
        //                 })
        //                 .catch((error) => {
        //                     alert(error);
        //                 });
        //         })
        //     }
        //     catch (error) {
        //         console.error('Error updating data:', error);
        //     }
        // };
        try {
          // Tampilkan konfirmasi dengan menggunakan Alert
          Alert.alert(
            'Konfirmasi',
            'Apakah Anda yakin ingin menghapus akun?',
            [
              {
                text: 'Batal',
                style: 'cancel',
              },
              {
                text: 'Ya, Hapus Akun',
                onPress: async () => {
                  const user = auth.currentUser;
                  await user.delete();
                  console.log('Akun berhasil dihapus.');
                 await deleteData();
                  // Lakukan navigasi atau tindakan lain setelah penghapusan akun berhasil.
                  navigation.replace('OnboardingScreen');
                },
                style: 'destructive',
              },
            ],
            { cancelable: true }
          );
        } catch (error) {
          console.error('Gagal menghapus akun:', error.message);
        }
      };
      
      const showButton = currentUserEmail !== '3angle.photographyy@gmail.com'
      let hapusButton = null;
      if (showButton) {
          hapusButton = (
              <View style={{ marginTop: 20 }}>
                  <TouchableOpacity onPress={hapusAkun} activeOpacity={0.7} style={{
                      backgroundColor: '#ED2B2A',
                      width: '70%',
                      padding: 15,
                      borderRadius: 10,
                      marginTop: 20,
                      flexDirection: 'row',
                      paddingHorizontal: 63,
                      justifyContent: 'center'
                  }}>
                      <Text style={{ color: 'white', fontWeight: '700', fontSize: 16,}}>Hapus Akun</Text>
                  </TouchableOpacity>
              </View>
          );
      }

    return (
        <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
            <KeyboardAvoidingView style={{justifyContent: 'center'}} behavior={Platform.OS === "ios" ? "padding" : "height"}>

            <View style={{ paddingTop: 50, paddingHorizontal: 20 }}>
                <View style={{ flexDirection: 'row', }}>
                    <Icon
                        onPress={() => navigation.navigate("ProfileScreen")}
                        name="keyboard-backspace"
                        style={styles.icon}
                    />
                    <Text style={{ marginTop: 3, marginLeft: 5, fontSize: 18, fontWeight: 'bold' }}>Ubah Profil</Text>
                </View>

                <View style={{ marginVertical: 5 }}>
                    <View>
                        <InputData
                            onChangeText={text => setName(text)}
                            value={name}
                            placeholderTextColor="black"
                            label="Nama"
                        />
                        <View style={styles.garis} />
                        <InputData
                            keyboardType="numeric"
                            onChangeText={text => setPhone(text)}
                            value={phone}
                            label="Nomor Hp"
                        />
                        <View style={styles.garis} />
                    </View>



                    <Button title="Simpan Perubahan" onPress={updateData} />
                    {hapusButton}
                    {/* <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={hapusAkun}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>Hapus Akun</Text>
                            <Icon
                                name="trash-can"
                                style={{ color: 'white', fontSize: 20, marginLeft: 10 }}
                            />
                        </TouchableOpacity> */}
                </View>
            </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};







export default EditProfileScreen

const styles = StyleSheet.create({
    icon: {
        color: '#111111',
        width: 35,
        fontSize: 32,
        //backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: 20
    },
    garis: {
        borderWidth: 0.5,
        borderColor: "rgba(0, 0, 0, 0.1)",
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      button: {
        backgroundColor: '#ED2B2A',
        width: '70%',
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
        flexDirection: 'row',
        paddingHorizontal: 63,
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
})