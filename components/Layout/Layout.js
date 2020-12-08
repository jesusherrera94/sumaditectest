import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Battery from 'expo-battery';

const Layout = ({children,navigation}) => {

    const [batteryLevel, setBatteryLevel] = useState(null);

    //Battery level
     const batterySubscribe = async () => {
        const batteryLevel = await Battery.getBatteryLevelAsync();
        setBatteryLevel(batteryLevel);
      }

      useEffect(()=>{
          batterySubscribe();
          const subs = Battery.addBatteryLevelListener(({ batteryLevel }) => {
                            setBatteryLevel(batteryLevel);
                        });
          //unmount
          return () =>{
              subs.remove();
          }
      },[])

    return ( 
    <View style={styles.container}>
        <View>
            <Text>Battery: {Math.round(batteryLevel*100)}%</Text>
            <Text>Internet: </Text>
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
      backgroundColor: '#fff',
      alignItems: 'center',

    },
  });
  
 
export default Layout;