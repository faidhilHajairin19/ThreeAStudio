import React, { useState, useEffect } from 'react'
import { View, useWindowDimensions, Text , ScrollView} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import OrdersScreenAktif from '../views/screens/OrdersScreenAktif';
import OrdersScreenProses from '../views/screens/OrdersScreenProses';
import OrdersScreenSelesai from '../views/screens/OrdersScreenSelesai';

export default function TabViewExample() {

const FirstRoute = () => (
  <View>
    <OrdersScreenAktif/>
  </View>
);

const SecondRoute = () => (
  <View>
    <OrdersScreenProses/>
  </View>
);

const ThirdRoute = () => (
  <View>
    <OrdersScreenSelesai/>
  </View>
);


const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});


  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    
    { key: 'first', title: 'Booking Aktif' },
    { key: 'second', title: 'Proses Edit' },
    { key: 'third', title: 'Riwayat' },
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#111111' }}
      style={{ backgroundColor: 'white' }}
      activeColor='black'
      inactiveColor='grey'
      labelStyle={{fontWeight:'bold', textTransform:'capitalize'}}
    />
  );

  return (


    <TabView
      renderTabBar={renderTabBar}
      //style={{marginTop:50}}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
   
  );
}
