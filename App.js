import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import ArticleList from './ArticleList';

const SimpleApp = StackNavigator({
  Home: {
    screen: ArticleList,
    navigationOptions: {
      headerTitle: 'Qiita Reader',
    },
  }
});

export default class App extends Component {

  render() {
    return <SimpleApp />;
  }
}
