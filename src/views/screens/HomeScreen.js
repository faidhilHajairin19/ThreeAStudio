import React, { useState } from 'react'
import { View, Text, Image, TextInput, ScrollView, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import COLORS from '../../conts/colors';
import CardProduct from '../components/CardProduct';
import CardPackage from '../components/CardPackage';
import CardProduct2 from '../components/CardProduct2';
import CardPackage2 from '../components/CardPackage2';

const Home = ({ navigation }) => {
    const [data] = useState({
        group:'group',
        family:'family',
        grad:'graduation',
        groupPL2:'Group Pelajar/Mahasiswa 2',
        groupU1:'Group Umum 1',
    })
    return (
        <SafeAreaView style={{
            backgroundColor: "#FFF",
            flex: 1
        }}>
            <View
                style={{
                    backgroundColor: COLORS.white,
                    left: 0,
                    right: 0,
                    height: 110,
                    marginTop: 0,
                    flexDirection: "row",
                }}
            >
                <TouchableOpacity  onPress={() => navigation.navigate('SearchScreen')} style={{
                    backgroundColor: COLORS.lightGrey,
                    paddingVertical: 8,
                    height: 45,
                    paddingHorizontal: 20,
                    marginLeft: 20,
                    borderRadius: 15,
                    marginTop: 50,
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <Text
                        //placeholderTextColor="#000000"
                        style={{
                            color:'grey',
                            fontSize: 18,
                            width: 205,
                        }}
                    >Search</Text>
                    <Icon
                        name="magnify"
                        style={{ color: COLORS.black, fontSize: 28 }}
                    />
                </TouchableOpacity>
                <View style={{
                    backgroundColor: "black",
                    marginHorizontal: 10,
                    marginTop: 53,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 70,
                    width: 40,
                    height: 40

                }}>
                    <Icon
                        onPress={() => navigation.navigate('ProfileScreen')}
                        name="account"
                        style={{ color: COLORS.white, fontSize: 25, }}
                    />
                </View>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >

                <View style={{
                    flexDirection: "row",
                    paddingHorizontal: 20,
                    width: "100%",
                    alignItems: "center",
                    marginTop: 30
                }}>
                    <View style={{ width: "50%" }}>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 18,
                            marginBottom: 20,
                            color: "#000000"
                        }}>Produk Kami</Text>
                        {/* <View style={{
                            height: 4,
                            backgroundColor: COLORS.black,
                            width: 115,
                            marginTop: -5
                        }}>

                        </View> */}

                    </View>
                    {/* <View style={{ width: "50%", alignItems: "flex-end" }}>
                        <View style={{
                            width: 113,
                            height: 35,
                            backgroundColor: COLORS.black,
                            paddingHorizontal: 20,
                            paddingVertical: 5,
                            borderRadius: 20
                        }}>
                            <Text style={{
                                paddingTop: 3,
                                textAlign: 'center',
                                fontWeight: "bold",
                                fontSize: 13,
                                color: "#FFF"
                            }}>Lihat Semua</Text>
                        </View>
                    </View> */}
                </View>



                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ height: 400 }}
                >
                    {/* <LinearGradient
                        colors={["rgba(0,0,0,0.09)", "transparent"]}
                        style={{
                            position: "absolute",
                            left: 0,
                            right: 0,
                            height: 100,
                            marginTop: 220,
                            top: 0
                        }}
                    /> */}
                    <CardProduct2
                        onPress={() => navigation.navigate('ProductScreen', {
                            paramKey: data.group
                        })}
                        imageSource={require('../../images/Group.png')}
                        label="GROUP"
                    //details="Harga Mulai 285 ribuan"
                    />

                    <CardProduct
                         onPress={() => navigation.navigate('ProductScreen', {
                            paramKey: data.family
                        })}
                        imageSource={require('../../images/Fam2.png')}
                        label="FAMILY"

                    />
                    <CardProduct
                         onPress={() => navigation.navigate('ProductScreen', {
                            paramKey: data.grad
                        })}
                        imageSource={require('../../images/Grad1.png')}
                        label="GRADUATION"

                    />
                </ScrollView>




                <View style={{
                    flexDirection: "row",
                    paddingHorizontal: 20,
                    width: "100%",
                    alignItems: "center",
                    marginTop: -50,
                }}>
                    <View style={{ width: "50%" }}>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 18,
                            marginBottom: 20,
                            color: "#000000"
                        }}>Paket Kami</Text>
                        {/* <View style={{
                            height: 4,
                            backgroundColor: COLORS.black,
                            width: 115,
                            marginTop: -5
                        }}>

                        </View> */}

                    </View>
                    <TouchableOpacity  onPress={() => navigation.navigate('SearchScreen')} style={{ width: "50%", alignItems: "flex-end" }}>
                        <View style={{
                            width: 113,
                            height: 35,
                            backgroundColor: COLORS.black,
                            paddingHorizontal: 20,
                            paddingVertical: 5,
                            borderRadius: 20
                        }}>
                            <Text style={{
                                paddingTop: 3,
                                textAlign: 'center',
                                fontWeight: "bold",
                                fontSize: 13,
                                color: "#FFF"
                            }}>Lihat Semua</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ height: 250 }}
                >
                    <CardPackage2
                        onPress={() => navigation.navigate('DetailScreen', {
                            paramKey: data.groupPL2
                        })}
                        imageSource={require('../../images/GroupP2.png')}
                        label='Group Pelajar/Mahasiswa 2'

                        detailsOrang='Max. 20 orang'
                    />

                    <CardPackage
                        style={{ marginEnd: 20 }}
                        onPress={() => navigation.navigate('DetailScreen', {
                            paramKey: data.groupU1
                        })}
                        imageSource={require('../../images/GroupU1.png')}
                        label='Group Umum 1'

                        detailsOrang='Max. 10 orang'
                    />

                    {/* <TouchableOpacity style={{
                        height: 210,
                        elevation: 2,
                        marginLeft: 20,
                        marginTop: 20,
                        borderRadius: 15,
                        marginBottom: 10,
                        width: 320
                    }}>
                        <Image
                            source={require("../../images/Group2.png")}
                            style={{ borderRadius: 10, width: 320, height: 210 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require("../../images/19.png")}
                            style={{ marginTop: 20, borderRadius: 10, marginHorizontal: 20 }}
                        />
                    </TouchableOpacity> */}
                </ScrollView>

            </ScrollView>
        </SafeAreaView>

    )
}
export default Home;