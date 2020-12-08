import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Layout from '../Layout/Layout';

const DisplayPictureScreen = ({navigation}) => {
    return ( 
        <Layout navigation={navigation}>
            <View>
                <Text>DisplayPictureScreen</Text>
                <TouchableOpacity
                    onPress = {()=>{}}
                ><Text>Save this picture from Gallery</Text>
                </TouchableOpacity>
            </View>
        </Layout>
     );
}
 
export default DisplayPictureScreen;