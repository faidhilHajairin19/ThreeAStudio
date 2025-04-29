import { StyleSheet, Text, View, SafeAreaView, Alert, Modal, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import InputData from '../../components/input2';
import Button from '../../components/Button';
import { auth, db } from '../../../config/firebase'
import COLORS from '../../../conts/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import DatePicker from "react-native-modern-datepicker";
import { getFormatedDate } from "react-native-modern-datepicker";


const EditOrderScreen = ({ route, navigation }) => {
    const [namaPemesan, setNamaPemesan] = useState('')
    const [paket, setPaket] = useState('')
    const [jumlahOrang, setJumlahOrang] = useState('')
    const [time, setTime] = useState('')
    const id = route.params.id;
    // console.log(id)

    const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
    const today = new Date();
    const startDate = getFormatedDate(
        today.setDate(today.getDate()),
        "YYYY/MM/DD"
    );
    const [selectedStartDate, setSelectedStartDate] = useState("Pilih Tanggal");
    const [startedDate, setStartedDate] = useState("");

    function handleChangeStartDate(propDate) {
        setStartedDate(propDate);
    }

    function handleOnPressStartDate() {
        setOpenStartDatePicker(!openStartDatePicker);
    }



    useEffect(() => {
        const fetchData = async () => {
            try {
                const snapshot = await db.collection('dataBooking')
                const documentId = (id);
                const documentRef = snapshot.doc(documentId);
                documentRef
                    .get()
                    .then((doc) => {
                        nama = (doc.data().pesananAtasNama)
                        paketFoto = (doc.data().paketFoto)
                        jumlah = (doc.data().jumlahOrang)
                        tanggal = (doc.data().tanggalFoto)
                        jam = (doc.data().jamFoto)
                        statusPesanan = (doc.data().statusPesanan)

                    });
                setNamaPemesan(nama)
                setPaket(paketFoto)
                setJumlahOrang(jumlah)
                setSelectedStartDate(tanggal)
                setTime(jam)


            } catch (error) {
                console.log('Error fetching Firestore data:', error);
            }

        };

        fetchData();
    }, []);

    //console.log(statusAktif)
    const handleStatusAktif = async () => {
        const id = route.params.id;
        const isAktif = (false);
        const isDoneEdit = (false);

        try {
            const dataBookingSnapshot = await db.collection('dataBooking');
            const documentId = (id);
            const documentRef = dataBookingSnapshot.doc(documentId);


            const status = {
                statusPesanan: isAktif,
                statusSelesai: isDoneEdit
            };

            documentRef.update(status)
            .then(() => {
                Alert.alert('Sukses', 'Data berhasil diubah');
                navigation.replace('AdminScreen');
            })
            .catch((error) => {
                alert(error);
            });
            console.log('Nilai berhasil diubah menjadi false.');
        } catch (error) {
            console.error('Terjadi kesalahan saat memperbarui data:', error);
        }
    }

    const handleStatusSelesai = async () => {
        const id = route.params.id;
        const isAktif = (false);
        const isDoneEdit = (true);

        try {
            const dataBookingSnapshot = await db.collection('dataBooking');
            const documentId = (id);
            const documentRef = dataBookingSnapshot.doc(documentId);


            const status = {
                statusPesanan: isAktif,
                statusSelesai: isDoneEdit
            };

            documentRef.update(status)
            .then(() => {
                Alert.alert('Sukses', 'Data berhasil diubah');
                navigation.replace('AdminScreen');
            })
            .catch((error) => {
                alert(error);
            });
            console.log('Nilai berhasil diubah menjadi false.');
        } catch (error) {
            console.error('Terjadi kesalahan saat memperbarui data:', error);
        }
    }


    const updateData = async () => {
        const ubahNama = namaPemesan
        const ubahPaket = paket
        const ubahJumlahOrang = parseInt(jumlahOrang)
        const ubahTanggal = selectedStartDate
        const currentUserEmail = auth.currentUser.email;
        const myParam = route.params.paramKey;
        const id = route.params.id;


        try {
            const dataBookingSnapshot = await db.collection('dataBooking');
            const documentId = (id);
            const documentRef = dataBookingSnapshot.doc(documentId);

            // dataBookingSnapshot.forEach((doc) => {
            //     const dataBookingDocRef = db.collection('dataBooking').doc(doc.id);
            const dataBookingUpdate = {
                pesananAtasNama: ubahNama,
                paketFoto: ubahPaket,
                jumlahOrang: ubahJumlahOrang,
                tanggalFoto: ubahTanggal

                // Field lain yang ingin diperbarui di koleksi 'products'
            };
            documentRef.update(dataBookingUpdate)
                .then(() => {
                    Alert.alert('Sukses', 'Data berhasil diubah');
                    navigation.replace('AdminScreen');
                })
                .catch((error) => {
                    alert(error);
                });


        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    const handleDateChange = (selectedStartDate) => {
        // Jika tanggal telah dipilih, ubah format menjadi yang diinginkan
        if (selectedStartDate) {
            const formattedDate = moment(selectedStartDate, 'YYYY-MM-DD').format('DD MMM YYYY');
            setSelectedStartDate(formattedDate);
        }
    };

    const deleteData = async () => {
        const id = route.params.id;
        try {
            const dataBookingSnapshot = await db.collection('dataBooking');
            const documentId = (id);
            const documentRef = dataBookingSnapshot.doc(documentId);
            documentRef.delete()
                .then(() => {
                    Alert.alert('Sukses', 'Data berhasil dihapus');
                    navigation.replace('AdminScreen');
                })
                .catch((error) => {
                    alert(error);
                });
        }
        catch (error) {
            console.error('Error updating data:', error);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ paddingTop: 50, paddingHorizontal: 20 }}>
                <View style={{ flexDirection: 'row', }}>
                    <Icon
                        onPress={() => navigation.navigate("AdminScreen")}
                        name="keyboard-backspace"
                        style={styles.icon}
                    />
                    <Text style={{ marginTop: 3, marginLeft: 5, fontSize: 18, fontWeight: 'bold' }}>Ubah Data Order</Text>
                </View>
                <View style={{ marginVertical: 5 }}>
                    <View>
                        <InputData
                            onChangeText={text => setNamaPemesan(text)}
                            value={namaPemesan}
                            placeholderTextColor="black"
                            label="Nama Pemesan"
                        />
                        <View style={styles.garis} />
                        <InputData
                            onChangeText={text => setPaket(text)}
                            value={paket}
                            placeholderTextColor="black"
                            label="Paket foto"
                        />
                        <View style={styles.garis} />
                        <InputData
                            keyboardType="numeric"
                            onChangeText={text => setJumlahOrang(text)}
                            value={jumlahOrang.toString()}
                            label="Jumlah Orang"
                        />
                        <View style={styles.garis} />
                        <InputData
                            keyboardType="numeric"
                            onChangeText={text => setTime(text)}
                            value={time}
                            label="Jam Foto"
                        />

                        <View style={{ width: "100%", marginTop: 10, marginBottom: 20 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={styles.inputBtn}
                                    onPress={handleOnPressStartDate}
                                >
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Icon name="calendar" style={{ color: '#111111', fontSize: 28 }}
                                        />
                                        <Text style={{
                                            marginLeft: 5,
                                            fontWeight: "500",
                                            fontSize: 14,
                                            color: "#111111"
                                        }}>{selectedStartDate}</Text>

                                    </View>
                                </TouchableOpacity>



                            </View>
                            <Modal
                                animationType="fade"
                                transparent={true}
                                visible={openStartDatePicker}
                            >
                                <View style={styles.centeredView}>
                                    <View style={styles.modalView}>
                                        <DatePicker
                                            mode="calendar"
                                            minimumDate={startDate}
                                            selected={startedDate}
                                            onDateChanged={handleChangeStartDate}
                                            onSelectedChange={handleDateChange}
                                            options={{
                                                backgroundColor: "#fff",
                                                textHeaderColor: COLORS.lightBlue,
                                                textDefaultColor: "#000000",
                                                selectedTextColor: "#000000",
                                                mainColor: COLORS.lightBlue,
                                                textSecondaryColor: "#000000",
                                                borderColor: COLORS.lightBlue,
                                            }}
                                        />

                                        <TouchableOpacity onPress={handleOnPressStartDate} style={{ marginBottom: 20 }}>
                                            <Text style={{ color: "black" }}>Tutup</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Modal>
                        </View>

                    </View>
                    <View style={{ marginTop: 20, flexDirection:'row', justifyContent:'center' }}>
                        <TouchableOpacity onPress={handleStatusAktif} activeOpacity={0.7} style={{
                            backgroundColor: COLORS.lightBlue,
                            width: '48%',
                            padding: 15,
                            borderRadius: 10,
                            marginHorizontal:5,
                        }}>
                            <Text style={{ color: 'white', fontWeight: 'bold', textAlign:'center' }}>Sudah Foto</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleStatusSelesai} activeOpacity={0.7} style={{
                            backgroundColor: COLORS.green,
                            width: '48%',
                            padding: 15,
                            borderRadius: 10,
                            marginHorizontal:5,
                        }}>
                            <Text style={{ color: 'white', fontWeight: 'bold', textAlign:'center', fontSize:12 }}>Sudah Edit dan Cetak</Text>
                        </TouchableOpacity>
                    </View>



                    <Button title="Simpan Perubahan" onPress={updateData} />

                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={deleteData}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Hapus Data</Text>
                        <Icon
                            name="trash-can"
                            style={{ color: 'white', fontSize: 20, marginLeft: 10 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default EditOrderScreen

const styles = StyleSheet.create({
    icon: {
        color: '#111111',
        width: 35,
        fontSize: 32,
        //backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: 20
    },
    inputBtn: {
        borderWidth: 2,
        borderRadius: 4,
        borderColor: "#111111",
        height: 50,
        width: 320,
        paddingLeft: 8,
        fontSize: 18,
        justifyContent: "center",
        marginTop: 14,
    },
    submitBtn: {
        backgroundColor: "#342342",
        paddingVertical: 22,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        paddingVertical: 12,
        marginVertical: 16,
    },
    centeredView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    modalView: {
        margin: 0,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        padding: 10,
        width: "90%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
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