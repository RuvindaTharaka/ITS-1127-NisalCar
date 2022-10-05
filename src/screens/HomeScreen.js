import { Button } from 'native-base';
import React, { useState,useEffect } from 'react';
import { StyleSheet,View,Text,FlatList,TouchableOpacity, ImageBackground } from 'react-native'

export default function HomeScreen ({ navigation }) {
   
    const object = ['src\assests\V001-BackView.jpg','src\assests\V001-FrontView.jpg','src\assests\V001-LeftView.jpg'];

    const [posts, setPosts] = useState([]);
    const [images, setImages] = useState([]);

    function setImg(){
      for (let index = 0; index < object.length; index++) {
        setImages(object[index]);
        console.log(images);
      }
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setPosts(json)); setImg();
    })

    return (
        <View style={{padding:20}}>
            <View style = {{alignItems:'flex-end',marginBottom:10}}>
                <TouchableOpacity style = {{width:150}}>
                    <Text style = {{textAlign:'center',fontSize:20,color:'#fff',fontWeight:'bold',padding:10,backgroundColor : "#4287f5",borderRadius:10}}  onPress={() => navigation.navigate('AddCarScreen', { name: 'AddCarScreen' })} >Add Car</Text>
                </TouchableOpacity>
            </View> 
            <View>
                <FlatList
                    data={posts}
                    renderItem={({ item,images }) =>
                        <TouchableOpacity style={{borderWidth:1, marginBottom:'5%', padding:5,backgroundColor:'black'}} onPress={()=>{console.log("hello");}}>
                            <Text style={{marginBottom:10,fontWeight:'bold'}} >{item.title}</Text>
                            <Text style={{marginBottom:10}} >{item.body}</Text>
                            <ImageBackground style = {{width:100,height:100}} resizeMode = {'contain'} source= {images} />
                        </TouchableOpacity>
                    }
                />
            </View> 
        </View>
    )
}

const styles = StyleSheet.create({});