import React, { Component } from "react";
import { View, Animated } from "react-native";

export default class Ball extends Component {

  componentWillMount() {
    this.position = new Animated.ValueXY(0, 0);
    Animated.spring(this.position, {
      toValue: { x: 200, y: 500 }
    }).start();
  }

  render() {
    const { ball } = styles;
    return (
    <Animated.View style={this.position.getLayout()}>
    <View style={ball} />
    </Animated.View>
    )
  }
}

const styles = {
  ball: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: "#000"
  }
};
