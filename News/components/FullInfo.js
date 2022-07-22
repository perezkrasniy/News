import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import {gStyle} from '../styles/style';

export default function FullInfo({route}) {
  //const loadScene = () => {
  //  navigation.goBack();
  //}

  return (
    <View style={gStyle.main}>
      <Image source= {{
            width: '100%',
            height: 200,
            uri: route.params.img
          }}/>
        <Text style={gStyle.title}>{route.params.name}</Text>
      <Text style = {styles.full}>{route.params.full}</Text>
    </View>
  );
} 

const styles = StyleSheet.create({
  full: {
    fontFamily: 'mt-light',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: '#474747'
  }
});
