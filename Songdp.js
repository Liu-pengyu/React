import React, { Component } from 'react'
import { Text, View, Image,Button ,TouchableOpacity} from 'react-native'
import Player from './Player'
import Video from 'react-native-video'
import Slider from '@react-native-community/slider'
import Entypo from 'react-native-vector-icons/Entypo'

var p = 10
export default class Songdp extends Component {
    constructor(props){
        super(props)
        this.player=null
        this.state={
            albums:[],
            data:[],
            paused: true, 
            duration: 1,currentTime:0,
            icon:"controller-play"
        }
    }
    _playControle = () => {
        let paused = this.state.paused
        this.setState({ paused: !paused })
        if(paused == true){
          this.setState({icon:"controller-paus"})
        }else{
          this.setState({icon:"controller-play"})
        }
      }
      _next = () => {
         let datas = this.state.albums
        if(p!=datas.length-1){
                p++
              }else{
                p = 0
              }
              this.setState({ data : datas[p] })
      }
      _prev = () => {
          let datas = this.state.albums
        if(p!=0){
                p--
              }else{
                p=datas.length-1
              }
              this.setState({ data : datas[p] })
      }
      _loadHandler = ({ duration }) => {
          this.setState({duration})
      }
      _progressHandler=({currentTime})=>{
        this.setState({currentTime})
      }
      _seekHandler=value=>{
        this.player.seek(value)
      }
      _endHandler=()=>{
        this._next()
      }
      formatMediaTime(time) {
        let minute = Math.floor(time / 60);
        let second = parseInt(time - minute * 60);
        minute = minute >= 10 ? minute : "0" + minute;
        second = second >= 10 ? second : "0" + second;
        return minute + ":" + second;
       
    }    
    componentDidMount(){
     
        fetch(`http://www.lszjx.com:8081/learn/Song`,{method:"GET"})
        .then(resp=>resp.json())
        .then(albums=>{
           
            let index=albums.findIndex(albums=>albums.songName===this.props.route.params)
            // console.log('+++++++++++++++++++++++++++++++++',index)
            p = index
            this.setState({albums:albums,data:albums[index]})
        })
    }
    render() {
        // console.log("fuck",this.state.albums)
        // const data=this.state.albums[0]
        return (
       
            <View style={{flex:1,backgroundColor:"#DCDCDC"}}>
                <Image style={{width:300,height:300,borderRadius:1000,marginLeft:50,marginTop:25}} source={{uri:this.state.data.songImg}}/>
                <Text style={{fontSize:30,color:'black',marginTop:25,textAlign:'center'}}>{this.state.data.songName}</Text>
                <Text style={{fontSize:15,color:'black',marginTop:10,textAlign:'center'}}>歌手：{this.state.data.songUser}</Text>
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <Video
          ref={ref=>this.player=ref}
          source={{uri:this.state.data.songIp}}
          paused={this.state.paused}
          onLoad={this._loadHandler}
          onProgress={this._progressHandler}
          onEnd={this._endHandler}
          progressUpdateInterval={2000}
        />
      <View style={{flexDirection:'row'}}>
        <Text>{this.formatMediaTime(this.state.currentTime)}</Text>
        <Slider style={{ height: 30,width:"80%" }} minimumValue={0} 
            maximumValue={this.state.duration} 
            onSlidingComplete={this._seekHandler}
            value={this.state.currentTime} />
        <Text>{this.formatMediaTime(this.state.duration)}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity style={{marginLeft:50}} onPress={this._prev} >
            <Entypo name="controller-jump-to-start"  size={50} />
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft:10,marginRight:10}} onPress={this._playControle}>
          <Entypo name={this.state.icon} size={50} />
          </TouchableOpacity>
          {/* <Button title="播放/暂停" onPress={this._playControle} /> */}
          <TouchableOpacity style={{marginRight:50}} onPress={this._next} >
            <Entypo name="controller-next" size={50} />
          </TouchableOpacity>
        </View>
      </View>
            </View>
        )
    }
}
