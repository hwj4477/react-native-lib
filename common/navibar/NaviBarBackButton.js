/*
 *  NaviBarBackButton.js
 *
 *  last update 2017.03.03
 *
 *  hwj4477@gmail.com
 *
 */

import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

class NaviBarBackButton extends Component {

  static propTypes = {
    title: PropTypes.string,
    onBackPressed: PropTypes.func.isRequired,
  }

  static defaultProps = {
    title: 'Back',
  }

  render() {
    return (
      <TouchableHighlight underlayColor='gray' onPress={this.props.onBackPressed} style={{flex:1, padding:13}}>
        <View>
          <Text>{this.props.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

module.exports = NaviBarBackButton;
