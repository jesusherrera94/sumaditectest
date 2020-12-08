import React,{ useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import Layout from '../Layout/Layout';
import { Camera } from 'expo-camera';


const TakePictureScreen = ({navigation}) => {
    
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [imageUri, setImageUri] = useState(null);
    let camera;
    useEffect(() => {
        (async () => {
          const { status } = await Camera.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);
    
      if (hasPermission === false||hasPermission === null) {
        return <Text>No access to camera</Text>;
      }

      const takePhoto = async ()=>{
        if(camera){
            let picture = await camera.takePictureAsync();
            setImageUri(picture.uri);
            console.log(picture.uri);
        }
      }

    return ( 
        <Layout navigation={navigation}>
            <View>
                {imageUri ==null?(null):(
                    <TouchableOpacity
                    onPress = {()=>{setImageUri(null)}}
                >
                    <Text>Clear</Text>
                </TouchableOpacity>
                )}
                <View style={{width:"80%", height:"80%" }}>
                {imageUri ==null?(
                        <Camera 
                        style={{ width:"100%", height:"100%"  }} 
                        type={type}
                        ref = {ref=>{camera = ref}}
                        >
                        <Text style={{color:"#fff"}}>Used Camera: {type==1?"Back":"Front"}</Text>
                    </Camera>
                ):(
                    <Image 
                        source={{uri:imageUri}}
                        style={{ width:"100%", height:"100%"  }}
                    />
                )}
                    
            </View>
            <View
                    style={{
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                    }}>
                <TouchableOpacity
                    style={{
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    }}
                    onPress={() => {
                    setType(
                        type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                    }}>
                    <Text > Flip </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {takePhoto}
                >
                    <Text>Take Picture</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    disabled={imageUri==null?true:false}
                    onPress = {()=>{navigation.navigate('displayPicture',{imageUri})}}
                >
                    <Text>Next</Text>
                </TouchableOpacity>
        </View>
            </View>
        </Layout>
     );
}
 
export default TakePictureScreen;