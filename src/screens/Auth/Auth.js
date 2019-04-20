import React, { Component } from "react";
import { Text, View, Button } from "react-native";

import startTabs from "../MainTaps/startMainTap";

export default class AuthScreens extends Component {
  loginHandler = () => {
    startTabs();
  };

  render() {
    return (
      <View>
        <Text>Auth Screen 1</Text>
        <Button title="Login" onPress={this.loginHandler} />
      </View>
    );
  }
}
