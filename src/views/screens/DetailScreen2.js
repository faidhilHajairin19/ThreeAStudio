 import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

function DetailScreen2() {
  const route = useRoute();
  const { paramKey } = route.params;

  console.log(paramKey)

  return (
    <View style={{paddingTop:90}}>
      <Text>Detail Screen</Text>
      <Text>Param Key: {paramKey}</Text>
      {/* Menampilkan informasi tambahan berdasarkan paramKey */}
      {/* ... */}
    </View>
  );
}

export default DetailScreen2;
