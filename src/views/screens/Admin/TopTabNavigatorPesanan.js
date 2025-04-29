import React, { useState, useEffect } from 'react'
import { View, useWindowDimensions, Text , ScrollView} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import OrdersListAktif from './OrdersListAktif';
import OrdersListProses from './OrdersListProses';
import OrdersListSelesai from './OrdersListSelesai';

export default function TabViewPesanan() {

const FirstRoute = () => (
  <View>
    <OrdersListAktif/>
  </View>
);

const SecondRoute = () => (
  <View>
    <OrdersListProses/>
  </View>
);

const ThirdRoute = () => (
  <View>
    <OrdersListSelesai/>
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
    
    { key: 'first', title: 'Pesanan Aktif' },
    { key: 'second', title: 'Proses Edit' },
    { key: 'third', title: 'Selesai' },
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
