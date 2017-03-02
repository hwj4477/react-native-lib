# Common
This library that makes 'React Native Component' similar to the 'iOS UIViewController' design pattern.

## NavigationController.js
NavigationController is similar to iOS UINavigationController.<br />
- Can be set RootViewControoler, NavigationBar Title
- Accessible from ViewController.

## ViewController.js
Viewcontroller is similar to iOS UIViewController.<br />
- Data passing uses props.
- Handling for android back button.

## Usage
``` javascript
/**
 *  index.ios.js
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import NavigationController from './react-native-lib/common/NavigationController';
import MainViewController from './MainViewController';

export default class ProjectName extends Component {

render() {

    return (

        <NavigationController rootViewController={MainViewController} title='RootViewController' />

    );
  }
}

AppRegistry.registerComponent('ProjectName', () => ProjectName);
    .
    .
    .


/**
 *  MainViewController.js
 */

 import SecondViewController from './SecondViewController';

 class MainViewController extends ViewController {

   _onForward = () => {
        this.props.navigator.push({
             title: "SecondView",
             viewController: SecondViewController,
             passProps:{
                .
                .
             },
        });
    }
        .
        .
        .
```
