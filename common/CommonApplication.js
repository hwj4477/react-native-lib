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

import MainScene from './MainScene';
import DayListScene from './DayListScene';
import DayDetailScene from './DayDetailScene';

class CommonApplication extends Component {

  _renderScene(route, navigator) {
       var routeId = route.id;

       if (routeId == 'MainScene') {
           return (<MainScene navigator={navigator} passValues={route.passProps}/>);
       }

       if (routeId == 'DayListScene') {
           return (<DayListScene navigator={navigator} passValues={route.passProps}/>);
       }

       if (routeId == 'DayDetailScene') {
          return (<DayDetailScene navigator={navigator} passValues={route.passProps}/>);
       }
  }

  render() {
    return (
      <Navigator
        initialRoute={{
          title: 'ReactProject',
          id: 'MainScene'
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
                if (route.id == 'MainScene') {
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
                return <Text>{route.id}</Text>;
              },
            }}
            style={{backgroundColor: 'white'}}
            />
        }
      />
    );
  }
}

module.exports = App;
