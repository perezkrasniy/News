import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, FlatList, Image } from 'react-native';
import {gStyle} from '../styles/style';

export default function Main({navigation}) {
  const loadScene = () => {
    navigation.navigate('Contacts');
  }

  const [news, setNews] = useState([
    {name: 'Google', anons: 'Goggle!!!', full: 'google is cool', key: 1, img: 'https://techcrunch.com/wp-content/uploads/2020/10/Google-Workspace-Icons-bad.png'},
    {name: 'Apple', anons: 'Apple!!!', full: 'Apple is cool', key: 2, img: 'https://www.apple.com/ac/structured-data/images/open_graph_logo.png?202201030840'},
    {name: 'Facebook', anons: 'Facebook!!!', full: 'Facebook is cool', key: 3, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/1200px-Facebook_New_Logo_%282015%29.svg.png'},
  ]);

  return (
    <View style={gStyle.main}>
      <Text style={[gStyle.title, styles.header]}>Main page</Text>
      <FlatList data={news} renderItem={({item}) => (
        <TouchableOpacity style = {styles.item} onPress={() => navigation.navigate('FullInfo', item)}>
          <Image source= {{
            width: '100%',
            height: 200,
            uri: item.img
          }}/>
          <Text style = {styles.title}>{item.name}</Text>
          <Text style = {styles.anons}>{item.anons}</Text>
        </TouchableOpacity>
      )}/>
    </View>
  );
} 

const styles = StyleSheet.create({
  item: {
    width: '100%',
    marginBottom: 30
  },
  title: {
    fontFamily: 'mt-bold',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 20,
    color: '#474747'
  },
  anons: {
    fontFamily: 'mt-light',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    color: '#474747'
  },
  header: {marginBottom:30}
});
