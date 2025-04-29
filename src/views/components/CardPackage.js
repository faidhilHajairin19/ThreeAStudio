import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import COLORS from '../../conts/colors'


const CardPackage = ({
    imageSource,
    label,
    detailsHarga,
    detailsOrang,
    onPress = () => { } }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.7}
            style={styles.card}>
            <Image style={styles.image} source={imageSource} />
            <LinearGradient
                colors={["rgba(0,0,0,0.7)", "transparent"]}
                style={styles.gradient}
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 0 }}
            />
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.detailsOrang}>{detailsOrang}</Text>
            <Text style={styles.detailsHarga}>{detailsHarga}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    card: {
        width: 310,
        height: 210,
        elevation: 5,
        marginRight: 20,
        marginTop: 20,
        borderRadius: 15,
        marginBottom: 10,
        justifyContent:'space-between'

    },
    label: {
        position: 'absolute',
        textAlign: 'center',
        paddingHorizontal: 10,
        paddingTop: 150,
        fontWeight: "500",
        fontSize: 20,
        color: COLORS.white
    },
    detailsOrang: {
        position: 'absolute',
        textAlign: 'center',
        paddingHorizontal: 12,
        paddingTop: 175,
        fontWeight: 'normal',
        fontSize: 13,
        color: COLORS.white
    },
    detailsHarga: {
        position: 'absolute',
        paddingTop: 3,
        paddingLeft: 12,
        fontWeight: "500",
        fontSize: 18,
        color: COLORS.lightBlue
    },
    image: {
        width: 310,
        height: 210,
        borderRadius: 15
    },
    gradient: {
        borderRadius: 15,
        position: "absolute",
        left: 0,
        right: 0,
        height: 100,
        top: 110
    }

})
export default CardPackage
