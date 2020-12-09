import React  from 'react';
import { StyleSheet } from 'react-native';

 const styles = StyleSheet.create({
     container:{
        marginTop:"3%"
     },
    btnContainer:{
        alignItems: 'center',
    justifyContent: 'center'
    },
    tkPictureBtnContaner:{
            backgroundColor: 'transparent',
            flexDirection: 'row',
            left:"2%"
    },
    cameraImageContainer:{
        width:"80%", 
        height:"75%",
        left:"10%"
    },
    displayPictureContainer:{
        marginTop:"2%",
        width:"50%", 
        height:"50%",
        left:"20%" 
    },
    btn:{
        margin:'3%',
        borderWidth:1,
        borderRadius:3,
        width:"70%",
        height:"20%",
        justifyContent: 'center'
    },
    clearBtn:{
        alignSelf:"flex-end",
        marginRight:"10%"
    },
    btn1:{
        backgroundColor:"#2A2A2A",
        borderColor:"#2A2A2A"
    },
    btn2:{
        backgroundColor:"#1CBBB4",
        borderColor:"#1CBBB4"
    },
    btn3:{
        backgroundColor:"#FF9D2A",
        borderColor:"#FF9D2A"
    },
    btn3Dissabled:{
        backgroundColor:"#FFB773",
        borderColor:"#FFB773"
    },
    btnTxt:{
        
        textAlign:"center",
        color: "#fff"
    },
    clearBtnTxt:{
        textDecorationLine:"underline",
        color:"#007AFF"
    },
    homeImage:{
        width:300,
        height:100,
        marginBottom:10
    },
    btnTkPicture:{
        marginTop:"2%",
        marginLeft:"1%",
        borderWidth:1,
        borderRadius:3,
        justifyContent: 'center',
        width:"30%",
        height:"30%"
        
    },
    btnDownloadPicture:{
        margin:'3%',
        borderWidth:1,
        borderRadius:3,
        width:"70%",
        height:"10%",
        left:"10%",
        justifyContent: 'center'
    },
    scrollviewStyle:{
        margin:"1%",
        height:100,
        width:"85%",
        left:"9%",
    }
  });

  export default styles;