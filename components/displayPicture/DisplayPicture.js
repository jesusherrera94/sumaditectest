import React, {useEffect,useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, View, TouchableOpacity,Image, ScrollView } from 'react-native';
import * as FileSystem from 'expo-file-system';
import Layout from '../Layout/Layout';
import axios from 'axios';
import styles from '../styles/styles';

const DisplayPictureScreen = ({navigation, route}) => {
    const { imageUri } = route.params;
    const [response, setResponse] = useState({"result":{"tags":[{"confidence":81.5485763549805,"tag":{"en":"window"}},{"confidence":33.8004417419434,"tag":{"en":"design"}},{"confidence":32.8310203552246,"tag":{"en":"business"}},{"confidence":31.1754341125488,"tag":{"en":"idea"}},{"confidence":30.0375556945801,"tag":{"en":"creative"}},{"confidence":29.7887268066406,"tag":{"en":"world wide web"}},{"confidence":29.4738235473633,"tag":{"en":"modern"}},{"confidence":27.4189338684082,"tag":{"en":"data"}},{"confidence":26.4829750061035,"tag":{"en":"element"}},{"confidence":24.8327217102051,"tag":{"en":"graphic"}},{"confidence":24.8203945159912,"tag":{"en":"information"}},{"confidence":24.7978324890137,"tag":{"en":"template"}},{"confidence":24.7937870025635,"tag":{"en":"copy"}},{"confidence":24.7196083068848,"tag":{"en":"art"}},{"confidence":24.0677871704102,"tag":{"en":"black"}},{"confidence":23.2257308959961,"tag":{"en":"page"}},{"confidence":23.0541801452637,"tag":{"en":"advertising"}},{"confidence":22.5568561553955,"tag":{"en":"collection"}},{"confidence":22.433406829834,"tag":{"en":"brochure"}},{"confidence":22.2290439605713,"tag":{"en":"cover"}},{"confidence":22.2179393768311,"tag":{"en":"advertisement"}},{"confidence":21.7094039916992,"tag":{"en":"associated"}},{"confidence":21.6860828399658,"tag":{"en":"composition"}},{"confidence":21.6759090423584,"tag":{"en":"association"}},{"confidence":21.6086044311523,"tag":{"en":"web site"}},{"confidence":21.5886917114258,"tag":{"en":"definition"}},{"confidence":21.4525661468506,"tag":{"en":"backdrop"}},{"confidence":21.4206428527832,"tag":{"en":"carpet"}},{"confidence":21.4180641174316,"tag":{"en":"advertise"}},{"confidence":21.2437915802002,"tag":{"en":"decor"}},{"confidence":21.2176742553711,"tag":{"en":"collage"}},{"confidence":21.2059650421143,"tag":{"en":"web"}},{"confidence":20.9001941680908,"tag":{"en":"decorative"}},{"confidence":20.2969703674316,"tag":{"en":"conceptual"}},{"confidence":20.1626262664795,"tag":{"en":"artwork"}},{"confidence":20.0563220977783,"tag":{"en":"menu"}},{"confidence":19.8243846893311,"tag":{"en":"cloud"}},{"confidence":19.7268924713135,"tag":{"en":"site"}},{"confidence":19.5599098205566,"tag":{"en":"decoration"}},{"confidence":18.3624897003174,"tag":{"en":"letter"}},{"confidence":17.751033782959,"tag":{"en":"keywords"}},{"confidence":16.5242462158203,"tag":{"en":"layout"}},{"confidence":16.3334941864014,"tag":{"en":"mix"}},{"confidence":15.9141426086426,"tag":{"en":"mosaic"}},{"confidence":15.6571254730225,"tag":{"en":"more"}},{"confidence":15.1316633224487,"tag":{"en":"communication"}},{"confidence":15.1235342025757,"tag":{"en":"website"}},{"confidence":14.9850950241089,"tag":{"en":"button"}},{"confidence":14.4463939666748,"tag":{"en":"navigation"}},{"confidence":14.3067464828491,"tag":{"en":"sign"}},{"confidence":13.877592086792,"tag":{"en":"bar"}},{"confidence":12.7281684875488,"tag":{"en":"month"}},{"confidence":12.6533193588257,"tag":{"en":"paper"}},{"confidence":12.6229429244995,"tag":{"en":"style"}},{"confidence":12.6068077087402,"tag":{"en":"calendar"}},{"confidence":12.5643501281738,"tag":{"en":"day"}},{"confidence":11.8896598815918,"tag":{"en":"icon"}},{"confidence":11.8132839202881,"tag":{"en":"planner"}},{"confidence":11.7726593017578,"tag":{"en":"annual"}},{"confidence":11.7437009811401,"tag":{"en":"organizer"}},{"confidence":11.7262763977051,"tag":{"en":"editable"}},{"confidence":11.4851503372192,"tag":{"en":"date"}},{"confidence":11.4573755264282,"tag":{"en":"symbol"}},{"confidence":11.1778297424316,"tag":{"en":"corporate"}},{"confidence":11.1747045516968,"tag":{"en":"future"}},{"confidence":11.0417785644531,"tag":{"en":"banner"}},{"confidence":10.9921140670776,"tag":{"en":"finance"}},{"confidence":10.9533462524414,"tag":{"en":"year"}},{"confidence":10.8715333938599,"tag":{"en":"almanac"}},{"confidence":10.5430631637573,"tag":{"en":"digital"}},{"confidence":10.5348148345947,"tag":{"en":"new"}},{"confidence":10.4854917526245,"tag":{"en":"text"}},{"confidence":10.2971744537354,"tag":{"en":"blank"}},{"confidence":10.2731046676636,"tag":{"en":"simple"}},{"confidence":10.2389240264893,"tag":{"en":"company"}},{"confidence":10.0968933105469,"tag":{"en":"space"}},{"confidence":9.9898567199707,"tag":{"en":"journal"}},{"confidence":9.86508464813232,"tag":{"en":"monthly"}},{"confidence":9.8505220413208,"tag":{"en":"browse"}},{"confidence":9.84466552734375,"tag":{"en":"week"}},{"confidence":9.84175300598145,"tag":{"en":"header"}},{"confidence":9.78271389007568,"tag":{"en":"schedule"}},{"confidence":9.71489238739014,"tag":{"en":"original"}},{"confidence":9.49597454071045,"tag":{"en":"ornament"}},{"confidence":9.15031242370605,"tag":{"en":"time"}},{"confidence":8.88915824890137,"tag":{"en":"calender"}},{"confidence":8.84227561950684,"tag":{"en":"office"}},{"confidence":8.79762363433838,"tag":{"en":"daily"}},{"confidence":8.66799068450928,"tag":{"en":"education"}},{"confidence":8.61012363433838,"tag":{"en":"holiday"}},{"confidence":8.57444763183594,"tag":{"en":"media"}},{"confidence":8.51523494720459,"tag":{"en":"money"}},{"confidence":8.42813491821289,"tag":{"en":"glossy"}},{"confidence":8.24797439575195,"tag":{"en":"ornate"}},{"confidence":8.20905017852783,"tag":{"en":"global"}},{"confidence":7.9994683265686,"tag":{"en":"market"}},{"confidence":7.89124822616577,"tag":{"en":"2010"}},{"confidence":7.88840246200562,"tag":{"en":"colorful"}},{"confidence":7.88051080703735,"tag":{"en":"agenda"}},{"confidence":7.81059694290161,"tag":{"en":"diary"}},{"confidence":7.80606555938721,"tag":{"en":"analysis"}},{"confidence":7.79989290237427,"tag":{"en":"season"}},{"confidence":7.73778200149536,"tag":{"en":"new year"}},{"confidence":7.61086940765381,"tag":{"en":"development"}},{"confidence":7.60003280639648,"tag":{"en":"net"}},{"confidence":7.58795833587646,"tag":{"en":"tech"}},{"confidence":7.53308582305908,"tag":{"en":"pattern"}},{"confidence":7.51947927474976,"tag":{"en":"learning"}},{"confidence":7.51247072219849,"tag":{"en":"label"}},{"confidence":7.48542785644531,"tag":{"en":"network"}},{"confidence":7.26261425018311,"tag":{"en":"computer"}},{"confidence":7.23896360397339,"tag":{"en":"color"}},{"confidence":7.13355398178101,"tag":{"en":"financial"}},{"confidence":7.01442718505859,"tag":{"en":"virus"}},{"confidence":7.01096487045288,"tag":{"en":"glass"}}]},"status":{"text":"","type":"success"}});

    const imageToBase64 =  ()=>{
        FileSystem.readAsStringAsync(imageUri,{encoding:FileSystem.EncodingType.Base64}).then(res=>{
            /*
            axios.post('https://sumaditectest.herokuapp.com/image/',{image:res}).then(res=>{
                console.log(res.data);
                setResponse(res.data);
            });
            */
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
                (<ScrollView style={styles.scrollviewStyle}>
                    <Text>{JSON.stringify(response)}</Text>
                </ScrollView>)
            }
                <TouchableOpacity
                    style={[styles.btnDownloadPicture, styles.btn1]}
                    onPress = {()=>{}}
                ><Text
                    style={styles.btnTxt}
                >Save this picture to Gallery</Text>
                </TouchableOpacity>
            </View>
        </Layout>
     );
}
 
export default DisplayPictureScreen;