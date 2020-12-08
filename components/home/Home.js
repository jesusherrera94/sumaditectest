import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import Layout from '../Layout/Layout';
import * as ImagePicker from 'expo-image-picker';



const Home = ({navigation}) => {

    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
            if (status !== 'granted') {
              //alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);

      const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        if (!result.cancelled) {
            navigation.navigate('displayPicture',{imageUri:result.uri});
        }
      };

    return ( 
        <Layout navigation={navigation} >
            <View>
                <Text>HomeScreen</Text>
                <TouchableOpacity
                    onPress = {()=>{navigation.navigate('newPicture')}}
                >
                    <Text>Take New Picture</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {pickImage}
                >
                    <Text>Load Picture from Gallery</Text>
                </TouchableOpacity>
            </View>
        </Layout>
     );
}
 
export default Home;