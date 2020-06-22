import React, { Component } from 'react'
import { Text, View,FlatList,Image,Button, ImageBackground } from 'react-native'

export default class SongList extends Component {
    constructor(props){
        super(props)
        this.url="http://www.lszjx.com:8081/learn/Song"
        this.max=4
        this.state={data:[],albums:[]}
    }
      componentDidMount(){
        fetch(this.url,{method:"GET"})
        .then(resp=>resp.json())
        .then(albums=>{
            //console.log(albums)
            this.setState({albums:albums})
        })
    }
    _goMusic=songName=>{
        let data = this.state.albums
        let params = songName
        this.props.navigation.navigate("歌曲详情", params)
      
    }
    _renderItem=({item})=>{
        return (
            <View style={{height:40,flexDirection:'row',width:"100%",marginTop:5}}>
        <Text style={{fontSize:20}}>{item.songId}.</Text>
                <View style={{width:"80%"}}>
                    <Text style={{fontSize:20,marginLeft:10,height:50}} onPress={()=>this._goMusic(item.songName)}>{item.songUser}-{item.songName}</Text>     
                </View>
            </View>
        )
    }
    _ItemSeparatorComponent=()=>{
        return <View style={{height:1}}></View>
    }
    
    _refresh=()=>{
        let d=Math.floor(Math.random()*100+100)
        let data=this.state.data.splice(0)
        data.unshift(d)
        this.setState({data:data})
    }
    _reachEnd=()=>{
        let data=this.state.data.splice(0)
        data.push(++this.max)
        this.setState({data:data})
    }
    render() {
        return (
            <View style={{height:"100%",backgroundColor:"#DCDCDC"}}>
         
                    <FlatList

                        ListEmptyComponent={<Text>加载中</Text>}
                        keyExtractor={({item,index})=>index}
                        ItemSeparatorComponent={this._ItemSeparatorComponent}
                        data={this.state.albums} 
                        renderItem={this._renderItem}
                        refreshing={false}
                        onRefresh={this._refresh}
                        onEndReached={this._reachEnd}
                        onEndReachedThreshold={0.2}
                    /> 

                
            </View>
        )
    }
    }