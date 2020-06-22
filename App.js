import React, { Component } from 'react'
import {  View, Button,Image, Modal, ImageBackground, Text} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ViewPager from '@react-native-community/viewpager';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import SongList from './SongList'
import Home from './Home'
import Songdp from './Songdp'
import Song from './Song'
import router from './router'

const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()
export default class App extends Component {

  constructor(props){
    super(props)
    this.state={
      visible:true,
      albums:[],
    }
  }
  _hide=()=>{
    this.setState({visible:false})
  }
  componentDidMount(){
    fetch(`http://www.lszjx.com:8081/learn/Adv`,{method:"GET"})
    .then(resp=>resp.json())
    .then(albums=>{
        let album=[];
        for(let i=0;i<albums.length;i++){
          let a = albums[i].advIp
          album.push(a)
        };
        this.setState({
          albums:album
   
        });
    })
  }
  render() {
    return (
      <NavigationContainer>
        <Modal visible={this.state.visible}>
          <ViewPager style={{flex:1}}>
            <View key="1">
              <ImageBackground style={{flex:1}} source={{uri:this.state.albums[3]}}/>
            </View>
            <View key="2">
              <Image style={{flex:1}} source={{uri:this.state.albums[4]}}/>
            </View>
            <View key="3">
              <ImageBackground style={{flex:1}} source={{uri:this.state.albums[5]}}>
                <Text style={{alignSelf:"flex-end",opacity:0.3,fontSize:18,width:50,backgroundColor:"gray",textAlign:'center',borderRadius:10}} onPress={this._hide}>跳过</Text>
              </ImageBackground>
            </View>
          </ViewPager>
        </Modal>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === '主页') {
                iconName = focused
                  ? 'home-variant'
                  : 'home-variant-outline';
              } else if (route.name === '歌曲列表') {
                iconName = focused ? 'music-box' : 'music-box-outline';
              }
  
              // You can return any component that you like here!
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="主页" component={router} />
          <Tab.Screen name="歌曲列表" component={Song} />
        </Tab.Navigator>
       
      </NavigationContainer>
    )
  }
}
