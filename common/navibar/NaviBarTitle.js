/*
 *  NaviBarTitle.js
 *
 *  last update 2017.03.03
 *
 *  hwj4477@gmail.com
 *
 */

import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';

class NaviBarTitle extends Component {

  static propTypes = {
    title: PropTypes.string,
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>{this.props.title}</Text>
      </View>
    );
  }
}

module.exports = NaviBarTitle;
