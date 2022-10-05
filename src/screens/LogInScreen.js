import React, { useState } from 'react';
import {StyleSheet,View,Text,SafeAreaView,ScrollView,ImageBackground,TextInput,TouchableOpacity} from 'react-native';

export default function LogInScreen ({ navigation }) {
    const [username,setUsername] = useState(''); 
    const [password,setPassword] = useState(''); 

    const saveData = function(){
        alert(username+" "+" is Successfully Singed Up!");
        navigation.navigate('HomeScreen', { name: 'HomeScreen' })
    }
    return(
        <SafeAreaView>
             <ScrollView>
                <View style={styles.container}>
                    <ImageBackground style = {styles.defaultBg} resizeMode = {'cover'} source= {require('../assests/logInBackground.jpg')} />
                    <Text style = {{textAlign:'center',fontSize:28,color:'#fff',fontWeight:'bold',marginTop:10}}>Welcome Back!</Text>
                    <Text style = {{textAlign:'center',fontSize:14,color:'#fff',marginTop:10}}>Sign In to Enjoy!</Text>
                </View>
                <View style={{padding:10, borderWidth:0,borderColor:"#fff",margin:0,backgroundColor:"black"}}>
                    <View style = {styles.formInput}>
                        <Text style={{fontSize:16,fontWeight:'bold',marginLeft:3}}>Username</Text>
                        <TextInput style = {styles.textInput} placeholder = "Username" value={username} onChangeText = {(e)=> {setUsername(e)}}/>
                    </View>
                    <View style = {styles.formInput}>
                        <Text style={{fontSize:16,fontWeight:'bold',marginLeft:3}}>Password</Text>
                        <TextInput style = {styles.textInput} secureTextEntry={true} placeholder = "Password" value={password} onChangeText = {(e)=> {setPassword(e)}}/>
                    </View>
                    <View style = {styles.formInput}>
                        <TouchableOpacity >
                            <Text style = {{textAlign:'right',fontSize:14,color:'cyan',fontWeight:'bold'}} onPress = {()=>  navigation.navigate('ForgotPasswordScreen', { name: 'ForgotPasswordScreen' })}>Forgot Password ?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.formInput}>
                        <TouchableOpacity style = {styles.defaultButton}>
                            <Text style = {{textAlign:'center',fontSize:20,color:'#fff',fontWeight:'bold',padding:15,backgroundColor : "#4287f5",borderRadius:10}} onPress = {()=> {saveData()}} >Sign In</Text>
                        </TouchableOpacity>
                    </View> 
                    <View style = {styles.formInput}>
                        <TouchableOpacity >
                        <Text style = {{textAlign:'left',fontSize:14,color:'#fff',fontWeight:'bold'}}>No account? <Text style = {{textAlign:'left',fontSize:15,color:'cyan',fontWeight:'bold'}} onPress = {()=>  navigation.navigate('SignUpScreen', { name: 'SignUpScreen' })}>Sign Up</Text></Text>
                        </TouchableOpacity>
                    </View>
        
                </View>
             </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black"
    },
    defaultBg : {
        width:'100%',
        height:250,
        backgroundColor:"black"
    },
    formInput : {
        marginTop:10,
        padding:10,
        backgroundColor:"black"
    },
    textInput : {
        padding:10,
        fontSize:16,
        borderWidth:1,
        borderColor: "#a7a7a7",
        borderRadius:10
    }
});