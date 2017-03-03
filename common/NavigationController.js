/*
 *  NavigationController.js
 *
 *  last update 2017.03.02
 *
 *  hwj4477@gmail.com
 *
 */

import React, { Component, PropTypes } from 'react';
import { AppRegistry, Navigator, Text, View, StyleSheet } from 'react-native';

import NaviBarTitle from './navibar/NaviBarTitle';
import NaviBarBackButton from './navibar/NaviBarBackButton';

var navigationController;

const defaultStyle = {
  backgroundColor: 'gray',
};

class NavigationController extends Component {

  static propTypes = {
    title: PropTypes.string,              //  RootViewController Title
    rootViewController: PropTypes.func,   //  RooViewController Component
    navigationStyle: PropTypes.object,    //  Navigator.NavigationBar Styles (Styles.IOS / Styles.Android)
    naviBarStyle: PropTypes.object,       //  NavigationBar props.style
    naviBarTitle: PropTypes.func,         //  NaviBarTitle Component
    naviBarTitleStyle: PropTypes.object,  //  NaviBarTitle props.style
    naviBarBackButton: PropTypes.func,    //  NaviBarBackButton Component
    naviBarBackStyle: PropTypes.object,   //  NaviBarBackButton props.style
  }

  static defaultProps = {
    navigationStyle: Navigator.NavigationBar.StylesIOS,
    naviBarStyle: defaultStyle,
    naviBarTitle: NaviBarTitle,
    naviBarBackButton: NaviBarBackButton,
  }

  _renderScene(route, navigator) {
       var vc = route.viewController;

      return (

        React.createElement(vc, {navigator: navigator, passProps: route.passProps})

      );
  }

  _onBackPressed = () => {

    navigationController.pop();

  }

  render() {
    return (
      <Navigator
        initialRoute={{
          title: this.props.title,
          viewController: this.props.rootViewController,
        }}
        renderScene={(route, navigator) =>
          this._renderScene(route, navigator)
        }
        navigationBar={
          <Navigator.NavigationBar
            navigationStyles={this.props.navigationStyle}
            routeMapper={{
              LeftButton: (route, navigator, index, navState) =>
              {
                if (route.viewController == this.props.rootViewController) {
                  return null;
                } else {

                  navigationController = navigator;

                  var backButton = this.props.naviBarBackButton;

                  return (

                    React.createElement(backButton, {title: route.backTitle, style:this.props.naviBarBackStyle, onBackPressed: this._onBackPressed})

                  );
                }
              },
              RightButton: (route, navigator, index, navState) =>
              { return null; },
              Title: (route, navigator, index, navState) =>
              {
                var naviTitle = this.props.naviBarTitle;

                return (

                  React.createElement(naviTitle, {title: route.title, style: this.props.naviBarTitleStyle})

                );
              },
            }}
            style={this.props.naviBarStyle}
            />
        }
      />
    );
  }
}

module.exports = NavigationController;
