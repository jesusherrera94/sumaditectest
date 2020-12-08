import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Battery from 'expo-battery';
import NetInfo from '@react-native-community/netinfo';

const Layout = ({children,navigation}) => {

    const [batteryLevel, setBatteryLevel] = useState(null);
    const [networkInfo, setNetworkInfo] = useState({
                                                    type:null,
                                                    isConnected:null
                                                    });
    //Battery level
     const batterySubscribe = async () => {
        const batteryLevel = await Battery.getBatteryLevelAsync();
        setBatteryLevel(batteryLevel);
      }

      useEffect(()=>{
          //battery info
          batterySubscribe();
          const subs = Battery.addBatteryLevelListener(({ batteryLevel }) => {
                            setBatteryLevel(batteryLevel);
                        });
          //Netinfo
          const unsubscribe = NetInfo.addEventListener(state => {
            setNetworkInfo({
                            type:state.type,
                            isConnected: state.isInternetReachable?"Conected":"No internet"
                            });
          });               
          //unmount
          return () =>{
              subs.remove();
              unsubscribe();
          }
      },[])

    return ( 
    <View style={styles.container}>
        <View>
            <Text>Battery: {Math.round(batteryLevel*100)}%</Text>
            <Text>Conection: {networkInfo.type} {networkInfo.isConnected}</Text>
        </View>
      <Text>Layout</Text>
      {children}
      <StatusBar style="auto" />
    </View>
     );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'

    },
  });
  
 
export default Layout;