import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import Video from 'react-native-video'
import Slider from '@react-native-community/slider'

var p = 0
export default class App extends Component {
  constructor(props) {
    super(props)
    this.player=null
    this.state = {
      paused: true, 
      duration: 1,currentTime:0,
      ablums:this.props.Song,
      songId:this.props.Song.songId
    }
  }
  _playControle = () => {
    let paused = this.state.paused
    this.setState({ paused: !paused })
  }
  _getSong=()=>{
    fetch(`http://www.lszjx.com:8081/learn/Song?song_id=${this.state.songId}`,{method:"GET"})
        .then(resp=>resp.json())
        .then(albums=>{
            console.log(albums)
            this.setState({albums:albums[0]})
            
        })
  }
  _next = () => {
    let id = this.state.songId + 1
    console.log(id)
    this.setState({ songId: id})
    this._getSong
  }
  _prev = () => {
    songId--
    this.setState({ source: { uri: url + songId }})
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

  render() {
    console.log("播放",this.state.ablums)
    return (
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <Video
          ref={ref=>this.player=ref}
          source={{uri:this.props.Song.songIp}}
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
          <Button title="上一首" onPress={this._prev} />
          <Button title="播放/暂停" onPress={this._playControle} />
          <Button title="下一首" onPress={this._next} />
        </View>
      </View>
    )
  }
}