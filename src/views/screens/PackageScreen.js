import React, { useState } from 'react'
import { View, Text, Image, TextInput, ScrollView, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import COLORS from '../../conts/colors';
import CardProduct from '../components/CardProduct';
import CardPackage from '../components/CardPackage';
import Loader from '../components/Loader';
import CardPackage2 from '../components/CardPackage2';

const Home = ({ navigation }) => {


    const [data] = useState({
        groupPL1: 'Group Pelajar/Mahasiswa 1',
        groupPL2: 'Group Pelajar/Mahasiswa 2',
        groupPL3: 'Group Pelajar/Mahasiswa 3',
        groupPL4: 'Group Pelajar/Mahasiswa 4',
        groupU1: 'Group Umum 1',
        familySt: 'Family Standart',
        familyBrz: 'Family Bronze',
        familySil: 'Family Silver',
        familyGold: 'Family Gold',
        gradSt1: 'Graduation Standart 1',
        gradSt2: 'Graduation Standart 2',
        gradMd1: 'Graduation Medium 1',
        gradMd2: 'Graduation Medium 2',
        gradPrem1: 'Graduation Premium 1',
        gradPrem2: 'Graduation Premium 2'
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
                    marginTop: 0
                }}
            >
                <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')} style={{
                    backgroundColor: COLORS.lightGrey,
                    paddingVertical: 8,
                    paddingHorizontal: 20,
                    marginHorizontal: 20,
                    borderRadius: 15,
                    marginTop: 50,
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <Text
                        //placeholderTextColor="#000000"
                        style={{
                            color: 'grey',
                            fontSize: 18,
                            width: 260,
                        }}
                    >Search</Text>

                    <Icon
                        name="magnify"
                        style={{ color: COLORS.black, fontSize: 28 }}
                    />
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginHorizontal: 20 }}>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 20,
                        color: "#000000"
                    }}>Paket Group</Text>
                </View>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ height: 250, }}
                >
                    <CardPackage2
                        onPress={() => navigation.navigate('DetailScreen', {
                            paramKey: data.groupPL1
                        })}
                        imageSource={require('../../images/GroupP1.png')}
                        label={data.groupPL1}

                        detailsOrang='Max. 10 orang'
                    />
                    <CardPackage
                        onPress={() => navigation.navigate('DetailScreen', {
                            paramKey: data.groupPL2
                        })}
                        imageSource={require('../../images/GroupP2.png')}
                        label={data.groupPL2}

                        detailsOrang='Max. 20 orang'
                    />
                    <CardPackage
                        onPress={() => navigation.navigate('DetailScreen', {
                            paramKey: data.groupPL3
                        })}
                        imageSource={require('../../images/GroupP3.png')}
                        label={data.groupPL3}

                        detailsOrang='Max. 30 orang'
                    />
                    <CardPackage
                        onPress={() => navigation.navigate('DetailScreen', {
                            paramKey: data.groupPL4
                        })}
                        imageSource={require('../../images/GroupP4.png')}
                        label={data.groupPL4}

                        detailsOrang='Max. 40 orang'
                    />

                    <CardPackage
                        style={{ marginEnd: 20 }}
                        onPress={() => navigation.navigate('DetailScreen', {
                            paramKey: data.groupU1
                        })}
                        imageSource={require('../../images/GroupU1.png')}
                        label={data.groupU1}

                        detailsOrang='Max. 10 orang'
                    />
                </ScrollView>

                <View style={{ marginHorizontal: 20 }}>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 20,
                        color: "#000000"
                    }}>Paket Family</Text>
                </View>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ height: 250 }}
                >
                    <CardPackage2
                        onPress={() => navigation.navigate('DetailScreen', {
                            paramKey: data.familySt
                        })}
                        imageSource={require('../../images/FamSt.png')}
                        label={data.familySt}

                        detailsOrang='Max. 5 orang'
                    />

                    <CardPackage
                        onPress={() => navigation.navigate('DetailScreen', {
                            paramKey: data.familyBrz
                        })}
                        imageSource={require('../../images/FamBrz.png')}
                        label={data.familyBrz}

                        detailsOrang='Max. 8 orang'
                    />
                    <CardPackage
                        onPress={() => navigation.navigate('DetailScreen', {
                            paramKey: data.familySil
                        })}
                        imageSource={require('../../images/FamSil.png')}
                        label={data.familySil}

                        detailsOrang='Max. 12 orang'
                    />
                    <CardPackage
                        onPress={() => navigation.navigate('DetailScreen', {
                            paramKey: data.familyGold
                        })}
                        imageSource={require('../../images/FamGold.png')}
                        label={data.familyGold}

                        detailsOrang='Max. 20 orang'
                    />
                </ScrollView>

                <View style={{ marginHorizontal: 20 }}>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 20,
                        color: "#000000"
                    }}>Paket Graduation</Text>
                </View>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ height: 250 }}
                >
                    <CardPackage2
                        onPress={() => navigation.navigate('DetailScreen', {
                            paramKey: data.gradSt1
                        })}
                        imageSource={require('../../images/GradSt1.png')}
                        label='Graduation Standart 1'

                        detailsOrang='Max. 5 orang'
                    />

                    <CardPackage
                        onPress={() => navigation.navigate('DetailScreen', {
                            paramKey: data.gradSt2
                        })}
                        imageSource={require('../../images/GradSt2.png')}
                        label='Graduation Standart 2'

                        detailsOrang='Max. 10 orang'
                    />
                    <CardPackage
                        onPress={() => navigation.navigate('DetailScreen', {
                            paramKey: data.gradMd1
                        })}
                        imageSource={require('../../images/GradMed1.png')}
                        label='Graduation Medium 1'

                        detailsOrang='Max. 10 orang'
                    />
                    <CardPackage
                        onPress={() => navigation.navigate('DetailScreen', {
                            paramKey: data.gradMd2
                        })}
                        imageSource={require('../../images/GradMed2.png')}
                        label='Graduation Medium 2'

                        detailsOrang='Max. 12 orang'
                    />
                    <CardPackage
                        onPress={() => navigation.navigate('DetailScreen', {
                            paramKey: data.gradPrem1
                        })}
                        imageSource={require('../../images/GradPrem1.png')}
                        label='Graduation Premium 1'

                        detailsOrang='Max. 8 orang'
                    />
                    <CardPackage
                        onPress={() => navigation.navigate('DetailScreen', {
                            paramKey: data.gradPrem2
                        })}
                        imageSource={require('../../images/GradPrem2.png')}
                        label='Graduation Premium 2'

                        detailsOrang='Max. 12 orang'
                    />
                </ScrollView>

                {/* <View style={{ marginHorizontal: 20 }}>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 20,
                        color: "#000000"
                    }}>Paket Pas Foto</Text>
                </View>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ height: 250 }}
                >
                    <CardPackage
                        onPress={() => navigation.navigate('')}
                        imageSource={require('../../images/GroupP2.png')}
                        label='Group Pelajar 2'

                        detailsOrang='Max. 20 orang'
                    />

                    <CardPackage
                        style={{ marginEnd: 20 }}
                        onPress={() => navigation.navigate('')}
                        imageSource={require('../../images/GroupU1.png')}
                        label='Group Umum 1'

                        detailsOrang='Max. 10 orang'
                    />
                </ScrollView>

                <View style={{ marginHorizontal: 20 }}>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 20,
                        color: "#000000"
                    }}>Paket Portrait</Text>
                </View>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ height: 250 }}
                >
                    <CardPackage
                        onPress={() => navigation.navigate('')}
                        imageSource={require('../../images/GroupP2.png')}
                        label='Group Pelajar 2'

                        detailsOrang='Max. 20 orang'
                    />

                    <CardPackage
                        style={{ marginEnd: 20 }}
                        onPress={() => navigation.navigate('')}
                        imageSource={require('../../images/GroupU1.png')}
                        label='Group Umum 1'

                        detailsOrang='Max. 10 orang'
                    />
                </ScrollView>

                <View style={{ marginHorizontal: 20 }}>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 20,
                        color: "#000000"
                    }}>Paket Reguler</Text>
                </View>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ height: 250 }}
                >
                    <CardPackage
                        onPress={() => navigation.navigate('')}
                        imageSource={require('../../images/GroupP2.png')}
                        label='Group Pelajar 2'

                        detailsOrang='Max. 20 orang'
                    />

                    <CardPackage
                        style={{ marginEnd: 20 }}
                        onPress={() => navigation.navigate('')}
                        imageSource={require('../../images/GroupU1.png')}
                        label='Group Umum 1'

                        detailsOrang='Max. 10 orang'
                    />
                </ScrollView>

                <View style={{ marginHorizontal: 20 }}>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 20,
                        color: "#000000"
                    }}>Paket Prewed</Text>
                </View>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ height: 250 }}
                >
                    <CardPackage
                        onPress={() => navigation.navigate('')}
                        imageSource={require('../../images/GroupP2.png')}
                        label='Group Pelajar 2'

                        detailsOrang='Max. 20 orang'
                    />

                    <CardPackage
                        style={{ marginEnd: 20 }}
                        onPress={() => navigation.navigate('')}
                        imageSource={require('../../images/GroupU1.png')}
                        label='Group Umum 1'

                        detailsOrang='Max. 10 orang'
                    /> 
                </ScrollView>*/}

            </ScrollView>
        </SafeAreaView>




    )
}
export default Home;