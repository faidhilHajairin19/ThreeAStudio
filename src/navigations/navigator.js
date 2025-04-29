import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LoginScreen from '../views/screens/LoginScreen';
import RegistrationScreen from '../views/screens/RegistrationScreen';
import HomeScreen from '../views/screens/HomeScreen';
import OnboardingScreen from '../views/screens/OnboardingScreen';
import BookScreen from '../views/screens/BookScreen';
import COLORS from '../conts/colors';
import OrdersScreen from '../views/screens/OrdersScreen';
import PackageScreen from '../views/screens/PackageScreen';
import DetailScreen from '../views/screens/DetailScreen';
import OrdersScreen3 from '../views/screens/OrdersScreenProses';
import ProfileScreen from '../views/screens/ProfileScreen';
import EditProfileScreen from '../views/screens/EditProfileScreen';
import SearchScreen from '../views/screens/SearchScreen';
import AdminScreen from '../views/screens/Admin/AdminScreen';
import UserDataScreen from '../views/screens/Admin/UserDataScreen';
import EditOrderScreen from '../views/screens/Admin/EditOrderScreen';
import AdminEditProfileScreen from '../views/screens/Admin/AdminEditProfileScreen';
import DetailScreen2 from '../views/screens/DetailScreen2';
import ProductScreen from '../views/screens/ProductScreen';

const homeName = "Home";
const orderName = "Daftar Booking";
const packageName = "Paket Foto";


const dataBooking = "Pesanan";
const dataUser = "Data Akun";

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        headerShown : false,
        labelStyle: { paddingBottom: 5, fontSize: 90 },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? 'home' : 'home-outline';

          } else if (rn === orderName) {
            iconName = focused ? 'note-check' : 'note-check-outline';

          } else if (rn === packageName) {
            iconName = focused ? 'image-multiple' : 'image-multiple-outline';
          }

          // You can return any component that you like here!
          return <Icon 
          name={iconName}
          style={{ color: COLORS.black, fontSize: 28 }}
          />;
        },
        tabBarActiveTintColor: COLORS.black,
        tabBarInactiveTintColor: 'gray', 
        
        
      })}
      // tabBarOptions={{
      //   activeTintColor: '#000000',
      //   inactiveTintColor: 'grey',
      //   labelStyle: { paddingBottom: 5, fontSize: 10 },
      //   style: { padding: 10, height: 70}
      // }}
    >
      <Tab.Screen name={homeName} component={HomeScreen} />
      <Tab.Screen name={packageName} component={PackageScreen} />
      <Tab.Screen name={orderName} component={OrdersScreen} />
    </Tab.Navigator>
  );
};

const BottomTabNavigatorAdmin = () => {
  return (
    <Tab.Navigator
      initialRouteName={dataBooking}
      screenOptions={({ route }) => ({
        headerShown : false,
        labelStyle: { paddingBottom: 5, fontSize: 90 },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === dataBooking) {
            iconName = focused ? 'note-check' : 'note-check-outline';

          } else if (rn === dataUser) {
            iconName = focused ? 'account-circle' : 'account-circle-outline';
          }

          // You can return any component that you like here!
          return <Icon 
          name={iconName}
          style={{ color: COLORS.black, fontSize: 28 }}
          />;
        },
        tabBarActiveTintColor: COLORS.black,
        tabBarInactiveTintColor: 'gray', 
        
        
      })}
      // tabBarOptions={{
      //   activeTintColor: '#000000',
      //   inactiveTintColor: 'grey',
      //   labelStyle: { paddingBottom: 5, fontSize: 10 },
      //   style: { padding: 10, height: 70}
      // }}
    >
      {/* <Tab.Screen name={homeName} component={AdminScreen} /> */}
      <Tab.Screen name={dataBooking} component={AdminScreen} />
      <Tab.Screen name={dataUser} component={UserDataScreen} />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();
const screenOptionStyle = {
  headerShown: false
}

const HomeStackNavigator = () => {


  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
      {/* <Stack.Screen name="BookingScreen" component={BookingScreen} /> */}
      <Stack.Screen name="BookScreen" component={BookScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      <Stack.Screen name="DetailScreen2" component={DetailScreen2} />
      <Stack.Screen name="OrdersScreen3" component={OrdersScreen3} />
      <Stack.Screen name="HomeScreen" component={BottomTabNavigator} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
      <Stack.Screen name="AdminScreen" component={BottomTabNavigatorAdmin}/>
      <Stack.Screen name="UserDataScreen" component={UserDataScreen}/>
      <Stack.Screen name="EditOrderScreen" component={EditOrderScreen}/>
      <Stack.Screen name="AdminEditProfileScreen" component={AdminEditProfileScreen}/>
      <Stack.Screen name="SearchScreen" component={SearchScreen}/>
      <Stack.Screen name="ProductScreen" component={ProductScreen}/>
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;