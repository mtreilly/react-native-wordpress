import React from 'react';
import { Text, View } from 'react-native';


export default MenuItem = (props) => (
    <View>
        <Text>Menu Title: {props.title}</Text>
        <Text>Menu URL: {props.url}</Text>
    </View>
);