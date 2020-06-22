import React, { Component } from 'react'
import {  View, Button,Image, Modal } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ViewPager from '@react-native-community/viewpager';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SongList from './SongList'
import Home from './Home'
import Songdp from './Songdp'
import Hotlist from './HotList'
import Popular_song from './popular_song'
import Han from './Han_song'
import Sad from './Sad_song'
import Hot_song from './Hot_song'

const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()
export default class Apps extends Component {

  constructor(props){
    super(props)
    this.state={
      visible:true,
      albums:[],
    }
  }
  
  render() {
    return (
            <Stack.Navigator>
                <Stack.Screen name="主页" component={Home}/>
                <Stack.Screen name="榜单" component={Hotlist}/>
                <Stack.Screen name="流行歌曲" component={Popular_song}/>
                <Stack.Screen name="汉族民歌" component={Han}/>
                <Stack.Screen name="伤感情歌" component={Sad}/>
                <Stack.Screen name="网络红歌" component={Hot_song}/>
                <Stack.Screen name="歌曲详情" component={Songdp}/>
                
            </Stack.Navigator>
    )
  }
}
