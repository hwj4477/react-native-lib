/*
 *  CommonApplication.js
 *
 *  last update 2017.03.02
 *
 *  hwj4477@gmail.com
 *
*/

import React, { Component, PropTypes } from 'react';
import { AppRegistry, Navigator, Text, TouchableHighlight } from 'react-native';

class CommonApplication extends Component {

  static propTypes = {
    rootVCId: PropTypes.string,
    rootVCTitle: PropTypes.string,
    viewControllers: PropTypes.object,
  }

  _renderScene(route, navigator) {
       var routeId = route.id;
       var vc = this.props.viewControllers[routeId];

      return (

        React.createElement(vc, {navigator: navigator, passValues: route.passProps})

      );
  }

  render() {
    return (
      <Navigator
        initialRoute={{
          id: this.props.rootVCId,
          title: this.props.rootVCTitle,
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
                if (route.id == this.props.rootVCId) {
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

module.exports = CommonApplication;
