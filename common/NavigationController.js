/*
 *  NavigationController.js
 *
 *  last update 2017.03.02
 *
 *  hwj4477@gmail.com
 *
*/

import React, { Component, PropTypes } from 'react';
import { AppRegistry, Navigator, Text, TouchableHighlight } from 'react-native';

class NavigationController extends Component {

  static propTypes = {
    title: PropTypes.string,
    rootViewController: PropTypes.func,
  }

  _renderScene(route, navigator) {
       var vc = route.viewController;

      return (

        React.createElement(vc, {navigator: navigator, passValues: route.passProps})

      );
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
            navigationStyles={Navigator.NavigationBar.StylesIOS}
            routeMapper={{
              LeftButton: (route, navigator, index, navState) =>
              {
                if (route.viewController == this.props.rootViewController) {
                  return null;
                } else {
                  return (
                    <TouchableHighlight onPress={() => navigator.pop()}>
                        <Text style={{marginLeft: 10}}>Back</Text>
                    </TouchableHighlight>
                  );
                }
              },
              RightButton: (route, navigator, index, navState) =>
              { return null; },
              Title: (route, navigator, index, navState) =>
              {
                return <Text>{route.title}</Text>;
              },
            }}
            style={{backgroundColor: 'white'}}
            />
        }
      />
    );
  }
}

module.exports = NavigationController;
