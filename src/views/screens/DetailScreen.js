import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image, Alert, Modal, TouchableOpacity, ImageBackground, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from 'react-router-dom';
import { useState, useEffect } from 'react'
import COLORS from '../../conts/colors';
import Button3 from '../components/Button3';
import Button4 from '../components/Button4';
import moment from 'moment';
import DatePicker from "react-native-modern-datepicker";
import { getFormatedDate } from "react-native-modern-datepicker";
import InputData from '../components/input3';
import { auth, db } from '../../config/firebase'
import firebase from 'firebase/app';
import 'firebase/firestore';
import SelectTime from '../components/SelectTime';
import Input from '../components/Input';

const DetailScreen = ({ route, navigation }) => {
    const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
    const today = new Date();
    const startDate = getFormatedDate(
        today.setDate(today.getDate()),
        "YYYY/MM/DD"
    );
    const [selectedStartDate, setSelectedStartDate] = useState('Pilih Tanggal');
    const [startedDate, setStartedDate] = useState("");

    function handleChangeStartDate(propDate) {
        setStartedDate(propDate);
    }

    function handleOnPressStartDate() {
        setOpenStartDatePicker(!openStartDatePicker);
    }

    let [tambahan, setTambahan] = useState(0);
    const increment2 = () => {
        const newValue = tambahan += 1;
        setTambahan(newValue)
    }
    const decrement2 = () => {
        if (tambahan > 0) {
            const newValue = tambahan -= 1;
            setTambahan(newValue)
        }
    }

    let [time, setTime] = useState(9)
    const detTime = ":00"
    const incrementTime = () => {
        if (time < 20) {
            const newValue = time += 1;
            setTime(newValue)
        }
    }
    const decrementTime = () => {
        if (time > 9) {
            const newValue = time -= 1;
            setTime(newValue)
        }
    }

    const myParam = route.params.paramKey;
    let displayDetail = null;
    let imageSource = null;

    const [atasNama, setAtasNama] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const currentUserEmail = auth.currentUser?.email;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const snapshot = await db.collection('users').where('email', '==', currentUserEmail).get();

                snapshot.forEach((doc) => {
                    nama = (doc.data().name)
                    noHp = (doc.data().phone)
                    eemail = (doc.data().email)

                });
                setName(nama)
                setPhone(noHp)
                setEmail(eemail)
            } catch (error) {
                console.log('Error fetching Firestore data:', error);
            }
        };

        fetchData();
    }, []);



    const createOrders = async () => {
        const bookingsRef = db.collection('dataBooking');

        const jam = time + detTime
        // Mengecek apakah jam sudah ada di Firestore pada tanggal yang dipilih
        const existingBooking = await bookingsRef
            .where('tanggalFoto', '==', selectedStartDate)
            .where('jamFoto', '==', jam)
            .get();

        if (selectedStartDate === "Pilih Tanggal") {
            Alert.alert('ooppss', 'Mohon Pilih Tanggal Untuk Booking Foto');

        }
        else if (atasNama === "") {
            Alert.alert('ooppss', 'Silahkan isi nama pemesan');
        }
        else if (!existingBooking.empty) {
            Alert.alert('Yaaahhh kami mohon maaf', 'Jam yang kamu pilih sudah ada yang pesan, Silahkan pilih jam yang lain yaaa');
            return;
        }
        else {
            const currentUserId = auth.currentUser.uid;
            const isAktif = (true);
            const isDoneEdit = (false);
            const addTime = time + detTime
            const timestamp = firebase.firestore.FieldValue.serverTimestamp();

            const nameUser = name

            const phoneUser = phone

            const emailUser = email

            const jumlahOrang = jumlah += tambahan;



            const dataCollection = await db.collection('dataBooking')
            const orders = {
                userId: currentUserId,
                email: emailUser,
                userNameAkun: nameUser,
                pesananAtasNama: atasNama,
                nomorHP: phoneUser,
                paketFoto: myParam,
                jumlahOrang: jumlahOrang,
                tanggalFoto: selectedStartDate,
                statusPesanan: isAktif,
                statusSelesai: isDoneEdit,
                jamFoto: addTime,
                timeStamp: timestamp,

            }

            dataCollection
                .doc(auth.uid)
                .set(orders)
                .then(() => {
                    Alert.alert('Sukses', 'Booking Tersimpan');
                    navigation.replace('HomeScreen');
                }).catch(error => alert(error))
        }
    }

    if (myParam === 'Group Pelajar/Mahasiswa 1') {
        displayDetail = require('../../conts/detail').GroupPelajar1
        imageSource = require('../../images/GroupP1.png')

        value = [jumlah, setJumlah] = useState(1);

        const increment = () => {
            if (jumlah < 10) {
                const newValue = jumlah += 1;
                setJumlah(newValue)
            }
        }

        const decrement = () => {
            if (jumlah > 1) {
                const newValue = jumlah -= 1;
                setJumlah(newValue)
            }
        }

        menambah = increment
        mengurang = decrement
        // jumlahOrang = value




    }
    else if (myParam === 'Group Pelajar/Mahasiswa 2') {
        displayDetail = require('../../conts/detail').GroupPelajar2
        imageSource = require('../../images/GroupP2.png')

        value = [jumlah, setJumlah] = useState(14);


        const increment = () => {
            if (jumlah < 20) {
                const newValue = jumlah += 1;
                setJumlah(newValue)
            }
        }

        const decrement = () => {
            if (jumlah > 14) {
                const newValue = jumlah -= 1;
                setJumlah(newValue)
            }
        }

        menambah = increment
        mengurang = decrement

    }
    else if (myParam === 'Group Pelajar/Mahasiswa 3') {
        displayDetail = require('../../conts/detail').GroupPelajar3
        imageSource = require('../../images/GroupP3.png')

        value = [jumlah, setJumlah] = useState(24);


        const increment = () => {
            if (jumlah < 30) {
                const newValue = jumlah += 1;
                setJumlah(newValue)
            }
        }

        const decrement = () => {
            if (jumlah > 24) {
                const newValue = jumlah -= 1;
                setJumlah(newValue)
            }
        }

        menambah = increment
        mengurang = decrement

    }
    else if (myParam === 'Group Pelajar/Mahasiswa 4') {
        displayDetail = require('../../conts/detail').GroupPelajar4
        imageSource = require('../../images/GroupP4.png')

        value = [jumlah, setJumlah] = useState(34);


        const increment = () => {
            if (jumlah < 40) {
                const newValue = jumlah += 1;
                setJumlah(newValue)
            }
        }

        const decrement = () => {
            if (jumlah > 34) {
                const newValue = jumlah -= 1;
                setJumlah(newValue)
            }
        }

        menambah = increment
        mengurang = decrement

    }
    else if (myParam === 'Group Umum 1') {
        displayDetail = require('../../conts/detail').GroupUmum1
        imageSource = require('../../images/GroupU1.png')

        value = [jumlah, setJumlah] = useState(1);


        const increment = () => {
            if (jumlah < 10) {
                const newValue = jumlah += 1;
                setJumlah(newValue)
            }
        }

        const decrement = () => {
            if (jumlah > 1) {
                const newValue = jumlah -= 1;
                setJumlah(newValue)
            }
        }

        menambah = increment
        mengurang = decrement

    }
    else if (myParam === 'Family Standart') {
        displayDetail = require('../../conts/detail').FamilyStandart
        imageSource = require('../../images/FamSt.png')

        value = [jumlah, setJumlah] = useState(2);


        const increment = () => {
            if (jumlah < 5) {
                const newValue = jumlah += 1;
                setJumlah(newValue)
            }
        }

        const decrement = () => {
            if (jumlah > 2) {
                const newValue = jumlah -= 1;
                setJumlah(newValue)
            }
        }

        menambah = increment
        mengurang = decrement

    }
    else if (myParam === 'Family Bronze') {
        displayDetail = require('../../conts/detail').FamilyBronze
        imageSource = require('../../images/FamBrz.png')

        value = [jumlah, setJumlah] = useState(6);


        const increment = () => {
            if (jumlah < 8) {
                const newValue = jumlah += 1;
                setJumlah(newValue)
            }
        }

        const decrement = () => {
            if (jumlah > 6) {
                const newValue = jumlah -= 1;
                setJumlah(newValue)
            }
        }

        menambah = increment
        mengurang = decrement

    }
    else if (myParam === 'Family Silver') {
        displayDetail = require('../../conts/detail').FamilySilver
        imageSource = require('../../images/FamSil.png')

        value = [jumlah, setJumlah] = useState(9);


        const increment = () => {
            if (jumlah < 12) {
                const newValue = jumlah += 1;
                setJumlah(newValue)
            }
        }

        const decrement = () => {
            if (jumlah > 9) {
                const newValue = jumlah -= 1;
                setJumlah(newValue)
            }
        }

        menambah = increment
        mengurang = decrement

    }
    else if (myParam === 'Family Gold') {
        displayDetail = require('../../conts/detail').FamilyGold
        imageSource = require('../../images/FamGold.png')

        value = [jumlah, setJumlah] = useState(14);


        const increment = () => {
            if (jumlah < 20) {
                const newValue = jumlah += 1;
                setJumlah(newValue)
            }
        }

        const decrement = () => {
            if (jumlah > 14) {
                const newValue = jumlah -= 1;
                setJumlah(newValue)
            }
        }

        menambah = increment
        mengurang = decrement

    }

    else if (myParam === 'Graduation Standart 1') {
        displayDetail = require('../../conts/detail').GradSt1
        imageSource = require('../../images/GradSt1.png')

        value = [jumlah, setJumlah] = useState(1);


        const increment = () => {
            if (jumlah < 5) {
                const newValue = jumlah += 1;
                setJumlah(newValue)
            }
        }

        const decrement = () => {
            if (jumlah > 1) {
                const newValue = jumlah -= 1;
                setJumlah(newValue)
            }
        }

        menambah = increment
        mengurang = decrement

    }
    else if (myParam === 'Graduation Standart 2') {
        displayDetail = require('../../conts/detail').GradSt2
        imageSource = require('../../images/GradSt2.png')

        value = [jumlah, setJumlah] = useState(6);


        const increment = () => {
            if (jumlah < 10) {
                const newValue = jumlah += 1;
                setJumlah(newValue)
            }
        }

        const decrement = () => {
            if (jumlah > 6) {
                const newValue = jumlah -= 1;
                setJumlah(newValue)
            }
        }

        menambah = increment
        mengurang = decrement

    }
    else if (myParam === 'Graduation Medium 1') {
        displayDetail = require('../../conts/detail').GradMd1
        imageSource = require('../../images/GradMed1.png')

        value = [jumlah, setJumlah] = useState(1);


        const increment = () => {
            if (jumlah < 10) {
                const newValue = jumlah += 1;
                setJumlah(newValue)
            }
        }

        const decrement = () => {
            if (jumlah > 1) {
                const newValue = jumlah -= 1;
                setJumlah(newValue)
            }
        }

        menambah = increment
        mengurang = decrement

    }
    else if (myParam === 'Graduation Medium 2') {
        displayDetail = require('../../conts/detail').GradMd2
        imageSource = require('../../images/GradMed2.png')

        value = [jumlah, setJumlah] = useState(1);


        const increment = () => {
            if (jumlah < 12) {
                const newValue = jumlah += 1;
                setJumlah(newValue)
            }
        }

        const decrement = () => {
            if (jumlah > 1) {
                const newValue = jumlah -= 1;
                setJumlah(newValue)
            }
        }

        menambah = increment
        mengurang = decrement

    }
    else if (myParam === 'Graduation Premium 1') {
        displayDetail = require('../../conts/detail').GradPrem1
        imageSource = require('../../images/GradPrem1.png')

        value = [jumlah, setJumlah] = useState(1);


        const increment = () => {
            if (jumlah < 8) {
                const newValue = jumlah += 1;
                setJumlah(newValue)
            }
        }

        const decrement = () => {
            if (jumlah > 1) {
                const newValue = jumlah -= 1;
                setJumlah(newValue)
            }
        }

        menambah = increment
        mengurang = decrement

    }
    else if (myParam === 'Graduation Premium 2') {
        displayDetail = require('../../conts/detail').GradPrem2
        imageSource = require('../../images/GradPrem2.png')

        value = [jumlah, setJumlah] = useState(1);


        const increment = () => {
            if (jumlah < 12) {
                const newValue = jumlah += 1;
                setJumlah(newValue)
            }
        }

        const decrement = () => {
            if (jumlah > 1) {
                const newValue = jumlah -= 1;
                setJumlah(newValue)
            }
        }

        menambah = increment
        mengurang = decrement

    }

    const handleDateChange = (selectedStartDate) => {
        // Jika tanggal telah dipilih, ubah format menjadi yang diinginkan
        if (selectedStartDate) {
            const formattedDate = moment(selectedStartDate, 'YYYY-MM-DD').format('DD MMM YYYY');
            setSelectedStartDate(formattedDate);
        } else {
            setSelectedStartDate('Pilih tanggal');
        }
    };

    return (

        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'center' }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                {/* <View style={{height: 35}}></View> */}
                <View style={{ marginTop: 35, height: 270, backgroundColor: '#f2f2f2' }} >
                    <View style={{ marginTop: 10, flex: 1 }}>
                        <Image
                            style={{ alignSelf: 'center', width: 360, height: 240, borderTopLeftRadius: 0, marginTop: 8, }}
                            source={imageSource} />

                        <Icon
                            onPress={() => navigation.navigate('HomeScreen')}
                            name="keyboard-backspace"
                            style={{
                                marginHorizontal: 10,
                                position: 'absolute',
                                color: '#fff',
                                fontSize: 32,
                                marginBottom: 20,
                                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                borderRadius: 20
                            }}
                        />
                    </View>
                </View>


                <View style={{
                    backgroundColor: '#111111',
                    marginTop: 0,
                    width: 360,
                    height: 400,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                }}>
                    <View style={{ marginBottom: 20 }}></View>


                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 20, }} >
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 31,
                            color: "#fff"
                        }}>{myParam}</Text>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 18,
                            color: COLORS.lightBlue
                        }}>{displayDetail.maxOrang}</Text>

                        <Text style={{ marginTop: 10, fontWeight: "500", fontSize: 14, color: "#fff" }}>{displayDetail.desc1}</Text>
                        <Text style={{ fontWeight: "500", fontSize: 14, color: "#fff" }}>{displayDetail.desc2}</Text>
                        <Text style={{ fontWeight: "500", fontSize: 14, color: "#fff" }}>{displayDetail.desc3}</Text>



                        <Text style={{
                            marginTop: 10,
                            fontWeight: "bold",
                            fontSize: 14,
                            color: '#fff'
                        }}>Penambahan File diluar Paket :</Text>
                        <Text style={{ fontWeight: "500", fontSize: 14, color: "#fff" }}>{displayDetail.nb1}</Text>
                        <Text style={{ fontWeight: "500", fontSize: 14, color: "#fff" }}>{displayDetail.nb2}</Text>
                        <Text style={{ fontWeight: "500", fontSize: 14, color: "#E74646" }}>{displayDetail.nb3}</Text>
                        <Text style={{
                            paddingTop: 5,
                            fontWeight: "bold",
                            fontSize: 11,
                            color: COLORS.lightBlue
                        }}>{displayDetail.outfit}</Text>




                        <InputData
                            onChangeText={(text) => setAtasNama(text)}
                            // onFocus={handleFocus}
                            value={atasNama}
                            placeholder="booking atas nama"
                            placeholderTextColor="rgba(255, 255, 255, 0.5)"
                        //label="Nama"
                        />
                        {/* <View style={styles.garis} /> */}

                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ width: 200 }}>
                                <Text style={{
                                    marginTop: 15,
                                    fontWeight: "bold",
                                    fontSize: 16,
                                    color: "#fff"
                                }}>Jumlah Orang :</Text>
                                <View style={{
                                    flexDirection: "row",
                                    marginTop: 5,
                                    // backgroundColor: "#fff",
                                    // alignSelf: 'flex-start',
                                    borderRadius: 5
                                }}>
                                    <Button3 title='-' onPress={mengurang} />
                                    <Text style={{
                                        marginHorizontal: 10,
                                        fontWeight: "bold",
                                        fontSize: 18,
                                        color: "#fff",
                                        // backgroundColor: "#fff",
                                        // alignSelf: 'flex-start'
                                    }}>{jumlah}</Text>
                                    <Button3 title='+' onPress={menambah} />
                                </View>
                            </View>

                            <View style={{ marginTop: 3 }}>
                                <Text style={{
                                    marginTop: 15,
                                    fontWeight: "bold",
                                    fontSize: 14,
                                    color: "#fff"
                                }}>Tambahan Orang :</Text>
                                <View style={{
                                    flexDirection: "row",
                                    marginTop: 5,
                                    // backgroundColor: "#fff",
                                    // alignSelf: 'flex-start',
                                    borderRadius: 5
                                }}>
                                    <Button3 title='-' onPress={decrement2} />
                                    <Text style={{
                                        marginHorizontal: 10,
                                        fontWeight: "bold",
                                        fontSize: 18,
                                        color: "#fff",
                                        // backgroundColor: "#fff",
                                        // alignSelf: 'flex-start'
                                    }}>{tambahan}</Text>
                                    <Button3 title='+' onPress={increment2} />
                                </View>
                            </View>
                        </View>

                        {/*  date picker */}

                        <View style={{ width: "100%", marginTop: 25, marginBottom: 20 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={styles.inputBtn}
                                    onPress={handleOnPressStartDate}
                                >
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Icon name="calendar" style={{ color: '#fff', fontSize: 28 }}
                                        />
                                        {/* <Text style={{fontWeight: "500",
                                            fontSize: 14,
                                            color: "#fff"}}>Harfdfi: {getDayOfWeek(selectedStartDate)}</Text> */}
                                        <Text style={{
                                            marginLeft: 5,
                                            fontWeight: "500",
                                            fontSize: 14,
                                            color: "#fff"
                                        }}>{selectedStartDate}</Text>

                                    </View>
                                </TouchableOpacity>
                                <View style={{ marginLeft: 45, marginTop: 6 }}>
                                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 12, marginLeft:12 }}>Jam Foto :</Text>
                                    <View style={{
                                        flexDirection: 'row',
                                        height: 50,
                                        width: 120,
                                        alignItems: 'center', justifyContent: 'center'
                                    }}>
                                        
                                        <View style={{
                                            backgroundColor: 'white',
                                            flexDirection: 'row',
                                            height: 35,
                                            width: 60,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: 10,
                                            marginTop: 6,
                                        }}>
                                            <Text style={{
                                                color: 'black',
                                                fontWeight: 'bold',
                                                fontSize: 18,

                                            }}>{time}</Text>
                                            <Text style={{
                                                color: 'black',
                                                fontWeight: 'bold',
                                                fontSize: 18,
                                            }}>{detTime}</Text>
                                        </View>
                                        <View style={{ marginLeft: 12 }}>

                                            <Icon2 name="caret-up"
                                                onPress={incrementTime}
                                                style={{ color: '#fff', fontSize: 38, height: 30,  }}
                                            />

                                            <Icon2 name="caret-down"
                                                onPress={decrementTime}
                                                style={{ color: '#fff', fontSize: 38, height: 30}}
                                            />
                                        </View>
                                    </View>
                                </View>
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

                    </ScrollView>



                </View>



                <View style={{
                    backgroundColor: '#111111',
                    marginTop: 0,
                    height: 80,
                    flexDirection: 'row',
                    marginHorizontal: 0,
                    // marginTop: 600
                }}>
                    <View style={{ marginHorizontal: 20 }}>
                        <Text style={{
                            marginTop: 15,
                            fontWeight: "regular",
                            fontSize: 14,
                            color: "#fff"
                        }}>Harga</Text>
                        <Text style={{
                            marginTop: 0,
                            fontWeight: "bold",
                            fontSize: 18,
                            color: "#fff"
                        }}>{displayDetail.harga}</Text>
                    </View>
                    <Button4 title='Booking' onPress={createOrders} />

                </View>

            </KeyboardAvoidingView>
        </SafeAreaView>

    )
}

export default DetailScreen

const styles = StyleSheet.create({
    inputBtn: {
        borderWidth: 2,
        borderRadius: 4,
        borderColor: "#fff",
        height: 50,
        width: 150,
        paddingLeft: 8,
        fontSize: 18,
        justifyContent: "center",
        marginTop: 22,
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
    garis: {
        borderWidth: 0.5,
        borderColor: "rgba(255, 255, 255, 0.7)",
        marginBottom: 20
    },
    container: {
        flex: 1,
        backgroundColor: '#111111',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
