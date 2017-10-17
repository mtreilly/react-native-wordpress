import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';
import Post from './Post';
import * as firebase from 'firebase';


const POST_URL = 'http://reactnativewordpress.dev/wp-json/wp/v2/posts';


// Initialize Firebase
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class Posts extends React.Component {



    constructor() {
        super();
        this.itemsRef = firebaseApp.database().ref('isUpdated');
        this.state = {
            isLoading: true,
        };
    }

    componentWillMount() {
        this.itemsRef.on('value', (item) => {
            
            console.log(item);
            console.log(typeof item.val());
            if (item.val() === true) {
                console.log("Updating Value");
                this.state = {
                    isLoading: true,
                }
                this.fetchAllPosts();

            } else {
                console.log("No Update Needed");
            }
            
        });
    }

    componentDidMount() {
        this.fetchAllPosts();
    }

    fetchAllPosts() {
        fetch(POST_URL,
            {
                headers: {
                  'Cache-Control': 'no-cache',
                },
                cache: 'no-store'
              } 
        )
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({
                isLoading: false,
                posts: responseData
            })
        })
        .done();
    }

    renderPost(post) {
        return (
        <View style={styles.card} key={post.id} >
            <Post title={post.title.rendered} content={post.plaintext} featured={post.superimportant}/>
        </View>
        )
    }


    render() {
        const isLoading = this.state.isLoading;

        if (isLoading) {
            return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
            )
        }
        return (
            <View style={styles.container}>
                <Text>Posts</Text>
                { this.state.posts.map(this.renderPost) }
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
      backgroundColor: '#dedede',
      justifyContent: 'center',
      padding: 30,
      marginTop: 20,
      borderStyle: 'solid',
      borderColor: 'black',
      borderWidth: 3,
  }
});
