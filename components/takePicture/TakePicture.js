import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Layout from '../Layout/Layout';

const TakePictureScreen = ({navigation}) => {
    return ( 
        <Layout navigation={navigation}>
            <View>
                <Text>TakePictureScreen</Text>
                <TouchableOpacity
                    onPress = {()=>{navigation.navigate('displayPicture')}}
                >
                    <Text>Next</Text>
                </TouchableOpacity>
            </View>
        </Layout>
     );
}
 
export default TakePictureScreen;