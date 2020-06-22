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
                <Stack.Screen name="歌曲列表" component={SongList}/>
                <Stack.Screen name="歌曲详情" component={Songdp}/>
            </Stack.Navigator>
    )
  }
}
