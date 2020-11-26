import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import db from '../config.js'

export default class Donate extends React.Component {

  constructor(){
    super();
    this.state={
      RequestBookList:[],
    }
  }

  componentDidMount(){
    this.getRequestBookList()
  }

  getRequestBookList=()=>{
    db.collection("Requested_Books").onSnapshot((Snapshot)=>{
      var RequestBookList=Snapshot.docs.map(document=>document.data())
      this.setState({RequestBookList:RequestBookList})
    })
  }

    render(){
      return (
        <View>
            <Text>Donate</Text>
            <FlatList keyExtractor={(item,index)=>{index.toString()}} data={this.state.RequestBookList} renderItem={({item})=>{}}>
              
            </FlatList>
        </View>
      );
    }
  }