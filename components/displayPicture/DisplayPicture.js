import React, {useEffect,useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, View, TouchableOpacity,Image, ScrollView,ToastAndroid,Platform,Alert } from 'react-native';
import * as FileSystem from 'expo-file-system';
import Layout from '../Layout/Layout';
import axios from 'axios';
import styles from '../styles/styles';
import * as MediaLibrary from 'expo-media-library';

const DisplayPictureScreen = ({navigation, route}) => {
    const { imageUri } = route.params;
    const [response, setResponse] = useState(null);

    const imageToBase64 =  ()=>{
        FileSystem.readAsStringAsync(imageUri,{encoding:FileSystem.EncodingType.Base64}).then(res=>{
            axios.post('https://sumaditectest.herokuapp.com/image/',{image:res}).then(res=>{
                setResponse(res.data);
            });
        });
    }
    const saveImage = ()=>{
        MediaLibrary.saveToLibraryAsync(imageUri).then(()=>{
            if(Platform.OS === 'android'){
                ToastAndroid.showWithGravityAndOffset(
                    "Image saved to library",
                    ToastAndroid.LONG,
                    ToastAndroid.BOTTOM,
                    25,
                    50
                );
            }
            else{
                Alert.alert("Image saved to library");
            }
            

        });
    }

    useEffect(() => {
        imageToBase64();
        
    }, []);

    return ( 
        <Layout navigation={navigation}>
            <View>
                <View style={styles.displayPictureContainer}>
                <Image 
                        source={{uri:imageUri}}
                        style={{ width:"100%", height:"100%"  }}
                />
                </View>
                {response==null?
                    (
                        <View style={{marginTop:35}}>
                            <ActivityIndicator size="large" color="#007AFF"/>
                        </View>
                    )
                    :
                    (
                        <ScrollView style={styles.scrollviewStyle}>
                            <Text>{JSON.stringify(response)}</Text>
                        </ScrollView>
                    )
                }
                <TouchableOpacity
                                style={[styles.btnDownloadPicture, styles.btn1]}
                                onPress = {saveImage}
                >
                    <Text style={styles.btnTxt}>Save this picture to Gallery</Text>
                </TouchableOpacity>
            </View>
        </Layout>
     );
}
 
export default DisplayPictureScreen;