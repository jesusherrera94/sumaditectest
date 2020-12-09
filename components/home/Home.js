import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, Image, Alert } from 'react-native';
import Layout from '../Layout/Layout';
import * as ImagePicker from 'expo-image-picker';
import styles from '../styles/styles';


const Home = ({navigation}) => {

    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
            if (status !== 'granted') {
              Alert.alert('Sorry, we need camera roll permissions to make this work!');
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
            <View style={styles.btnContainer}>
              <Image
                    style={styles.homeImage}
                    source={require('../../assets/SUMADI.png')}
              />

                <TouchableOpacity
                    style={[styles.btn,styles.btn1]}
                    onPress = {()=>{navigation.navigate('newPicture')}}
                >
                    <Text style={styles.btnTxt}>Take New Picture</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.btn,styles.btn2]}
                    onPress = {pickImage}
                >
                    <Text style={styles.btnTxt}>Load Picture from Gallery</Text>
                </TouchableOpacity>
                
            </View>
        </Layout>
     );
}



 
export default Home;