import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import COLORS from '../../conts/colors'

const CardProduct = ({
    imageSource,
    label,
    details,
    onPress = () => { } }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.7}
            style={styles.card}>
            <Image style={styles.image} source={imageSource}/>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.details}>{details}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    card: {
        height: 290,
        elevation: 2,
        backgroundColor: "#FFF",
        marginRight: 20,
        marginTop: 10,
        borderRadius: 15,
        marginBottom: 10,
        width: 180
    },
    label: {
        textAlign: 'center',
        paddingHorizontal: 10,
        paddingTop: 10,
        fontWeight: "bold",
        fontSize: 15,
        color: COLORS.black
    },
    details: {
        paddingHorizontal: 10,
        paddingTop: 3,
        fontWeight:"500",
        fontSize: 12,
        color: COLORS.grey2
    },
    image: {
        width: 180,
        height: 250,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    }

})
export default CardProduct
