import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import db from '../config.js'

export default class Request extends React.Component {

  constructor() {
    super();
    this.state = {
      Reason: '',
      BookName: '',
      UserID: firebase.auth().currentUser.email,
    }
  }

  addRequest = (BookName, Reason) => {
    db.collection('Requested_Books').add({
      BookName: BookName,
      Reason: Reason,
      UserId:this.state.UserID,
      UniqueID:Math.random().toString(36).substring(8)
    })
  }

  render() {
    return (
      <View>
        <Text>Request</Text>
        <TextInput placeholder={"Name"} onChangeText={text =>  this.setState({ BookName: text }) } value={this.state.BookName}></TextInput>
        <TextInput placeholder={"Reason"} onChangeText={text =>  this.setState({ Reason: text }) } value={this.state.Reason}></TextInput>
        <TouchableOpacity style={{ width: 100, height: 40, backgroundColor: "lightgreen", borderWidth: 2, marginTop: 20, shadowColor: '#000000', shadowOffset: { width: 10, height: 10, }, shadowOpacity: 0.5, shadowRadius: 10.32, elevation: 10, }} onPress={() => { this.addRequest(this.state.BookName, this.state.Reason) }}></TouchableOpacity>
      </View>
    );
  }
}