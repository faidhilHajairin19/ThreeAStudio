import React, { useState } from 'react';
import { View, TextInput, FlatList, Image, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../conts/colors';
import { useNavigation, useRoute } from '@react-navigation/core'
import { LinearGradient } from 'expo-linear-gradient'

function ProductScreen() {
    const [searchText, setSearchText] = useState('');

    const navigation = useNavigation()

    const route = useRoute()

    const myParam = route.params.paramKey;

    const handleSearch = (text) => {
        setSearchText(text);
    };

    const data = [
        { id: 1, name: 'Family Standart', jumlah: 'Max. 5 orang', image: require('../../images/FamSt.png') },
        { id: 2, name: 'Family Bronze', jumlah: 'Max. 8 orang', image: require('../../images/FamBrz.png') },
        { id: 3, name: 'Family Silver', jumlah: 'Max. 12 orang', image: require('../../images/FamSil.png') },
        { id: 4, name: 'Family Gold', jumlah: 'Max. 20 orang', image: require('../../images/FamGold.png') },
        { id: 5, name: 'Group Pelajar/Mahasiswa 1', jumlah: 'Max. 10 orang', image: require('../../images/GroupP1.png') },
        { id: 6, name: 'Group Pelajar/Mahasiswa 2', jumlah: 'Max. 20 orang', image: require('../../images/GroupP2.png') },
        { id: 7, name: 'Group Pelajar/Mahasiswa 3', jumlah: 'Max. 30 orang', image: require('../../images/GroupP3.png') },
        { id: 8, name: 'Group Pelajar/Mahasiswa 4', jumlah: 'Max. 40 orang', image: require('../../images/GroupP4.png') },
        { id: 9, name: 'Group Umum 1', jumlah: 'Max. 5 orang', image: require('../../images/GroupU1.png') },
        { id: 10, name: 'Graduation Standart 1', jumlah: 'Max. 5 orang', image: require('../../images/GradSt1.png') },
        { id: 11, name: 'Graduation Standart 2', jumlah: 'Max. 10 orang', image: require('../../images/GradSt2.png') },
        { id: 12, name: 'Graduation Medium 1', jumlah: 'Max. 10 orang', image: require('../../images/GradMed1.png') },
        { id: 13, name: 'Graduation Medium 2', jumlah: 'Max. 12 orang', image: require('../../images/GradMed2.png') },
        { id: 14, name: 'Graduation Premium 1', jumlah: 'Max. 8 orang', image: require('../../images/GradPrem1.png') },
        { id: 15, name: 'Graduation Premium 2', jumlah: 'Max. 12 orang', image: require('../../images/GradPrem2.png') },

        // ... data lainnya
    ];


    const handleItemPress = (paramKey) => {
        navigation.navigate('DetailScreen', { paramKey });
    };

    const renderFilteredImages = ({ item, index }) => {

        // Logika pemfilteran gambar berdasarkan teks pencarian
        if (item.name.toLowerCase().includes(myParam.toLowerCase())) {
            return (
                <TouchableOpacity onPress={() => handleItemPress(item.name)}
                    style={{
                        width: 320,
                        height: 210,
                        elevation: 5,
                        marginTop: 10,
                        borderRadius: 15,
                        marginBottom: 5,
                        justifyContent: 'center',
                        alignSelf: 'center'
                    }}>
                    <Image source={item.image} style={{
                        width: 320,
                        height: 210,
                        borderRadius: 15
                    }} />
                    <LinearGradient
                        colors={["rgba(0,0,0,0.7)", "transparent"]}
                        style={{
                            borderRadius: 15,
                            position: "absolute",
                            left: 0,
                            right: 0,
                            height: 100,
                            top: 110
                        }}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 0, y: 0 }}
                    />
                    <Text style={{
                        position: 'absolute',
                        textAlign: 'center',
                        paddingHorizontal: 10,
                        paddingTop: 110,
                        fontWeight: "500",
                        fontSize: 20,
                        color: COLORS.white
                    }}>{item.name}</Text>
                    <Text style={{
                        position: 'absolute',
                        textAlign: 'center',
                        paddingHorizontal: 12,
                        paddingTop: 155,
                        fontWeight: 'normal',
                        fontSize: 13,
                        color: COLORS.white
                    }}>{item.jumlah}</Text>
                </TouchableOpacity>
            )
        } else {
            return null;
        }
    };

    return (
        <View style={{ flex: 1, marginTop: 20, backgroundColor: COLORS.white }}>
            <View style={{
                backgroundColor: COLORS.white,
                left: 0,
                right: 0,
                height: 80,
                marginTop: 10
            }}
            >
                <View style={{ flexDirection: 'row', marginTop: 20, }}>
                    <Icon
                        onPress={() => navigation.navigate("HomeScreen")}
                        name="keyboard-backspace"
                        style={{
                            marginLeft: 20,
                            color: '#111111',
                            width: 35,
                            fontSize: 32,
                            marginBottom: 10,
                            //backgroundColor: 'rgba(0, 0, 0, 0.6)',
                            borderRadius: 20
                        }}
                    />
                </View>
               <View>
                <Text style={{paddingHorizontal:23, fontSize:28, fontWeight:'bold', textTransform:'capitalize'}}>{myParam}</Text>
               </View>
            </View>
            <View style={{marginBottom:30}}></View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderFilteredImages}
            />
        </View>
    );
}

export default ProductScreen;
