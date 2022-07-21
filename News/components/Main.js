import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, FlatList } from 'react-native';
import {gStyle} from '../styles/style';

export default function Main({navigation}) {
  const loadScene = () => {
    navigation.navigate('Contacts');
  }

  const [news, setNews] = useState([
    {name: 'Google', anons: 'Goggle!!!', full: 'google is cool'},
    {name: 'Apple', anons: 'Apple!!!', full: 'Apple is cool'},
    {name: 'Facebook', anons: 'Facebook!!!', full: 'Facebook is cool'},
  ]);

  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>Main page</Text>
      <FlatList data={news} renderItem={({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate('FullInfo', item)}>
          <Text>{item.name}</Text>
          <Text>{item.anons}</Text>
        </TouchableOpacity>
      )}/>
    </View>
  );
} 

const styles = StyleSheet.create({
  
});
