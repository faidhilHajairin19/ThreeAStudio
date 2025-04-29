import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Alert} from 'react-native';
import { firestore } from 'firebase'
import { auth } from '../../config/firebase'
import CardOrder from '../components/CardOrder';

export default class Orders extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kontaks:[],
      kontaksKey:{}
    };
  }

  componentDidMount() {
    this.ambilData();
  }

  ambilData = async () => {
    firestore().collection('kontak')
      .get()
      .then('value', (querySnapShot) => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let kontakItem = {...data};

        this.setState({
          kontaks: kontakItem,
          kontaksKey: Object.keys(kontakItem),
        });
      });
  };

  render() {
    const {kontaks, kontaksKey} = this.state;
    return (
      <View style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>Booking Anda</Text>
          <View style={styles.garis} />
        </View>

        <View style={styles.listKontak}>
          {kontaksKey.length > 0 ? (
            kontaksKey.docs.map((key) => (
              <CardOrder
                key={key}
                kontakItem={kontaks[key]}
                id={key}
                {...this.props}
              />
            ))
          ) : (
            <Text>Daftar Kosong</Text>
          )}
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  title: {
    marginTop:20 ,
    fontSize: 20,
    fontWeight: 'bold',
  },
  garis: {
    borderWidth: 1,
    marginTop: 10,
  },
  listKontak: {
    paddingHorizontal: 30,
    marginTop: 20,
  },
  // wrapperButton: {
  //   flex: 1,
  //   position: 'absolute',
  //   bottom: 0,
  //   right: 0,
  //   margin: 30,
  // },

});