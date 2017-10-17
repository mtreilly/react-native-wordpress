import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Posts from './Posts';
import Home from './Home'


const App = TabNavigator({
  Home: {
    name: "Home",
    description: "Home Tab",
    screen: Home,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: "Home",
      tabBarIcon: () => (
        <Image style={styles.tabBarIcon}
          source={require('./assets/home.png')}
        />
      ),
    })
  },
  Posts: {
    name: "Posts",
    description: "Posts Tab",
    screen: Posts,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: "Posts",
      tabBarIcon: () => (
        <Image style={styles.tabBarIcon}
          source={require('./assets/posts.png')}
        />
      ),
    }),
  },
}, {
  tabBarPosition: "bottom",
  initialRouteName: "Posts",
  animationEnabled: true,
  swipeEnabled: true,
  tabBarOptions: {
    showIcon: true,
    labelStyle: {
      fontSize: 8,
      marginTop: 2,
      marginBottom: 1,
    },
    style: {
      backgroundColor: 'white',
      paddingBottom: 2,
    },
    activeTintColor: "#5ECBD8",
    inactiveTintColor: "#AFB6BB",
    showLabel: true,
  }
});

const styles = StyleSheet.create({
    tabBarIcon: {
        width: 25,
        height: 25
    }

});

export default () => <App />;