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
            let popular = []
            for(let i=0; i < albums.length;i++){
                if(albums[i].songType == "伤感情歌"){
                    popular.push(albums[i])
                }
               
            }
            this.setState({albums:popular})
            console.log("情歌",popular)
        })
    }
    _goMusic=songName=>{
        let data = this.state.albums
        let params = songName
        this.props.navigation.navigate("歌曲详情", params)
      
    }
    _renderItem=({item})=>{
        return (
            <View style={{height:80,flexDirection:'row',width:"100%",marginTop:5}}>
                <Image style={{width:'20%',height:80}} source={{uri:item.songImg}} onPress={()=>this._goMusic(item.songName)}/>
                <View style={{width:"80%"}}>
                    <Text style={{fontSize:20,textAlign:'center',textAlignVerticalL:'center',height:50}} onPress={()=>this._goMusic(item.songName)}>{item.songName}</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:15,color:'black'}}>   作者：{item.songUser}</Text>
                        <Text style={{fontSize:15}}>   类别：{item.songType}</Text>
                    </View>
                    
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
            <View >
                <ImageBackground style={{width:"100%",height:"100%"}} source={{uri:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592766989135&di=924a379b3605c4007e747b8abc088a98&imgtype=0&src=http%3A%2F%2Fwww.pptbz.com%2Fpptpic%2FUploadFiles_6909%2F201411%2F2014111911312157.jpg"}}>
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
               </ImageBackground>
                
            </View>
        )
    }
    }