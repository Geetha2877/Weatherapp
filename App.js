import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default class WetherScreen extends Component {
constructor(){
  super()
  this.state={
    wether:''
  }
}

getWether=async()=>{

  var url='https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139';
 return fetch(url)
.then(response=>response.json())
.then(responseJson=>{
  this.setState({
    wether:responseJson
  })
})

.catch(error=>{
  console.error(error)
})

}
componentDidMount=()=>{
  this.getWether();
}

render() { 
  if (this.state.wether === '') 
  { return ( 
  <View style={styles.container}>
     <Text>Loading...</Text> 
     </View> 
     );
     }
  else {
     return ( 
     <View style={styles.container}> 
     <View style={styles.subContainer}> 
     <Text style={styles.title}> 
     Weather Forecast 
     </Text> 
     <Image style={styles.cloudImage} 
     source={require('./clouds.png')} />
      <View style={styles.textContainer}>
         <Text style={{ fontSize: 18}}> {this.state.wether.main.temp}&deg;C </Text>
          <Text style={{ fontSize: 20, margin:10}}> humidity : {this.state.wether.main.humidity} </Text> 
          <Text style={{fontSize: 20}}> {this.state.wether.weather[0].description} </Text> 
          </View> 
          </View> 
          </View> 
          ); 
        } } }





  const styles = StyleSheet.create({ 
      container: { flex:1 }, 
      subContainer : { flex: 1, borderWidth: 1, alignItems: 'center' },
       title:{ marginTop: 50, fontSize: 30, fontWeight: '550' }, 
       cloudImage :{ width: 200, height: 200, marginTop: 30 }, 
       textContainer : { flex: 1, alignItems: 'center', flexDirection:'row', marginTop:-150 }
     });

