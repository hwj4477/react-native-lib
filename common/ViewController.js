import React, { Component, PropTypes } from 'react'
import { Navigator, BackAndroid } from 'react-native';

var nav;

class ViewController extends Component {

  constructor(props) {
    super(props);

    nav = this.props.navigator;
  }

  static propTypes = {
    navigator: PropTypes.object,
    passValues: PropTypes.object,
  }

  _onBack = () => {
    this.props.navigator.pop();
  }
}

BackAndroid.addEventListener('hardwareBackPress', () => {
    if (nav && nav.getCurrentRoutes().length > 1) {
        nav.pop();
        return true;
    }
    return false;
});

module.exports = ViewController;
