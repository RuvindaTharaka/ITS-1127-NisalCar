import React from "react";
import { useState } from "react";
import { View,SafeAreaView,StyleSheet,TextInput,ScrollView,TouchableOpacity,Text,Button,Image } from "react-native";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const options = {
    title: 'Select Image',
    type: 'library',
    options: {
        maxHeight: 200,
        maxWidth:200,
        selectionLimit:1,
        mediaType:'photo',
        includeBase64: false,
    },
}

export default function AddCarScreen ({ navigation }) {

    const [num,setNum] = useState("");
    const [name,setName] = useState("");
    const [con,setCon] = useState("");
    const [desc,setDesc] = useState("");
    const [image,setImage]=useState('');
    
    const openGallery=async()=>{
        const images = await launchImageLibrary(options,response =>{
            const source = {uri: 'data:image/jpeg;base64,' + response.base64};
            setImage(source);
            console.log(image+"img");
        });
     
      
    }
   
    
    const saveData = function () {
       alert(num+" saved Successfully!");
    }
    
    return(
        <SafeAreaView>
            <ScrollView>
                <View style={{flex:1,padding:10,backgroundColor:'grey'}}>
                    <Text style = {{textAlign:'center',fontSize:22,color:'#fff',fontWeight:'bold'}}  >Add Cars</Text>
                </View>
                <View style={styles.container}>
                    <View style = {styles.formInput}>
                        <Text style={{fontSize:16,fontWeight:'bold',marginLeft:3,color:'#fff'}}>Vehicle Number</Text>
                        <TextInput style = {styles.textInput} placeholder = "Vehicle Number" value={num} onChangeText = {(e)=> {setNum(e)}}/>
                    </View>
                    <View style = {styles.formInput}>
                        <Text style={{fontSize:16,fontWeight:'bold',marginLeft:3,color:'#fff'}}>Vehicle Name</Text>
                        <TextInput style = {styles.textInput} placeholder = "Vehicle Name" value={name} onChangeText = {(e)=> {setName(e)}}/>
                    </View>
                    <View style = {styles.formInput}>
                        <Text style={{fontSize:16,fontWeight:'bold',marginLeft:3,color:'#fff'}}>Oweners' Contact</Text>
                        <TextInput style = {styles.textInput} placeholder = "Oweners' Contact"  value={con} onChangeText = {(e)=> {setCon(e)}}/>
                    </View>
                    <View style = {styles.formInput}>
                        <Text style={{fontSize:16,fontWeight:'bold',marginLeft:3,color:'#fff'}}>Description</Text>
                        <TextInput style = {{ padding:10,fontSize:16,borderWidth:1,borderColor: "#a7a7a7",borderRadius:10, height:100}} placeholder = "Description"  value={desc} onChangeText = {(e)=> {setDesc(e)}}/>
                    </View>
                    <View style = {styles.formInput}>
                        <Text style={{fontSize:16,fontWeight:'bold',marginLeft:3,color:'#fff'}}>Image</Text>
                        <Image style={{height:150,width:300,borderWidth:1,borderColor:"#fff",borderRadius:10}}></Image>
                    </View>
                    <View style = {{alignItems:'flex-end',marginBottom:10}}>
                        <TouchableOpacity style = {{width:150}}>
                            <Text style = {{textAlign:'center',fontSize:16,color:'#fff',fontWeight:'bold',padding:5,backgroundColor : "grey",borderRadius:10}}  onPress = {()=> {openGallery()}}  >Add Car</Text>
                        </TouchableOpacity>
                    </View> 

                    <View style = {styles.formInput}>
                        <TouchableOpacity style = {styles.defaultButton}>
                            <Text style = {{textAlign:'center',fontSize:20,color:'#fff',fontWeight:'bold'}} onPress = {()=> {saveData()}} >Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container : {
        flex: 1,
        padding:10,
        backgroundColor:'black'
    },
    formInput : {
        marginTop:3,
        padding:5
    },
    textInput : {
        padding:8,
        fontSize:14,
        borderWidth:1,
        borderColor: "#fff",
        borderRadius:10,
        color:'#fff'
    },
    defaultButton : {
        padding:10,
        backgroundColor : "#4287f5",
        borderRadius:10
    }
});