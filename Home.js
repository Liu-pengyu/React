import React, { Component } from 'react'
import {Image, Text, View, ImageBackground } from 'react-native'

export default class Home extends Component {
    _hotlist=()=>{
        this.props.navigation.navigate("榜单")
    }
    _popular=()=>{
        this.props.navigation.navigate("流行歌曲")
    }
    _Han=()=>{
        this.props.navigation.navigate("汉族民歌")
    }
    _Sad=()=>{
        this.props.navigation.navigate("伤感情歌")
    }
    _Hot=()=>{
        this.props.navigation.navigate("网络红歌")
    }
    render() {
        return (
            
            <View style={{width:"100%",height:'100%', backgroundColor:'gray'}}>
                <ImageBackground style={{flex:1}} source={{uri:'https://ae01.alicdn.com/kf/H74128ea207b948639be1bdf521835c49T.jpg'}}>
                <View style={{width:"95%",height:"35%",margin:10,borderRadius:10}} >
                <Text style={{marginLeft:10,fontSize:25}} onPress={this._hotlist}>榜单</Text>
                    <Image style={{flex:1,borderRadius:10}} source={{uri:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592746946657&di=54046e0c7a4207f45e8cd7e81304d06e&imgtype=0&src=http%3A%2F%2Fpic.xiami.net%2Fimages%2Fcommon%2Fuploadpic%2Fplaylist%2F401323545%2F1535210771888.jpg"}}/>
                </View>
                <Text style={{marginLeft:10,fontSize:20}} >分类 </Text>
                <View style={{width:"100%",height:"50%",flexWrap:"wrap"}}>
                <View style={{width:"45%",height:130 ,borderRadius:10,marginLeft:10,marginRight:10}}>
                    <Image style={{flex:1,borderRadius:10}} source={{uri:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592745729387&di=a4aede17a66c2f576271a336dab63f74&imgtype=0&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D3685378383%2C2902827282%26fm%3D214%26gp%3D0.jpg"}}/>    
                    <Text style={{textAlign:"center"}} onPress={this._popular}>流行歌曲</Text>
                </View>
                <View style={{width:"45%",height:130 ,borderRadius:10,marginLeft:10, marginTop:10}}>
                    
                    <Image style={{flex:1,borderRadius:10}} source={{uri:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592746248829&di=35ddf80ca0b8cd35a99288f1db6aff2d&imgtype=0&src=http%3A%2F%2Fbpic.wotucdn.com%2F16%2F34%2F15%2F16341553-9bc1951280192c2bcadddff973bb8ae9-0.jpg"}}/>
                    <Text style={{textAlign:"center"}} onPress={this._Hot}>网络红歌</Text>
                </View>
                <View style={{width:"45%",height:130 ,borderRadius:10,marginLeft:10}}>
                
                    <Image style={{flex:1,borderRadius:10}} source={{uri:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592746413363&di=cb3a1b6812245faeeba9e04a3e5e64ee&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fbaike%2Fpic%2Fitem%2F2cf5e0fe9925bc31ac0b9e6f5edf8db1ca1370f7.jpg"}}/>
                    <Text style={{textAlign:"center"}} onPress={this._Han}>汉族民歌</Text>
                </View>
                <View style={{width:"45%",height:130 ,marginLeft:10,marginTop:10,borderRadius:10}}>
                    <Image style={{flex:1,borderRadius:10}} source={{uri:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=367518349,1267610317&fm=26&gp=0.jpg"}}/>
                    <Text style={{textAlign:"center"}} onPress={this._Sad}>伤感情歌</Text>
                </View>
                </View>
                </ImageBackground>                
            </View>

        )
    }
}
