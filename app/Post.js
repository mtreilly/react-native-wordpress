import React from 'react';
import { Text, View } from 'react-native';


export default Post = function(props) {
    if (props.featured === true) {
        return (
            <View style={{backgroundColor: 'red'}}>
                <Text style={{color: 'white'}}>Post Title: {props.title}</Text>
                <Text style={{color: 'white'}}>Post Content: {props.content}</Text>
            </View>
        )
    } else {
        return (
            <View>
                <Text>Post Title: {props.title}</Text>
                <Text>Post Content: {props.content}</Text>
            </View>
        )
    }
};