import React, { Component } from 'react';
import { View,ScrollView,Keyboard,KeyboardAvoidingView,TouchableOpacity,TouchableWithoutFeedback,Text,TextInput,Image } from 'react-native';
import { LoginButton } from 'react-native-fbsdk';
import {styles} from './style';
import { Button } from 'react-native-elements';
import Icon from 'react-native-elements';
import {startTab} from '../RootScreen/TabScreen';

export default class Login extends Component {
  constructor(props){
    super(props)
    this.state={
      showPassword: true,
    }
  }
  showText(){
    this.setState({showPassword: !this.state.showPassword})
  }

  doLogin() {
    this.props.navigation.navigate('TabScreen')
  }
  render() {
    return (
      <ScrollView style = {styles.scrollContainer} showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView style = {styles.container} behavior ='padding'>
        <View style={styles.container}> 
          <Text style={styles.textLogo}>Log In</Text>
          <Text style={styles.textInputEmail}>EMAIL ADDRESS</Text>
          <TextInput style = {styles.inputEmail} keyboardType ='email-address' underlineColorAndroid = 'white' returnKeyType='next'></TextInput>
          <View style={styles.viewInput}>
            <Text style = {styles.textInputPassword}>PASSWORD</Text>
            <TouchableOpacity onPress={()=> this.showText()}>
              <Text style = {styles.textInputShow}>show</Text>
            </TouchableOpacity>
          </View>
          <TextInput style = {styles.inputEmail} secureTextEntry={this.state.showPassword} underlineColorAndroid = 'white' returnKeyType='go' onChangeText={(password) => this.setState({ password })}></TextInput>
          <TouchableOpacity onPress-={()=> this.doLogin()}>
            <View style={styles.viewBottom} icon={<Icon name='next'/>}></View>
          </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
};

module.exports = Login;