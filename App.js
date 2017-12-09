import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import ArticleDetails from './ArticleDetails';
import ArticleList from './ArticleList';

const SimpleApp = StackNavigator({
  Home: {
    screen: ArticleList,
    navigationOptions: {
      headerTitle: 'Qiita Reader',
    },
  },
  Details: {
    screen: ArticleDetails
  }
});

export default class App extends Component {

  render() {
    return <SimpleApp />;
  }
}
