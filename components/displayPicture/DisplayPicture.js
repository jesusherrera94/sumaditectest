import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import Layout from '../Layout/Layout';

const DisplayPictureScreen = ({navigation, route}) => {
    const { imageUri } = route.params;
    return ( 
        <Layout navigation={navigation}>
            <View>
            <View style={{width:"80%", height:"80%" }}>
            <Image 
                        source={{uri:imageUri}}
                        style={{ width:"100%", height:"100%"  }}
            />
            </View>
                <TouchableOpacity
                    onPress = {()=>{}}
                ><Text>Save this picture from Gallery</Text>
                </TouchableOpacity>
            </View>
        </Layout>
     );
}
 
export default DisplayPictureScreen;