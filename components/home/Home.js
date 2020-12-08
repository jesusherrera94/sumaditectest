import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Layout from '../Layout/Layout';

const Home = ({navigation}) => {
    return ( 
        <Layout navigation={navigation} >
            <View>
                <Text>HomeScreen</Text>
                <TouchableOpacity
                    onPress = {()=>{navigation.navigate('newPicture')}}
                >
                    <Text>Take New Picture</Text>
                </TouchableOpacity>
            </View>
        </Layout>
     );
}
 
export default Home;