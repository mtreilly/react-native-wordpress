import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import MenuItem from './MenuItem';

const MENU_URL = 'http://reactnativewordpress.dev/wp-json/menus/menu';

export default class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            isLoadingMenu: true,
            menu: ''
        }
    }

    componentDidMount() {
        this.fetchMenuItems();
    }

    goToPage(page) {
        this.props.navigation.navigate('Posts');
    }

    fetchMenuItems() {
        fetch(MENU_URL)
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({
                isLoadingMenu: false,
                menu: responseData
            })
        })
        .done();
    }

    renderMenuItem(menuItem) {
        return <MenuItem title={menuItem.title} url={menuItem.url} key={menuItem.ID} />
    }

    render() {
        const isLoadingMenu = this.state.isLoadingMenu;
        
        return (
            <View style={styles.container}>
                <View style={styles.card} >
                    <Text>Home Screen</Text>
                    { isLoadingMenu ? <Text>Loading Menu...</Text>: this.state.menu.map(this.renderMenuItem) }
                </View>
                    <TouchableHighlight onPress={() => this.goToPage('Posts')}>
                        <View style={styles.card}>
                            <Text>Posts</Text>
                        </View>
                    </TouchableHighlight>
            </View>
        )
    }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  card: {
      backgroundColor: '#dedede',
      justifyContent: 'center',
      padding: 30,
      borderStyle: 'solid',
      borderColor: 'black',
      borderWidth: 3,
  }
});