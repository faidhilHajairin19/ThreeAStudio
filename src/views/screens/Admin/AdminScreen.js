import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/core'
import PesananScreen from './PesananScreen';

const AdminScreen = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={{ backgroundColor: "white", height: '100%' }}>
        <View style={{flexDirection: 'row', marginTop: 45,}}>
            <Icon
                onPress={() => navigation.navigate("ProfileScreen")}
                name="keyboard-backspace"
                style={styles.icon}
            />
            <Text style={{
                marginTop: 3,
                marginLeft: 5,
                fontSize: 20,
                fontWeight: 'bold',
                // backgroundColor:'red'
            }}>
                Halaman Admin</Text>
        </View>
        <PesananScreen/>
        </SafeAreaView>
    )
}

export default AdminScreen

const styles = StyleSheet.create({
    icon: {
        marginLeft: 20,
        color: '#111111',
        width: 35,
        fontSize: 32,
        marginBottom: 15,
        borderRadius: 20
    }
})