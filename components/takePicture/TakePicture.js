import React,{ useState, useEffect } from 'react';
import { Text, View, TouchableOpacity,Image } from 'react-native';
import Layout from '../Layout/Layout';
import { Camera } from 'expo-camera';
import styles from '../styles/styles';

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
        }
      }

    return ( 
        <Layout navigation={navigation}>
            <View style={styles.container}>

                {imageUri ==null?
                    (null)
                    :
                    (
                        <TouchableOpacity
                                        style={styles.clearBtn}
                                        onPress = {()=>{setImageUri(null)}}
                        >
                            <Text
                                style={styles.clearBtnTxt}
                            >
                                Clear
                            </Text>
                        </TouchableOpacity>
                    )
                }

                <View style={styles.cameraImageContainer}>
                {imageUri ==null?
                    (
                        <Camera 
                                style={{ width:"100%", height:"100%"  }} 
                                type={type}
                                ref = {ref=>{camera = ref}}
                        >
                            <Text style={{color:"#fff"}}>Used Camera: {type==1?"Back":"Front"}</Text>
                        </Camera>
                    )
                    :
                    (
                        <Image 
                            source={{uri:imageUri}}
                            style={{ width:"100%", height:"100%"  }}
                        />
                    )
                }  
                </View>

                <View
                    style={styles.tkPictureBtnContaner}
                >
                    <TouchableOpacity
                                    style={[styles.btnTkPicture,styles.btn1]}
                                    onPress={() => {
                                                    setType(
                                                            type === Camera.Constants.Type.back
                                                            ? Camera.Constants.Type.front
                                                            : Camera.Constants.Type.back
                                                        );
                                            }}
                    >
                        <Text style={styles.btnTxt}> Flip </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                                    style={[styles.btnTkPicture,styles.btn2]}
                                    onPress = {takePhoto}
                    >
                        <Text style={styles.btnTxt}>Take Picture</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                                    style={[styles.btnTkPicture,imageUri==null?styles.btn3Dissabled:styles.btn3]}
                                    disabled={imageUri==null?true:false}
                                    onPress = {()=>{navigation.navigate('displayPicture',{imageUri})}}
                    >
                        <Text style={styles.btnTxt}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Layout>
     );
}
 
export default TakePictureScreen;