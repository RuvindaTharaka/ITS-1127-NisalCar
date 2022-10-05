import React, { useState } from 'react';
import {StyleSheet,View,Text,SafeAreaView,ScrollView,ImageBackground,TextInput,TouchableOpacity} from 'react-native';

export default function SignUpScreen ({ navigation }) {
    const [username,setUsername] = useState(''); 
    const [email,setEmail] = useState(''); 
    const [newPassword,setNewPassword] = useState(''); 
    const [confirmPassword,setConfirmPassword] = useState(''); 

    const saveData = function(){
        alert(username+" "+"successfully Signed Up!");
        navigation.navigate('HomeScreen', { name: 'HomeScreen' });
    }
    return(
        <SafeAreaView>
             <ScrollView>
                <View style={styles.container}>
                    <ImageBackground style = {styles.defaultBg} resizeMode = {'cover'} source= {require('../assests/logInBackground.jpg')} />
                    <Text style = {{textAlign:'center',fontSize:28,color:'#fff',fontWeight:'bold',marginTop:10}}>Welcome !</Text>
                    <Text style = {{textAlign:'center',fontSize:14,color:'#fff',marginTop:10}}>Sign Up to Continue!</Text>
                </View>
                <View style={{backgroundColor:'black',padding:10}}>
                    <View style = {styles.formInput}>
                        <Text style={{fontSize:16,fontWeight:'bold',marginLeft:3,color:'#fff'}}>Username</Text>
                        <TextInput style = {styles.textInput} placeholder = "Username" value={username} onChangeText = {(e)=> {setUsername(e)}}/>
                    </View>
                    <View style = {styles.formInput}>
                        <Text style={{fontSize:16,fontWeight:'bold',marginLeft:3 ,color:'#fff'}}>Email</Text>
                        <TextInput style = {styles.textInput} placeholder = "Email" value={email} onChangeText = {(e)=> {setEmail(e)}}/>
                    </View>
                    <View style = {styles.formInput}>
                        <Text style={{fontSize:16,fontWeight:'bold',marginLeft:3 ,color:'#fff'}}>New Password</Text>
                        <TextInput style = {styles.textInput} secureTextEntry={true} placeholder = "Password" value={newPassword} onChangeText = {(e)=> {setNewPassword(e)}}/>
                    </View>
                    <View style = {styles.formInput}>
                        <Text style={{fontSize:16,fontWeight:'bold',marginLeft:3,color:'#fff'}}>Confirm Password</Text>
                        <TextInput style = {styles.textInput} secureTextEntry={true} placeholder = "Password" value={confirmPassword} onChangeText = {(e)=> {setConfirmPassword(e)}}/>
                    </View>
                   
                    <View style = {styles.formInput}>
                        <TouchableOpacity style = {styles.defaultButton}>
                            <Text style = {{textAlign:'center',fontSize:20,color:'#fff',fontWeight:'bold',padding:15,backgroundColor : "#4287f5",borderRadius:10,marginTop:15}} onPress = {()=> {saveData()}} >Sign Up</Text>
                        </TouchableOpacity>
                    </View> 
                    <View style = {styles.formInput}>
                        <TouchableOpacity >
                            <Text style = {{textAlign:'left',fontSize:14,color:'#fff',fontWeight:'bold'}}>Already have an account? <Text style = {{textAlign:'left',fontSize:15,color:'cyan',fontWeight:'bold'}} onPress = {()=>  navigation.navigate('LogInScreen', { name: 'LogInScreen' })}>Sign In</Text></Text>
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
        backgroundColor:'black'
    },
    defaultBg : {
        width:'100%',
        height:200
    },
    formInput : {
        padding:3,
        margin:1
       
    },
    textInput : {
        padding:10,
        fontSize:16,
        borderWidth:1,
        borderColor: "#a7a7a7",
        borderRadius:10
    }
});